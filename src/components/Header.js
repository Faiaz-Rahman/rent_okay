import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Text,
	View,
} from "react-native";

import { Octicons, FontAwesome } from "@expo/vector-icons";

import { COLORS, DIM } from "../constants";

export default function Header({
	leftIconOnPress,
	text,
	rightIconOnPress,
	searchBoxVisible,
	search,
}) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={leftIconOnPress} style={styles.leftIcon}>
				<Octicons name="three-bars" size={30} color={COLORS.black} />
			</TouchableOpacity>
			{!searchBoxVisible && (
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerText}>{text}</Text>
				</View>
			)}
			{searchBoxVisible && (
				<View style={styles.searchBoxStyle}>
					<TextInput
						placeholder="Search"
						placeholderTextColor={"slategrey"}
						style={styles.textInputStyle}
						onChangeText={search}
					/>
				</View>
			)}
			<TouchableOpacity style={styles.rightIcon} onPress={rightIconOnPress}>
				<FontAwesome name="search" size={30} color={COLORS.black} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: DIM.height * 0.11,
		width: DIM.width,
		flexDirection: "row",
		// backgroundColor: "orange",
		alignItems: "center",
		paddingBottom: 6,
	},
	leftIcon: {
		width: "20%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		fontSize: 22,
		fontWeight: "bold",
		color: COLORS.white,
	},
	headerTextContainer: {
		width: "60%",
		height: "85%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		backgroundColor: COLORS.primary,
	},

	rightIcon: {
		width: "20%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	searchBoxStyle: {
		width: "60%",
		height: "85%",
		justifyContent: "center",
		borderRadius: 30,
		backgroundColor: COLORS.slate,
		paddingLeft: 30,
	},
	textInputStyle: {
		fontSize: 18,
		fontWeight: "600",
		flex: 1,
	},
});
