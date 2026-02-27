import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, typography } from '@/features/shared/theme';

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
        backgroundColor: colors.primary,
        borderRadius: 100,
        borderCurve: 'continuous',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        ...typography.bodyLarge,
        color: colors.white,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 56,
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    textText: {
        ...typography.bodyLarge,
        color: colors.primary,
    },
});

export default Button;
