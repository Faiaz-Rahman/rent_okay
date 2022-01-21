import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Logo({ customStyle }) {
	return (
		<View style={[styles.logoContainer, customStyle]}>
			<Image source={require("../../assets/books.png")} style={styles.logo} />
		</View>
	);
}

const styles = StyleSheet.create({
	logo: {
		height: 150,
		width: 150,
	},
	logoContainer: {
		height: 150,
		width: 150,
		borderRadius: 15,
		overflow: "hidden",
	},
});
