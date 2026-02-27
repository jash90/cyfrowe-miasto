import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonCard from '@/features/application/components/ButtonCard';
import IconContainer from '@/features/application/components/IconContainer';
import ImageIcon from '@/features/application/components/ImageIcon';
import { City, Logo } from '@/features/shared/components';
import { EditIcon } from '@/features/shared/components/icons';
import { colors, typography } from '@/features/shared/theme';

const ApplicationForCard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Logo color="blue" />
            <City />
            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <View style={styles.titleGroup}>
                        <Text style={styles.greeting}>Witaj, Dawid</Text>
                        <Text style={styles.title}>Złóż wniosek o dołączenie do programu Jarosławska Karta Miejska</Text>
                    </View>
                    <Text style={styles.description}>Pierwszym krokiem, który należy zrobić, aby w pełni korzystać z możliwości Karty Mieszkańca jest złożenie wniosku o dołączenie do programu.</Text>
                </View>
            </View>
            <View style={styles.cards}>
                <ButtonCard
                    icon={<ImageIcon source={require('@/assets/images/emblem.png')} />}
                    title="Użyj danych z mObywatel"
                    description="Szybkie składanie wniosku za pomocą aplikacji mObywatel"
                    badge="Najszybciej"
                />
                <ButtonCard
                    icon={<IconContainer Component={EditIcon} />}
                    title="Standardowe wypełnienie wniosku"
                    description="Złóż wniosek wypełniając formularz ręcznie"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        width: '100%',
    },
    titleSection: {
        alignItems: 'center',
        gap: 12,
    },
    titleGroup: {
        alignItems: 'center',
        gap: 8,
    },
    greeting: {
        ...typography.bodySmall,
        color: colors.textMuted,
        textAlign: 'center',
    },
    title: {
        ...typography.heading,
        color: colors.textDark,
        textAlign: 'center',
    },
    description: {
        ...typography.bodySmall,
        color: colors.textMuted,
        textAlign: 'center',
        maxWidth: 320,
    },
    cards: {
        gap: 12,
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
});

export default ApplicationForCard;
