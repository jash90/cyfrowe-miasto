import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { usePulseAnimation } from '@/hooks';
import { TouchIdIcon } from '@/components/icons';

const TouchIdButton = () => {
    const pulseAnim = usePulseAnimation();

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Animated.View style={[styles.ring, { transform: [{ scale: pulseAnim }] }]} />
                <View style={styles.button}>
                    <TouchIdIcon size={24} color="#FFFFFF" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { alignItems: 'center', paddingBottom: 8 },
    container: { width: 76, height: 76, justifyContent: 'center', alignItems: 'center' },
    ring: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 38,
        borderCurve: 'continuous',
        backgroundColor: 'rgba(18,106,233,0.2)',
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        borderCurve: 'continuous',
        backgroundColor: '#126ae9',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TouchIdButton;
