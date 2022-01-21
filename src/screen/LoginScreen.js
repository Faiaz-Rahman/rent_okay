import React, { useState, useRef, useEffect } from "react";

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Animated,
} from "react-native";
import { CustomTextInput, CustomButton, Logo } from "../components/";

import { COLORS, DIM } from "../constants";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const animation = useRef(new Animated.Value(0)).current;

	const animatedStyles = {
		transform: [{ scale: animation }],
	};

	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: false,
		}).start();
	}, []);

	return (
		<View style={styles.container}>
			<Animated.View style={animatedStyles}>
				<Logo />
			</Animated.View>
			<Text style={styles.header}>Login</Text>
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
				onPress={() => {
					if (email === "example@gmail.com" && pass === "123456")
						navigation.navigate("drawer");
				}}
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
		fontSize: 16,
		color: "#170208",
		fontWeight: "900",
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
		fontWeight: "900",
		letterSpacing: 1.5,
	},
	header: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 20,
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
