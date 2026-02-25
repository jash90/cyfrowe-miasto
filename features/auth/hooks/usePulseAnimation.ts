import { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
    Easing,
} from 'react-native-reanimated';

type UsePulseAnimationOptions = {
    toValue?: number;
    duration?: number;
};

export default function usePulseAnimation(options?: UsePulseAnimationOptions) {
    const { toValue = 1.18, duration = 900 } = options ?? {};
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.set(
            withRepeat(
                withSequence(
                    withTiming(toValue, { duration, easing: Easing.inOut(Easing.ease) }),
                    withTiming(1, { duration, easing: Easing.inOut(Easing.ease) }),
                ),
                -1,
            )
        );
    }, [scale, toValue, duration]);

    return useAnimatedStyle(() => ({
        transform: [{ scale: scale.get() }],
    }));
}
