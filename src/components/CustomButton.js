import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS, DIM } from "../constants";

import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({ text, customStyle, iconName, onPress, iconStyle }) => {
	return (
		<TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
			<Text style={styles.buttonText}>{text}</Text>
			<Ionicons
				name={iconName}
				size={35}
				color={COLORS.white}
				style={iconStyle}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		color: "white",
		fontSize: 22,
		fontWeight: "bold",
	},
	container: {
		height: DIM.height * 0.1,
		width: DIM.width * 0.85,
		backgroundColor: COLORS.primary,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});

export default CustomButton;
