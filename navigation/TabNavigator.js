import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';


function TabNavigator() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarStyle: { backgroundColor: '#351401' },
        }} >
            <Tab.Screen name="Categories" component={CategoriesScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;