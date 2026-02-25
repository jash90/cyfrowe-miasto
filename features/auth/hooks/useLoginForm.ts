import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'expo-router';

type FormData = {
    email: string;
    password: string;
};

export function useLoginForm() {
    const { push } = useRouter();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const passwordRef = useRef<TextInput>(null);

    const { control, handleSubmit } = useForm<FormData>({
        defaultValues: { email: '', password: '' },
        mode: 'onTouched',
    });

    const focusPassword = () => passwordRef.current?.focus();
    const toggleSecureEntry = () => setSecureTextEntry(prev => !prev);

    const onSubmit: SubmitHandler<FormData> = () => {
        push('/application-for-card');
    };

    return {
        control,
        handleSubmit,
        secureTextEntry,
        toggleSecureEntry,
        passwordRef,
        focusPassword,
        onSubmit,
    };
}
