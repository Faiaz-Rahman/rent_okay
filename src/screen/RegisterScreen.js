import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CustomButton, CustomTextInput, Logo } from "../components";
import { COLORS, DIM } from "../constants";

export default function RegisterScreen() {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.container}
		>
			<Logo />
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
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
		paddingTop: DIM.height * 0.1,
		paddingBottom: DIM.height * 0.1,
	},
	custom: {
		marginBottom: 15,
	},
	header: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 20,
	},
});
