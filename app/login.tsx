import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller } from 'react-hook-form';

import { colors, typography } from '@/theme';
import { Button, Spacer } from '@/components';
import { CheckIcon, EyeIcon, EyeOffIcon } from '@/components/icons';
import { LoginHeader } from '@/features/auth';
import { emailRules, passwordRules } from '@/features/auth/constants';
import { useLoginForm } from '@/features/auth/hooks/useLoginForm';
import TouchIdButton from '@/features/auth/components/TouchIdButton';
import FloatingLabelInput from '@/features/auth/components/FloatingLabelInput';

const Login = () => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const {
        control,
        handleSubmit,
        secureTextEntry,
        toggleSecureEntry,
        passwordRef,
        focusPassword,
        onSubmit,
    } = useLoginForm();
    const { bottom } = useSafeAreaInsets();

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
                        <LoginHeader onBack={() => console.log('back')} />
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
                                                    ? <CheckIcon size={20} color={colors.textSuccess} />
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
                                                    {secureTextEntry
                                                        ? <EyeOffIcon size={20} color={colors.textMuted} />
                                                        : <EyeIcon size={20} color={colors.textMuted} />
                                                    }
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
                        <View style={styles.buttons}>
                            <Button title="Zaloguj się" onPress={handleSubmit(onSubmit)} />
                            <Button title="Zapomniałeś hasła?" variant="text" />
                        </View>
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
        backgroundColor: colors.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderCurve: 'continuous',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    heading: {
        ...typography.heading,
        color: colors.textDark,
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        gap: 16,
        marginBottom: 16,
    },
    buttons: {
        gap: 12,
    },
    helperText: {
        ...typography.caption,
        color: colors.textMuted,
        marginTop: 4,
    },
    errorText: {
        ...typography.caption,
        color: colors.textError,
        marginTop: 4,
    },
});

export default Login;
