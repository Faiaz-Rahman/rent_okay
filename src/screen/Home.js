import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import { useNavigationState } from "@react-navigation/native";

import { Header, Card } from "../components";
import { COLORS, DIM, Data } from "../constants";

export default function Home({ navigation }) {
	const [searchBoxVisible, setSearchBoxVisible] = useState(false);
	const [searchText, setSearchText] = useState(null);

	const state = useNavigationState((state) => state.index);

	useEffect(() => {
		return () => setSearchBoxVisible(false);
	}, [state]);

	return (
		<SafeAreaView style={styles.container}>
			<Header
				leftIconOnPress={() => console.log("Location Icon pressed")}
				text={"Books In Rent"}
				rightIconOnPress={() => setSearchBoxVisible(!searchBoxVisible)}
				searchBoxVisible={searchBoxVisible}
				search={(text) => setSearchText(text)}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
				scrollEventThrottle={1}
			>
				{Data.map((val, index) => {
					return (
						<Card
							key={index}
							val={val}
							onPress={() => navigation.navigate("details", val)}
						/>
					);
				})}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 30,
		backgroundColor: COLORS.white,
	},
	scrollView: {
		paddingBottom: DIM.height * 0.1,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: DIM.width,
	},
});
