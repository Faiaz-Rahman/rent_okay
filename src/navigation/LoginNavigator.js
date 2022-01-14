import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen, RegisterScreen, GettingStarted } from "../screen/";

import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{}} initialRouteName="gettingStarted">
			<Stack.Screen
				name="gettingStarted"
				component={GettingStarted}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="login"
				component={LoginScreen}
				options={{
					headerShown: false,
					animation: "slide_from_right",
				}}
			/>
			<Stack.Screen
				name="register"
				component={RegisterScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="drawer"
				component={DrawerNavigator}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default LoginNavigator;
