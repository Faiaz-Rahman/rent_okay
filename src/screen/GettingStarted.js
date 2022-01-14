import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../components";
import { COLORS } from "../constants";

export default function GettingStarted({ navigation }) {
	return (
		<View style={styles.container}>
			<CustomButton
				onPress={() => navigation.navigate("login")}
				text={"Get Started!"}
				iconName={"chevron-forward"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
});
