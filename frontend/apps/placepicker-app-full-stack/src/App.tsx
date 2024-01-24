import { useRef, useState, useCallback, useEffect } from 'react';

import Places, { Place } from './components/Places.tsx';
import Modal from './components/Modal.tsx';
import DeleteConfirmation from './components/DeleteConfirmation.tsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.tsx';
import { updateUserPlaces, fetchAvailablePlaces } from './http.ts';
import ErrorCmp from './components/Error.tsx';
function App() {
    const selectedPlace = useRef<Place | null>();
    const [userPlaces, setUserPlaces] = useState<Place[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<{ message: string } | null>(null);

    function handleStartRemovePlace(place: Place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    const handleSelectPlace = async (selectedPlace: Place) => {
        // the practice used here is called optimistic updating
        // we update the UI first and then send the request to the server
        setUserPlaces((prevPickedPlaces) => {
            // Ensure prevPickedPlaces is not null
            const updatedPickedPlaces = prevPickedPlaces ? [...prevPickedPlaces] : [];
            // Check if the place is already in the list
            if (updatedPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return updatedPickedPlaces;
            }
            // Add the new place
            console.log([selectedPlace, ...updatedPickedPlaces]);
            return [selectedPlace, ...updatedPickedPlaces];
        });

        // this won't work because the state update is scheduled and not executed immediately
        // updateUserPlaces(userPlaces);
        try {
            if (userPlaces.some((place) => place.id === selectedPlace.id)) {
                return;
            }
            // this will work because we use the updater function form of setState
            await updateUserPlaces([selectedPlace, ...userPlaces]);
        } catch {
            setErrorUpdatingPlaces({
                message: 'Failed to update your places. Please try again later.',
            });
            setUserPlaces(userPlaces);
            // we don't need to do anything here because the error is already handled in the updateUserPlaces() function
        }
    };

    const handleRemovePlace = useCallback(
        async function handleRemovePlace() {
            // the practice used here is called optimistic updating instead of using a loading indicator
            // we update the UI first and then send the request to the server
            setUserPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter((place) => {
                    if (selectedPlace.current) {
                        return place.id !== selectedPlace.current.id;
                    }
                })
            );

            try {
                await updateUserPlaces(
                    userPlaces.filter((place) => {
                        if (selectedPlace.current) {
                            return place.id !== selectedPlace.current.id;
                        }
                    })
                );
            } catch {
                setUserPlaces(userPlaces);
                setErrorUpdatingPlaces({
                    message: 'Failed to update your places. Please try again later.',
                });
                // we don't need to do anything here because the error is already handled in the updateUserPlaces() function
            }

            setModalIsOpen(false);
        },
        [userPlaces]
    );

    useEffect(() => {
        setIsFetching(true);
        // this is the best practice of using async/await in useEffect
        const fetchPlaces = async () => {
            try {
                // we need try/catch because fetch() can also fail (e.g. if the server is not reachable)
                const places = await fetchAvailablePlaces('http://localhost:4001/user-places');
                setUserPlaces(places);
                // end loading state no matter if the request succeeded or failed because we don't want to show the loading indicator forever
                setIsFetching(false);
            } catch (error) {
                if (error instanceof Error) {
                    setErrorUpdatingPlaces({
                        message: error.message || 'Something went wrong!',
                    });
                    setIsFetching(false);
                }
            }
        };
        fetchPlaces();
    }, []);

    const handleError = () => {
        setErrorUpdatingPlaces(null);
    };

    return (
        <>
            <Modal open={!!errorUpdatingPlaces} onClose={handleError}>
                {errorUpdatingPlaces && (
                    <ErrorCmp
                        title="Failed to update your places"
                        message={errorUpdatingPlaces.message}
                        onConfirm={handleError}
                    />
                )}
            </Modal>

            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>Create your personal collection of places you would like to visit or you have visited.</p>
            </header>
            <main>
                <Places
                    title="I'd like to visit ..."
                    fallbackText="Select the places you would like to visit below."
                    places={userPlaces}
                    onSelectPlace={handleStartRemovePlace}
                    loadingText="Fetching your places..."
                    isLoading={isFetching}
                />

                <AvailablePlaces onSelectPlace={handleSelectPlace} />
            </main>
        </>
    );
}

export default App;
