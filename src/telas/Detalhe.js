import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default function Detalhe(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { Nome, Natural, Nascimento } = item
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Detalhes</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Nome: {Nome}</Text>
        <Text style={styles.cardText}>Natural: {Natural}</Text>
        <Text style={styles.cardText}>Nascimento: {Nascimento}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Configuracoes')}>
        <Text style={styles.buttonText}>Vá para as configurações</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    color: '#ffd700',
    marginBottom: 5
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

