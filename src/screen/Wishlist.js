import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components";
import { COLORS } from "../constants";

export default function Wishlist({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				leftIconOnPress={() => navigation.toggleDrawer()}
				text={"Wishlist"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 35,
		backgroundColor: COLORS.white,
	},
});
