import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>

            <Button title="Login" onPress={() => router.push('/application-for-card')} />
        </SafeAreaView>
    )
}

export default Login