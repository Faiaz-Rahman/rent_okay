import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { COLORS, DIM, BrowseBooks } from "../constants";
import { Header, Card } from "../components";

export default function Feed() {
	const [searchBoxVisible, setSearchBoxVisible] = useState(false);
	const [searchText, setSearchText] = useState();

	return (
		<View style={styles.container}>
			<Header
				leftIconOnPress={() => console.log("Location Icon pressed")}
				text={"Browse Books"}
				rightIconOnPress={() => setSearchBoxVisible(!searchBoxVisible)}
				searchBoxVisible={searchBoxVisible}
				search={(text) => setSearchText(text)}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
				scrollEventThrottle={1}
			>
				{BrowseBooks.map((val, index) => {
					return <Card key={index} val={val} onPress={() => {}} />;
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: "center",
	},
	scrollView: {
		paddingBottom: DIM.height * 0.1,
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		width: DIM.width,
	},
});
