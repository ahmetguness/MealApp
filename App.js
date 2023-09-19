import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import FavoritesContextProvider from './store/context/favorites-context';


export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
