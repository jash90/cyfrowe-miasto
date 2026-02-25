import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IconContainerProps {
    backgroundColor?: string;
    Component: React.ComponentType<any>;
}

const IconContainer = ({ Component, backgroundColor = '#DBE9FC' }: IconContainerProps) => {
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
