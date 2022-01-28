import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { Header } from "../components";

export default function AddToShelf({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconOnPress={() => console.log("Location pin")}
				leftIconOnPress={() => navigation.goBack()}
				text={"Add To Shelf"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
});
