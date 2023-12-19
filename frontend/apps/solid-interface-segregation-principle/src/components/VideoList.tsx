import { type FC } from 'react';
import Thumbnail from './Thumbnail';

type LiveStream = {
    name: string;
    previewUrl: string;
};

export type Video = {
    title: string;
    duration: number;
    coverUrl: string;
};

type VideoListProps = {
    items: Array<Video | LiveStream>;
};

const VideoList: FC<VideoListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item) => {
                if ('coverUrl' in item) {
                    // it's a video
                    return <Thumbnail coverUrl={item.coverUrl} />;
                } else {
                    // it's a live stream
                    return <Thumbnail coverUrl={item.previewUrl} />;
                }
            })}
        </ul>
    );
};

export default VideoList;

/**
 * The interface segregation principle advocates for minimizing dependencies between the components of the system, making them less coupled and thus more reusable.z
 */
