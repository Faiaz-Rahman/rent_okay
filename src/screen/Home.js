import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import { Header, Card } from "../components";
import { COLORS, DIM, Data } from "../constants";

export default function Home({ navigation }) {
	const [searchBoxVisible, setSearchBoxVisible] = useState(false);
	const [searchText, setSearchText] = useState(null);

	useEffect(() => {
		console.log(searchText);
		return () => setSearchBoxVisible(false);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header
				leftIconOnPress={() => navigation.toggleDrawer()}
				text={"Browse Books"}
				rightIconOnPress={() => setSearchBoxVisible(!searchBoxVisible)}
				searchBoxVisible={searchBoxVisible}
				search={(text) => setSearchText(text)}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
				pagingEnabled
			>
				{Data.map((val, index) => {
					return (
						<Card
							key={val.id}
							val={val}
							// onPress={() => console.log(searchText)}
						/>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	author: {
		fontSize: 20,
		fontStyle: "italic",
		fontWeight: "bold",
		color: "black",
		letterSpacing: 2,
	},
	card: {
		height: DIM.height * 0.35,
		width: DIM.width,
		marginBottom: 10,
		// backgroundColor: COLORS.slate,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 14,
		borderRadius: 7,
	},
	container: {
		flex: 1,
		paddingTop: 35,
		backgroundColor: COLORS.white,
	},
	description: {
		height: "100%",
		width: "60%",
		paddingLeft: 10,
		paddingTop: 22,
		// backgroundColor: "red",
	},
	imageContainer: {
		width: DIM.width * 0.4,
		height: DIM.height * 0.3,
		// backgroundColor: "red",
	},
	owner: {
		fontSize: 16,
		color: "grey",
		fontWeight: "700",
		letterSpacing: 1.5,
	},
	ownerContainer: {
		height: DIM.height * 0.05,
		paddingTop: 5,
		paddingBottom: 5,
		// backgroundColor: "purple",
	},
	ratingCard: {
		fontSize: 17,
		color: COLORS.white,
		fontWeight: "bold",
	},
	rentContainer: {
		flexDirection: "row",
		height: 40,
		width: "90%",
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 7,
	},
	rentText: {
		color: COLORS.white,
		fontSize: 17,
		fontWeight: "bold",
		letterSpacing: 3,
	},
	scrollView: {
		paddingBottom: 100,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: DIM.width,
	},
});
