import { Image, ImageSource } from 'expo-image';

interface ImageIconProps {
    source: ImageSource | number;
    size?: number;
    borderRadius?: number;
}

const ImageIcon = ({ source, size = 40, borderRadius = 10 }: ImageIconProps) => {
    return (
        <Image
            source={source}
            style={{ width: size, height: size, borderRadius }}
            contentFit="contain"
        />
    );
};

export default ImageIcon;
