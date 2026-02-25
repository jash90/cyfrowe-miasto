import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

interface LogoProps {
    width?: number;
    height?: number;
    color?: 'blue' | 'white';
}

const logoBlue = require('@/assets/images/logo-blue.png');
const logoWhite = require('@/assets/images/logo-white.png');

const Logo = ({ width = 210, height = 40, color = 'blue' }: LogoProps) => {
    return (
        <Image
            source={color === 'blue' ? logoBlue : logoWhite}
            style={[styles.logo, { width, height }]}
        />
    );
};

const styles = StyleSheet.create({
    logo: {
        marginVertical: 12,
    },
});

export default Logo;
