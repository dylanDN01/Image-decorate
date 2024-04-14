import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/assets/images/background-image.png');

export default function App() {
  // edit image (true when image selection confirmed)
  const [showAppOptions, setShowAppOptions] = useState(false);
  // select image
  const [selectedImage, setSelectedImage] = useState(null);

  // result is when action is done when file explorer is up
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // set image using uri of image
      setShowAppOptions(true);
      // ready to edit
    }
    else {
      if (selectedImage === null)
        alert('No image selected');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}/>
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  // containers include: background
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
});
