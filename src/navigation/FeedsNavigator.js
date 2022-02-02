import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedDetails, Feed } from "../screen";

const Stack = createNativeStackNavigator();

const FeedsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="feed"
		>
			<Stack.Screen name="feed" component={Feed} />
			<Stack.Screen name="feedDetails" component={FeedDetails} />
		</Stack.Navigator>
	);
};

export default FeedsNavigator;
