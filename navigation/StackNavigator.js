import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailScreen from '../screens/MealDetailScreen';


function StackNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            contentStyle: { backgroundColor: '#3f2f25' },
        }}>
            <Stack.Screen name='Home' component={TabNavigator} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
