import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomButton, CustomTextInput } from "../components";
import { COLORS } from "../constants";

export default function RegisterScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Register</Text>
			<CustomTextInput
				text="Enter your name"
				customStyle={styles.custom}
				iconName="create-sharp"
			/>
			<CustomTextInput
				text="Books you have for rent"
				iconName="document"
				customStyle={styles.custom}
				keyboardType="numeric"
			/>
			<CustomTextInput
				text="Email Address"
				iconName="mail"
				customStyle={styles.custom}
			/>
			<CustomTextInput
				text="Password"
				iconName="key"
				customStyle={styles.custom}
				passEntry
			/>
			<CustomTextInput
				text="Confirm Password"
				iconName="key"
				customStyle={styles.custom}
				passEntry
			/>
			<CustomButton
				text="REGISTER"
				customStyle={{
					marginTop: 7,
				}}
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
	custom: {
		marginBottom: 15,
	},
	header: {
		fontSize: 35,
		fontWeight: "900",
		marginBottom: 20,
	},
});
