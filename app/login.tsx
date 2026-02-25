import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '@/components/Button';
import FloatingLabelInput from '@/components/FloatingLabelInput';
import LoginHeader from '@/components/LoginHeader';
import Spacer from '@/components/Spacer';
import TouchIdButton from '@/components/TouchIdButton';
import { CheckIcon } from '@/components/icons';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { EMAIL_REGEX, PHONE_REGEX } from '@/constants/validation';

type FormData = {
    email: string;
    password: string;
};

const emailRules = {
    required: 'Podaj adres e-mail lub numer telefonu',
    validate: (value: string) =>
        EMAIL_REGEX.test(value) || PHONE_REGEX.test(value)
            ? true
            : 'Podaj poprawny adres e-mail lub numer telefonu',
};

const passwordRules = {
    required: 'Podaj hasło',
    minLength: { value: 8, message: 'Hasło musi mieć co najmniej 8 znaków' },
};

const Login = () => {
    const router = useRouter();
    const { bottom } = useSafeAreaInsets();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const passwordRef = useRef<TextInput>(null);

    const {
        control,
        handleSubmit,
    } = useForm<FormData>({
        defaultValues: { email: '', password: '' },
        mode: 'onTouched',
    });

    // TODO: I didn't know what the back button was supposed to point to
    const handleBack = () => { console.log('back'); };
    const focusPassword = () => passwordRef.current?.focus();
    const toggleSecureEntry = () => setSecureTextEntry(prev => !prev);

    const onSubmit: SubmitHandler<FormData> = () => {
        router.push('/application-for-card');
    };

    return (
        <ImageBackground
            source={require('@/assets/images/background.png')}
            style={StyleSheet.absoluteFill}
        >
            <SafeAreaView style={styles.root} edges={['top']}>
                <StatusBar style="light" />

                <KeyboardAwareScrollView
                    style={styles.root}
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid
                    extraScrollHeight={20}
                >
                    <View onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)}>
                        <LoginHeader onBack={handleBack} />
                    </View>

                    <View style={[styles.card, { top: headerHeight, paddingBottom: 40 + bottom }]}>
                        <Text style={styles.heading}>Witamy ponownie</Text>

                        <View style={styles.form}>
                            <Controller
                                control={control}
                                name="email"
                                rules={emailRules}
                                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                    <View>
                                        <FloatingLabelInput
                                            label="Adres e-mail lub numer telefonu"
                                            value={value}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            error={!!error}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                            onSubmitEditing={focusPassword}
                                            submitBehavior="submit"
                                            trailingIcon={
                                                !error && value.length > 0
                                                    ? <CheckIcon size={20} color="#08891D" />
                                                    : undefined
                                            }
                                        />
                                        {error && (
                                            <Text style={styles.errorText}>{error.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                rules={passwordRules}
                                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                                    <View>
                                        <FloatingLabelInput
                                            ref={passwordRef}
                                            label="Hasło"
                                            value={value}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            error={!!error}
                                            secureTextEntry={secureTextEntry}
                                            returnKeyType="go"
                                            onSubmitEditing={handleSubmit(onSubmit)}
                                            trailingIcon={
                                                <Pressable onPress={toggleSecureEntry}>
                                                    <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="#686C76" />
                                                </Pressable>
                                            }
                                        />
                                        {error ? (
                                            <Text style={styles.errorText}>{error.message}</Text>
                                        ) : (
                                            <Text style={styles.helperText}>Minimalna długość hasła to 8 znaków</Text>
                                        )}
                                    </View>
                                )}
                            />
                        </View>

                        <Button title="Zaloguj się" onPress={handleSubmit(onSubmit)} />

                        <Button title="Zapomniałeś hasła?" variant="text" />

                        <Spacer />

                        <TouchIdButton />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    card: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderCurve: 'continuous',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    heading: {
        fontFamily: 'Figtree-Bold',
        fontSize: 28,
        lineHeight: 32,
        color: '#172029',
        letterSpacing: -0.84,
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        gap: 16,
        marginBottom: 16,
    },
    helperText: {
        fontFamily: 'Figtree-Regular',
        fontSize: 12,
        lineHeight: 16,
        color: '#686C76',
        marginTop: 4,
    },
    errorText: {
        fontFamily: 'Figtree-Regular',
        fontSize: 12,
        lineHeight: 16,
        color: '#D92D20',
        marginTop: 4,
    },
});

export default Login;
