import { forwardRef, type ReactNode } from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import useFloatingLabel from '../hooks/useFloatingLabel';
import { colors, typography } from '@/theme';

type FloatingLabelInputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    error?: boolean;
    trailingIcon?: ReactNode;
} & Omit<TextInputProps, 'style' | 'onFocus' | 'onBlur'>;

const FloatingLabelInput = forwardRef<TextInput, FloatingLabelInputProps>(
    ({ label, value, onChangeText, onBlur, error, trailingIcon, ...rest }, ref) => {
        const { labelAnimatedStyle, handleFocus, handleBlur } =
            useFloatingLabel({ hasValue: value.length > 0, onBlur });

        return (
            <View style={[styles.container, error && styles.containerError]}>
                <Animated.Text
                    style={[styles.floatingLabel, labelAnimatedStyle]}
                    pointerEvents="none"
                >
                    {label}
                </Animated.Text>
                <View style={styles.row}>
                    <TextInput
                        ref={ref}
                        style={[styles.input, trailingIcon ? styles.inputWithTrailing : null]}
                        value={value}
                        onChangeText={onChangeText}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholderTextColor={colors.textMuted}
                        {...rest}
                    />
                </View>
                {trailingIcon && (
                    <View style={styles.trailingIconWrapper}>
                        {trailingIcon}
                    </View>
                )}
            </View>
        );
    }
);

FloatingLabelInput.displayName = 'FloatingLabelInput';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.inputBg,
        borderRadius: 10,
        borderCurve: 'continuous',
        paddingHorizontal: 16,
        paddingBottom: 13,
        height: 64,
        justifyContent: 'flex-end',
    },
    containerError: {
        borderWidth: 1,
        borderColor: colors.textError,
    },
    floatingLabel: {
        position: 'absolute',
        left: 16,
        top: 21,
        fontSize: 16,
        lineHeight: 22,
        color: colors.textMuted,
        fontFamily: 'Figtree-Regular',
        letterSpacing: -0.12,
        transformOrigin: '0% 50%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        ...typography.input,
        color: colors.textDark,
        padding: 0,
    },
    inputWithTrailing: {
        paddingRight: 36,
    },
    trailingIconWrapper: {
        position: 'absolute',
        right: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});

export default FloatingLabelInput;
