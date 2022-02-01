import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS, DIM } from "../constants";

export default function ProfileElement({
	iconName,
	title,
	subTitle,
	customStyle,
	subtitleStyle,
}) {
	return (
		<View style={[styles.container, customStyle]}>
			<View style={styles.titleContainer}>
				<Ionicons
					name={iconName}
					color={COLORS.primary}
					size={30}
					style={styles.star}
				/>
				<Text style={styles.title}>{title}</Text>
			</View>
			<Text style={[styles.subTitle, subtitleStyle]}>{subTitle}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		height: DIM.height * 0.12,
		width: "100%",
		paddingLeft: 25,
		marginTop: 15,
		justifyContent: "center",
		borderColor: COLORS.boxColor,
		borderTopWidth: 5,
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderRadius: 15,
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
		marginRight: 15,
	},
	subTitle: {
		letterSpacing: 3,
		fontSize: 19,
		fontWeight: "600",
		marginLeft: 45,
		color: "slategrey",
	},
});
