import type { ComponentType } from 'react';
import { StyleSheet, View } from 'react-native';

import type { IconProps } from '@/components/icons';
import { colors } from '@/theme';

interface IconContainerProps {
    backgroundColor?: string;
    Component: ComponentType<IconProps>;
}

const IconContainer = ({ Component, backgroundColor = colors.primaryIconBg }: IconContainerProps) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Component />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderCurve: 'continuous',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default IconContainer;
