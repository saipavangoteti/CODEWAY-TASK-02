mport { NavigationContainer } from '@react-navigation/native';
   import { createStackNavigator } from '@react-navigation/stack';
   import HomeScreen from './HomeScreen';
   import FavoritesScreen from './FavoritesScreen';

   const Stack = createStackNavigator();

   const App = () => {
       return (
           <NavigationContainer>
               <Stack.Navigator initialRouteName="Home">
                   <Stack.Screen name="Home" component={HomeScreen} />
                   <Stack.Screen name="Favorites" component={FavoritesScreen} />
               </Stack.Navigator>
           </NavigationContainer>
       );
   };

   export default App;

