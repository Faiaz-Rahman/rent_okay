import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import { Header } from "../components";
import { COLORS, DIM } from "../constants";

export default function Profile({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconOnPress={() => navigation.toggleDrawer()}
				leftIconOnPress={() => navigation.goBack()}
				text={"Profile"}
			/>
			<View style={styles.profileHeader}>
				<View style={styles.profileImageContainer}>
					<Image
						source={require("../../assets/user.jpg")}
						style={styles.image}
						resizeMode="cover"
					/>
				</View>
			</View>
			<View style={styles.overlap}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
					showsVerticalScrollIndicator={false}
				></ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		paddingTop: 30,
		alignItems: "center",
	},
	image: {
		height: 160,
		width: 160,
		borderRadius: 100,
	},
	overlap: {
		height: DIM.height * 0.55,
		width: DIM.width * 0.9,
		backgroundColor: COLORS.boxColor,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		position: "absolute",
		marginTop: DIM.height * 0.42,
	},
	profileImageContainer: {
		height: 160,
		width: 160,
		overflow: "hidden",
		marginBottom: DIM.height * 0.1,
	},
	profileHeader: {
		height: DIM.height * 0.35,
		width: DIM.width * 0.9,
		backgroundColor: "#fefefe",
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	scrollView: {
		alignItems: "center",
		paddingTop: 10,
		paddingBottom: 100,
	},
});
