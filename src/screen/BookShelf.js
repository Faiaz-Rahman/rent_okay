import React from "react";
import { StyleSheet, View, ScrollView, TouchableHighlight } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { Header, Card } from "../components";
import { COLORS, DIM, UserData } from "../constants";

export default function BookShelf({ navigation }) {
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconOnPress={() => console.log("Location pin")}
				leftIconOnPress={() => navigation.goBack()}
				text={"Bookshelf"}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
				scrollEventThrottle={1}
			>
				{UserData.map((val, index) => {
					return (
						<Card
							ratingContainerStyle={styles.ratingContainerStyle}
							shelf
							key={index}
							val={val}
							// onPress={() => navigation.navigate("details", val)}
							onPress={() => console.log("Elaborate!")}
						/>
					);
				})}
			</ScrollView>
			{/* Floating Button */}
			<TouchableHighlight
				style={styles.floatingButton}
				onPress={() => navigation.navigate("addToShelf")}
			>
				<AntDesign name="pluscircle" color={COLORS.white} size={30} />
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 30,
		backgroundColor: COLORS.white,
	},
	floatingButton: {
		height: 60,
		width: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,
		position: "absolute",
		bottom: DIM.height * 0.13,
		right: DIM.width * 0.08,
		backgroundColor: COLORS.primary,
		opacity: 0.9,
	},
	ratingContainerStyle: {
		marginTop: 25,
	},
	scrollView: {
		paddingBottom: DIM.height * 0.1,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: DIM.width,
	},
});
