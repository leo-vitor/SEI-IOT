import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe seus componentes de tela para as tabs
import TabRouter from './screens/TabRouter';
import CreateAccountScreen from './screens/CreateAccountScreen';
import RecoverScreen from './screens/RecoverScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
    //Depois substituir pelo zustand
    // const [isLoggedIn, setLoggedIn] = React.useState(false);

    return (
        // (isLoggedIn ? 
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
                    <Stack.Screen name="CriarConta" component={CreateAccountScreen} options={{ headerShown:false }}/>
                    <Stack.Screen name="RecuperarConta" component={RecoverScreen} options={{ headerShown:false }}/>
                    <Stack.Screen name="Router" component={TabRouter} options={{ headerShown:false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        // :
        //     <TabNavigation/>
        // )
    );
}

export default App;