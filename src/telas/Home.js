import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const character = {
  Nome: 'Lady Gaga',
  Natural: 'Nova Iorque',
  Nascimento: '28/03/1986'
}

export default function Home(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Detalhe', { item: character })}>
        <Text style={styles.buttonText}>Quem é {character.Nome}?</Text>
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


