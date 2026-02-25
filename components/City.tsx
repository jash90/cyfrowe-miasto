import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

const City = () => {
    return <Image source={require('@/assets/images/city.png')} style={styles.image} />;
};

const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 94,
        marginTop: 16,
        marginBottom: 10,
    },
});

export default City;
