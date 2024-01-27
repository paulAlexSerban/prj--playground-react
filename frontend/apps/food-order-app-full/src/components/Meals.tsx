import { type FC, useEffect, useState } from 'react';
import HttpRequestFacade from '../util/HttpRequestFacade';
import MealItem from './MealItem';
const api = new HttpRequestFacade();

type RawMealData = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
};

const Meals: FC = () => {
    const [fetchedData, setFetchedData] = useState<RawMealData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsFetching(true);
            try {
                const rawData: RawMealData[] = await api.get('http://localhost:4001/meals');
                const meals: RawMealData[] = rawData;
                setFetchedData(meals);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setIsFetching(false);
            }
        };

        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {!isFetching &&
                fetchedData.map((meal) => (
                    <MealItem
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                        image={meal.image}
                    />
                ))}
            {isFetching && <p>Loading meals...</p>}
            {error && <p>{error}</p>}
        </ul>
    );
};

export default Meals;
