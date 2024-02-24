import { Pressable, Text } from 'react-native';

export function Button() {
    return (
        <Pressable onPress={() => console.log('Button Pressed')}>
            <Text>Press me</Text>
        </Pressable>
    );
}
