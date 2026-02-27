import { Image, ImageSource } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface ImageIconProps {
    source: ImageSource | number;
    size?: number;
}

const ImageIcon = ({ source, size = 40 }: ImageIconProps) => {
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image
                    source={source}
                    style={{ width: size, height: size }}
                    contentFit="cover"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        borderRadius: 10,
        shadowColor: 'rgb(5, 33, 105)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 2,
    },
    container: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
    },
});

export default ImageIcon;
