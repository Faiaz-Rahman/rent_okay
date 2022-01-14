import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CustomTextInput, CustomButton } from "../components/";

import { COLORS, DIM } from "../constants";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 35,
					fontWeight: "900",
					marginBottom: 20,
				}}
			>
				Login
			</Text>
			<CustomTextInput
				text="Enter the email"
				iconName="mail"
				customStyle={styles.custom}
				onChangeText={(text) => setEmail(text)}
			/>
			<CustomTextInput
				text="Enter password"
				iconName="lock-open"
				passEntry={1}
				customStyle={{
					marginBottom: 5,
				}}
				onChangeText={(text) => setPass(text)}
			/>
			<TouchableOpacity style={styles.forgotPassContainer}>
				<Text style={styles.forgotText}>Forgot Password?</Text>
			</TouchableOpacity>
			<CustomButton
				text="LOGIN"
				customStyle={{
					marginBottom: 10,
				}}
				onPress={() => navigation.navigate("drawer")}
			/>
			<View style={styles.signInTextContainer}>
				<Text style={styles.accountText}>Don't have an account?</Text>
				<TouchableOpacity
					style={{
						marginLeft: 7,
					}}
					onPress={() => navigation.navigate("register")}
				>
					<Text style={styles.register}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	accountText: {
		fontSize: 15,
		color: "#170208",
		fontWeight: "bold",
		letterSpacing: 0.4,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	custom: {
		marginBottom: 20,
	},
	forgotPassContainer: {
		height: DIM.height * 0.05,
		width: DIM.width,
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		marginRight: DIM.width * 0.12,
		justifyContent: "flex-end",
		paddingRight: 15,
	},
	forgotText: {
		color: COLORS.primary,
		fontSize: 16,
		fontWeight: "bold",
		letterSpacing: 1.5,
	},
	register: {
		color: COLORS.primary,
		fontSize: 17,
		fontWeight: "bold",
		letterSpacing: 1,
	},
	signInTextContainer: {
		height: DIM.height * 0.05,
		// backgroundColor: "orange",
		width: DIM.width,
		marginBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 15,
	},
});
