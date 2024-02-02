import DisplayUser from './components/DisplayUser';
import VideoList from './components/VideoList';
import './App.css';

const user_1 = {
    name: 'Josh',
    age: 23,
    hairColor: 'blonde',
    heightInCm: 175,
};

const user_2 = {
    personalInfo: {
        name: 'Josh',
        age: 23,
    },
    physicalFeatures: {
        hairColor: 'blone',
        heightInCM: 175,
    },
};

const videoList = [
    {
        id: 1,
        title: 'Video 1',
        url: 'https://www.youtube.com/watch?v=1',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/1/mqdefault.jpg',
    },
    {
        id: 2,
        title: 'Video 2',
        url: 'https://www.youtube.com/watch?v=2',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/2/mqdefault.jpg',
    },
    {
        id: 3,
        title: 'Video 3',
        url: 'https://www.youtube.com/watch?v=3',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/3/mqdefault.jpg',
    },
    {
        id: 4,
        title: 'Video 4',
        url: 'https://www.youtube.com/watch?v=4',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/4/mqdefault.jpg',
    },
    {
        id: 5,
        title: 'Video 5',
        url: 'https://www.youtube.com/watch?v=5',
        duration: 120,
        coverUrl: 'https://i.ytimg.com/vi/5/mqdefault.jpg',
    },
];

function App() {
    return (
        <>
            <div>
                <h2>Display User</h2>
                <DisplayUser name={user_1.name} />
                <DisplayUser name={user_2.personalInfo.name} />
            </div>
            <div>
                <h2>Video List</h2>
                <VideoList items={videoList} />
            </div>
        </>
    );
}

export default App;
