import { type FC } from 'react';

type ThumbnailProps = {
    coverUrl: string;
};
const Thumbnail: FC<ThumbnailProps> = ({ coverUrl }) => {
    return <img src={coverUrl} />;
};

export default Thumbnail;
