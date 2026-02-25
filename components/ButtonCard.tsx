import { NextIcon } from '@/components/icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ButtonCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    onPress?: () => void;
}

const ButtonCard = ({ icon, title, description, badge, onPress }: ButtonCardProps) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.card, pressed && { opacity: 0.7 }]}
            onPress={onPress}
        >
            <View style={styles.cardLeft}>
                {icon}
            </View>
            <View style={styles.cardContent}>
                {badge && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{badge}</Text>
                    </View>
                )}
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
            <NextIcon />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EFF0F4',
        borderRadius: 12,
        borderCurve: 'continuous',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    cardLeft: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
        gap: 2,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#D6EBFF',
        borderRadius: 100,
        borderCurve: 'continuous',
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginBottom: 4,
    },
    badgeText: {
        fontFamily: 'Figtree-SemiBold',
        fontSize: 12,
        lineHeight: 16,
        color: '#0464D0',
    },
    cardTitle: {
        fontFamily: 'Figtree-Medium',
        fontSize: 16,
        lineHeight: 22,
        color: '#172029',
    },
    cardDescription: {
        fontFamily: 'Figtree-Regular',
        fontSize: 12,
        lineHeight: 16,
        color: '#686C76',
    },
});

export default ButtonCard;
