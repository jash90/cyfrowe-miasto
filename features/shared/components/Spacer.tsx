import { StyleSheet, View } from 'react-native';

export default function Spacer() {
    return <View style={styles.spacer} />;
}

const styles = StyleSheet.create({
    spacer: {
        height: 40,
    },
});
