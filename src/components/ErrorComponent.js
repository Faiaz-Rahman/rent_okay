import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

export default function ErrorComponent({ error, customStyle }) {
	return (
		<View>
			<Text style={[styles.error, customStyle]}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	error: {
		color: COLORS.primary,
		fontSize: 15,
		fontWeight: "bold",
		letterSpacing: 1.2,
		paddingBottom: 10,
	},
});
