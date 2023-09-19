import React, { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { Text, View, StyleSheet } from 'react-native';

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.messageContainer} >
                <Text style={styles.text} >
                    You have no favorite meal yet.
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.rootContainer} >
            <MealsList items={favoriteMeals} />
        </View>
    );

}


export default FavoritesScreen;

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        backgroundColor: '#3f2f25',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootContainer: {
        flex: 1,
        backgroundColor: '#3f2f25',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }

});