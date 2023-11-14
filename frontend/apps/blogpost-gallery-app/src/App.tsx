import { useEffect, useState, type ReactNode } from 'react';
import { get } from './util/http';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import ErrorMessage from './components/ErrorMessage';
import fetchingImg from './assets/data-fetching.png';
import './index.css';
type RawDataBlogPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

function App() {
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
    const [error, setError] = useState<string>();
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            try {
                const data = await get<RawDataBlogPost[]>('https://jsonplaceholder.typicode.com/posts');
                if (data instanceof Error) {
                    setError(data.message);
                    return;
                }
                const blogPosts: BlogPost[] = data.map((post) => ({
                    id: post.id,
                    title: post.title,
                    text: post.body,
                }));
                setFetchedPosts(blogPosts);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
                return;
            }

            setIsFetching(false);
        };

        fetchPosts();
    }, []);

    let content: ReactNode;

    if (error) {
        content = <ErrorMessage text={error} />;
    }
    if (isFetching) {
        content = <p id="loading-fallback">Loading posts...</p>;
    }
    if (fetchedPosts) {
        content = <BlogPosts posts={fetchedPosts} />;
    }
    return (
        <main>
            <img src={fetchingImg} alt="Fetching data" />
            {content}
        </main>
    );
}

export default App;
