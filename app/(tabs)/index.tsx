import { Text, StyleSheet, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function IndexScreen(){

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            quality: 1,
            videoQuality: 1
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a Photo" theme="primary"/>
                <Button label="Use this photo"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1
    },
    footerContainer: {
        alignItems: 'center'
    }
});
