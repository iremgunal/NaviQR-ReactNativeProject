import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRPageScreen({ route }) {
  const { qrCodeValue } = route.params;

  return (
    <View style={styles.container}>
      <QRCode
        value={qrCodeValue}
        size={200}
        color="#000"
        backgroundColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
