import { StyleSheet, Image } from "react-native";

// display image by source
export default function ImageViewer({ placeholderImageSource , selectedImage}) {
    // set image; with default placeholder
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource; 
    
    return <Image source={imageSource} style={styles.image} />;
    
}

const styles = StyleSheet.create({
    image: {
        width: 420,
        height: 570,
        borderRadius: 18,
    },
});