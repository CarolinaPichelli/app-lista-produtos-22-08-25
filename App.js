import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    carregarDados();
  },[])
    
  async function carregarDados() {
    var resultado = await fetch('https://fakestoreapi.com/products');
    var lst = await resultado.json();
    setLista(lst);
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      {lista.map((prod) => 
      <View style={styles.item} key={prod.id}> 
        <Image style={styles.image} source={{uri:prod.image}}></Image>
        <Text style={styles.title} key={prod.id}>{prod.title}</Text>
      </View> 
    
    )}
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',   
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    widht: 50,
    height: 50,
  },
});
