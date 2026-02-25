import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonCard from '@/components/ButtonCard';
import City from '@/components/City';
import IconContainer from '@/components/IconContainer';
import ImageIcon from '@/components/ImageIcon';
import Logo from '@/components/Logo';
import { EditIcon } from '@/components/icons';

const ApplicationForCard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Logo color="blue" />
            <City />
            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Text style={styles.greeting}>Witaj, Dawid</Text>
                    <Text style={styles.title}>Złóż wniosek o dołączenie do programu Jarosławska Karta Miejska</Text>
                    <Text style={styles.description}>Pierwszym krokiem, który należy zrobić, aby w pełni korzystać z możliwości Karty Mieszkańca jest złożenie wniosku o dołączenie do programu.</Text>
                </View>
            </View>
            <View style={styles.cards}>
                <ButtonCard
                    icon={<ImageIcon source={require('../assets/images/emblem.png')} />}
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
        backgroundColor: '#FFFFFF',
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
        gap: 8,
    },
    greeting: {
        fontFamily: 'Figtree-Regular',
        fontSize: 14,
        lineHeight: 18,
        color: '#686C76',
        textAlign: 'center',
    },
    title: {
        fontFamily: 'Figtree-Bold',
        fontSize: 28,
        lineHeight: 32,
        letterSpacing: -0.84,
        color: '#172029',
        textAlign: 'center',
    },
    description: {
        fontFamily: 'Figtree-Regular',
        fontSize: 14,
        lineHeight: 18,
        color: '#686C76',
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
