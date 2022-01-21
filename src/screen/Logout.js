import React, { useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

export default function Logout({ navigation }) {
	useEffect(() => {
		navigation.popToTop();
	}, []);
	return (
		<View style={styles.container}>
			<Text></Text>
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
