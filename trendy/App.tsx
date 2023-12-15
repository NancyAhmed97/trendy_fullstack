
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Pages/LoginScreen';
import RegisterScreen from './src/Pages/RegisterScreen';
import Home from './src/Pages/Home';
import Categouries from './src/Pages/Categouries';
import Cart from './src/Pages/Cart';
import Profile from './src/Pages/Profile';
import Search from './src/Pages/Search';
import EditProfile from './src/Pages/EditProfile';
import WishlistScreen from './WishlistScreen';
import OrderScreen from './OrderScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text>fdjjdfk</Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
<>
<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="/" component={LoginScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categouries" component={Categouries} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Account" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />




    </Stack.Navigator>

  </NavigationContainer>

</>
  );
}

const styles = StyleSheet.create({
  logoContainer:{
alignItems:'center',
marginTop:'40%',
marginBottom:'20%'
},
formContainer:{
marginHorizontal:50,
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
