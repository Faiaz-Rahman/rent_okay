import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import { Header, Card } from "../components";
import { COLORS, DIM, Data } from "../constants";

export default function Home({ navigation }) {
	const [searchBoxVisible, setSearchBoxVisible] = useState(false);
	const [searchText, setSearchText] = useState(null);

	useEffect(() => {
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
							key={index}
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
	container: {
		flex: 1,
		paddingTop: 35,
		backgroundColor: COLORS.white,
	},
	scrollView: {
		paddingBottom: 100,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: DIM.width,
	},
});
