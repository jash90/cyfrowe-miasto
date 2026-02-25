import React from 'react';
import {
    Animated,
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import { useFloatingLabel } from '@/hooks';

type FloatingLabelInputProps = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur: () => void;
    error?: boolean;
    trailingIcon?: React.ReactNode;
} & Omit<TextInputProps, 'style' | 'onFocus' | 'onBlur'>;

const FloatingLabelInput = React.forwardRef<TextInput, FloatingLabelInputProps>(
    ({ label, value, onChangeText, onBlur, error, trailingIcon, ...rest }, ref) => {
        const { animatedTranslateY, animatedScale, handleFocus, handleBlur } =
            useFloatingLabel({ hasValue: value.length > 0, onBlur });

        return (
            <View style={[styles.container, error && styles.containerError]}>
                <Animated.Text
                    style={[
                        styles.floatingLabel,
                        {
                            transform: [
                                { translateY: animatedTranslateY },
                                { scale: animatedScale },
                            ],
                        },
                    ]}
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
                        placeholderTextColor="#686C76"
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
        backgroundColor: '#F2F3F4',
        borderRadius: 10,
        borderCurve: 'continuous',
        paddingHorizontal: 16,
        paddingBottom: 13,
        height: 64,
        justifyContent: 'flex-end',
    },
    containerError: {
        borderWidth: 1,
        borderColor: '#D92D20',
    },
    floatingLabel: {
        position: 'absolute',
        left: 16,
        top: 21,
        fontSize: 16,
        lineHeight: 22,
        color: '#686C76',
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
        fontFamily: 'Figtree-Regular',
        fontSize: 16,
        lineHeight: 22,
        color: '#172029',
        letterSpacing: -0.16,
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
