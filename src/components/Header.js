import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import { Octicons, FontAwesome } from "@expo/vector-icons";

import { COLORS, DIM } from "../constants";

export default function Header({ leftIcon, text }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={leftIcon}
				style={{
					width: "20%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Octicons name="three-bars" size={30} color={COLORS.black} />
			</TouchableOpacity>
			<View
				style={{
					width: "60%",
					height: "85%",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 30,
					backgroundColor: COLORS.primary,
				}}
			>
				<Text
					style={{
						fontSize: 22,
						fontWeight: "bold",
						color: COLORS.white,
					}}
				>
					{text}
				</Text>
			</View>
			<TouchableOpacity
				style={{
					width: "20%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<FontAwesome name="search" size={30} color={COLORS.black} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: DIM.height * 0.1,
		width: DIM.width,
		flexDirection: "row",
	},
});
