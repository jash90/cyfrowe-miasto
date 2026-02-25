import type { TextStyle } from 'react-native';
import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Easing,
} from 'react-native-reanimated';

type UseFloatingLabelOptions = {
    hasValue: boolean;
    onBlur?: () => void;
};

export default function useFloatingLabel({
    hasValue,
    onBlur,
}: UseFloatingLabelOptions) {
    const progress = useSharedValue(hasValue ? 1 : 0);

    const handleFocus = () => {
        progress.set(withTiming(1, {
            duration: 150,
            easing: Easing.out(Easing.ease),
        }));
    };

    const handleBlur = () => {
        onBlur?.();
        if (!hasValue) {
            progress.set(withTiming(0, {
                duration: 150,
                easing: Easing.out(Easing.ease),
            }));
        }
    };

    const labelAnimatedStyle = useAnimatedStyle<TextStyle>(() => ({
        transform: [
            { translateY: interpolate(progress.get(), [0, 1], [0, -8]) },
            { scale: interpolate(progress.get(), [0, 1], [1, 0.75]) },
        ],
    }));

    return { labelAnimatedStyle, handleFocus, handleBlur };
}
