import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components";
import { COLORS, DIM } from "../constants";

export default function Wishlist({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconOnPress={() => console.log("Location pin")}
				leftIconOnPress={() => navigation.goBack()}
				text={"Wishlist"}
			/>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontSize: 20, color: "slategrey", fontWeight: "900" }}>
					There is nothing in your wishlist !
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: COLORS.white,
	},
});
