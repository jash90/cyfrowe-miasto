import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    variant?: 'primary' | 'text';
}

const Button = ({ title, onPress, variant = 'primary' }: ButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                variant === 'primary' ? styles.primary : styles.text,
                pressed && { opacity: 0.7 },
            ]}
            onPress={onPress}
        >
            <Text style={variant === 'primary' ? styles.primaryText : styles.textText}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    primary: {
        backgroundColor: '#126ae9',
        borderRadius: 100,
        borderCurve: 'continuous',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    primaryText: {
        fontFamily: 'Figtree-Medium',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        letterSpacing: -0.32,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    textText: {
        fontFamily: 'Figtree-Medium',
        fontSize: 16,
        lineHeight: 22,
        color: '#126ae9',
        letterSpacing: -0.32,
    },
});

export default Button;
