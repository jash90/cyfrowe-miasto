import { Pressable, StyleSheet, View } from 'react-native';

import { City, Logo } from '@/features/shared/components';
import { ArrowLeftIcon } from '@/features/shared/components/icons';
import { colors } from '@/features/shared/theme';

type LoginHeaderProps = {
    onBack: () => void;
};

const LoginHeader = ({ onBack }: LoginHeaderProps) => (
    <View style={styles.header}>
        <View style={styles.headerContent}>
            <Pressable onPress={onBack} style={styles.backButton}>
                <ArrowLeftIcon size={20} color={colors.white} />
            </Pressable>
            <Logo color="white" />
            <View style={styles.backButton} />
        </View>
        <City />
    </View>
);

const styles = StyleSheet.create({
    header: { alignItems: 'center', overflow: 'hidden' },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: '100%',
    },
    backButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
});

export default LoginHeader;
