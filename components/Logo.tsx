import { Image } from 'expo-image';
import React from 'react';

interface LogoBlueProps {
    width?: number;
    height?: number;
    color?: 'blue' | 'white';
}

const logoBlue = require('@/assets/images/logo-blue.png');
const logoWhite = require('@/assets/images/logo-white.png');

const Logo = ({ width = 210, height = 40, color = 'blue' }: LogoBlueProps) => {
    return <Image source={color === 'blue' ? logoBlue : logoWhite} style={{ width, height, marginVertical: 12 }} />
}

export default Logo
