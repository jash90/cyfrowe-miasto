import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { NextIcon } from '@/features/shared/components/icons';
import { colors, typography } from '@/features/shared/theme';

interface ButtonCardProps {
    icon: ReactNode;
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
                {badge ? (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{badge}</Text>
                    </View>
                ) : null}
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
            </View>
            <NextIcon />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
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
        gap: 4,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: colors.primaryBadgeBg,
        borderRadius: 100,
        borderCurve: 'continuous',
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginBottom: 4,
    },
    badgeText: {
        ...typography.badgeLabel,
        color: colors.primaryBadgeText,
    },
    cardTitle: {
        ...typography.cardTitle,
        color: colors.textDark,
    },
    cardDescription: {
        ...typography.caption,
        color: colors.textMuted,
    },
});

export default ButtonCard;
