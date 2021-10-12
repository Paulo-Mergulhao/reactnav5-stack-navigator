import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../telas/Home'
import Detalhe from '../telas/Detalhe'
import Configuracoes from '../telas/Configuracoes'

const Stack = createStackNavigator()

export default function PilhaNavegacaoPrincipal() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false,
          headerMode: 'float'
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name='Detalhe'
          component={Detalhe}
          options={({ route }) => ({
            title: route.params.item.nome
          })}
        />
        <Stack.Screen
          name='Configuracoes'
          component={Configuracoes}
          options={{ title: 'Configurações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

