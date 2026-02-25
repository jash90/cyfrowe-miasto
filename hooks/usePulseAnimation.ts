import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

type UsePulseAnimationOptions = {
    toValue?: number;
    duration?: number;
};

export default function usePulseAnimation(options?: UsePulseAnimationOptions): Animated.Value {
    const { toValue = 1.18, duration = 900 } = options ?? {};
    const anim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(anim, {
                    toValue,
                    duration,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(anim, {
                    toValue: 1,
                    duration,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        );
        loop.start();
        return () => loop.stop();
    }, [anim, toValue, duration]);

    return anim;
}
