import { Text, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function IndexScreen(){
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if(!result.canceled){
            setSelectedImage(result.assets[0].uri);
        }else{
            alert("You did not select an image.");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a Photo" theme="primary" onPress={pickImageAsync} />
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
