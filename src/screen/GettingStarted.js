import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton, Logo } from "../components";
import { COLORS, DIM } from "../constants";

export default function GettingStarted({ navigation }) {
	return (
		<View style={styles.container}>
			<Logo customStyle={styles.custom} />
			<Text style={styles.appName}>Appname</Text>
			<View
				style={{
					height: DIM.height * 0.3,
					padding: 16,
					// backgroundColor: "yellow",
				}}
			>
				<Text style={styles.subTitle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo
				</Text>
			</View>
			<CustomButton
				onPress={() => navigation.navigate("login")}
				text={"Get Started!"}
				iconName={"chevron-forward"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appName: {
		fontSize: 35,
		fontWeight: "bold",
		letterSpacing: 3,
		marginBottom: 5,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
	custom: {
		marginBottom: 20,
	},
	subTitle: {
		color: "slategrey",
		fontSize: 19,
		letterSpacing: 2,
		fontWeight: "600",
		textAlign: "justify",
	},
});
