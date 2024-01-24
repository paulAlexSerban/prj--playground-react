import { FC, useEffect, useState } from 'react';
import Places, { Place } from './Places.tsx';
import ErrorCmp from './Error.tsx';
import { sortPlacesByDistance } from '../loc.ts';
import { fetchAvailablePlaces } from '../http.ts';
type AvailablePlacesProps = {
    onSelectPlace: (place: Place) => void;
};
const AvailablePlaces: FC<AvailablePlacesProps> = ({ onSelectPlace }) => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
    const [error, setError] = useState<{ message: string } | null>(null);
    useEffect(() => {
        setIsFetching(true);
        // this is the best practice of useing async/await in useEffect
        const fetchPlaces = async () => {
            try {
                // we need try/catch because fetch() can also fail (e.g. if the server is not reachable)
                const places = await fetchAvailablePlaces('http://localhost:4001/places');

                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude
                    );
                    setAvailablePlaces(sortedPlaces);
                    // end loading state no matter if the request succeeded or failed because we don't want to show the loading indicator forever
                    setIsFetching(false);
                });
            } catch (error) {
                if (error instanceof Error) {
                    setError({
                        message: error.message || 'Something went wrong!',
                    });
                    setIsFetching(false);
                }
            }
        };
        fetchPlaces();
    }, []);

    if (error) {
        return (
            <ErrorCmp
                title="Failed to fetch places"
                message={error.message}
                onConfirm={() => {
                    setError(null);
                }}
            />
        );
    }
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            loadingText="Fetching place data..."
            isLoading={isFetching}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
};

export default AvailablePlaces;
