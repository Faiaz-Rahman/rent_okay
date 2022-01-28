import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddToShelf, BookShelf } from "../screen";

const Stack = createNativeStackNavigator();

const ShelfNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="usershelf"
		>
			<Stack.Screen name="usershelf" component={BookShelf} />
			<Stack.Screen name="addToShelf" component={AddToShelf} />
		</Stack.Navigator>
	);
};

export default ShelfNavigator;
