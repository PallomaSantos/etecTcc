import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerActiveTintColor: 'white',
                    drawerActiveBackgroundColor: '#003CB3',
                    drawerLabelStyle: {
                        color: 'white',
                    },
                }}

            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Início' }}
                />
                <Drawer.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Entrar' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
