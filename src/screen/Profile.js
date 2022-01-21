import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components";
import { COLORS } from "../constants";

export default function Profile({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				leftIconOnPress={() => navigation.toggleDrawer()}
				text={"Profile"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingTop: 35,
	},
});
