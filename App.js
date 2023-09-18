import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';


export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
