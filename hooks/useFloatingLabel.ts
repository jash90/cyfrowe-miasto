import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

type UseFloatingLabelOptions = {
    hasValue: boolean;
    onBlur?: () => void;
};

type UseFloatingLabelReturn = {
    animatedTranslateY: Animated.AnimatedInterpolation<number>;
    animatedScale: Animated.AnimatedInterpolation<number>;
    handleFocus: () => void;
    handleBlur: () => void;
};

export default function useFloatingLabel({
    hasValue,
    onBlur,
}: UseFloatingLabelOptions): UseFloatingLabelReturn {
    const labelAnim = useRef(new Animated.Value(hasValue ? 1 : 0)).current;

    const handleFocus = () => {
        Animated.timing(labelAnim, {
            toValue: 1,
            duration: 150,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    const handleBlur = () => {
        onBlur?.();
        if (!hasValue) {
            Animated.timing(labelAnim, {
                toValue: 0,
                duration: 150,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    };

    const animatedTranslateY = labelAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });
    const animatedScale = labelAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0.75] });

    return { animatedTranslateY, animatedScale, handleFocus, handleBlur };
}
