import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, DetailsScreen } from "../screen";

const Stack = createNativeStackNavigator();

const BooksNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="userhomerent"
		>
			<Stack.Screen name="userhomerent" component={Home} />
			<Stack.Screen name="details" component={DetailsScreen} />
		</Stack.Navigator>
	);
};

export default BooksNavigator;
