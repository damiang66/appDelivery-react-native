import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentacion/vistas/home/Home';
import { Registro } from './src/Presentacion/vistas/registro/Registro';
import { ProfileInfoScreen } from './src/Presentacion/vistas/profile/info/ProfileInfo';


export type RootStackParamList ={
  HomeScreen:undefined,
  Registro:undefined,
  ProfileInfo:undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen

          name="HomeScreen"
          component={HomeScreen}
        />
          <Stack.Screen
          name="Registro"
          component={Registro}
          options={{
            headerShown:true,
            title:'Nuevo Usuario',
          }}
        />
         <Stack.Screen
          name="ProfileInfo"
          component={ProfileInfoScreen}
         
        />
        
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
