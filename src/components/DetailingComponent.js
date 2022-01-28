import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import { COLORS, DIM } from "../constants";

export default function DetailingComponent({ subTitle, iconName, title }) {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Ionicons
					name={iconName}
					color={COLORS.primary}
					size={30}
					style={styles.star}
				/>
				<Text style={styles.title}>{title}</Text>
			</View>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: DIM.height * 0.13,
		width: DIM.width * 0.9,
		// backgroundColor: "orange",
		padding: 10,
	},
	title: {
		fontSize: 24,
		color: "slategrey",
		fontWeight: "bold",
		letterSpacing: 2,
	},
	titleContainer: {
		flexDirection: "row",
		// backgroundColor: "red",
		alignItems: "center",
	},
	star: {
		marginRight: 10,
	},
	subTitle: {
		letterSpacing: 3,
		fontSize: 19,
		fontWeight: "600",
		marginLeft: DIM.width * 0.05,
		color: "slategrey",
	},
});
