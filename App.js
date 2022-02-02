import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import * as SplashScreenExpo from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

import LoginNavigator from "./src/navigation/LoginNavigator";

export default function App() {
	const hideSplashScreen = async () => {
		await SplashScreenExpo.hideAsync();
	};

	useEffect(() => {
		hideSplashScreen();
	}, []);

	return (
		<NavigationContainer>
			<LoginNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
