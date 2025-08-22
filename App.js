import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const [lista, setLista] = useState([])

useEffect( async () => {
  var resultado = await fetch('https://fakestoreapi.com/products')
  setLista(await resultado.json())
}, [] )

export default function App() {
  return (
    <View style={styles.container}>
      {lista.map((prod) => <Text key={prod.id}>{prod.title}</Text> )}
      <StatusBar style="auto" />
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
