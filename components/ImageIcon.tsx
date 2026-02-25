import { Image, ImageSource } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

interface ImageIconProps {
    source: ImageSource | number;
    size?: number;
    borderRadius?: number;
}

const ImageIcon = ({ source, size = 40, borderRadius = 10 }: ImageIconProps) => {
    return (
        <Image
            source={source}
            style={[styles.image, { width: size, height: size, borderRadius }]}
            contentFit="contain"
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
    },
});

export default ImageIcon;
