import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import { COLORS, DIM } from "../constants";
import { CustomButton, Header } from "../components";

export default function DetailsScreen({ navigation, route }) {
	const { id, src, author, rent, rating, owner, email } = route.params;
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconVisible={false}
				leftIconOnPress={() => navigation.goBack()}
				text={"Details"}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: src }}
						style={{
							height: "95%",
							width: "50%",
						}}
						resizeMode="cover"
					/>
					<View style={styles.textBoxContainer}>
						<View>
							<Text style={styles.title}>Author :</Text>
							<Text style={styles.subTitle}>{author}</Text>
						</View>
						<View style={{ height: 2, backgroundColor: COLORS.primary }}></View>
						<View>
							<Text style={styles.title}>Owner :</Text>
							<Text style={styles.subTitle}>{owner}</Text>
						</View>
						<View style={{ height: 2, backgroundColor: COLORS.primary }}></View>

						<View>
							<Text style={styles.title}>Rating :</Text>
							<View style={{ flexDirection: "row" }}>
								<FontAwesome
									name="star"
									color={COLORS.primary}
									size={25}
									style={styles.star}
								/>
								<Text style={styles.subTitle}>{rating}</Text>
							</View>
						</View>
						<View style={{ height: 2, backgroundColor: COLORS.primary }}></View>
					</View>
				</View>
				<View style={styles.confirmText}>
					<View
						style={{
							height: DIM.height * 0.15,
							width: DIM.width * 0.9,
							// backgroundColor: "orange",
							padding: 10,
						}}
					>
						<Text style={styles.title}>Contact Email :</Text>
						<Text
							style={{
								letterSpacing: 3,
								fontSize: 19,
								fontWeight: "600",
								color: "slategrey",
							}}
						>
							{email}
						</Text>
					</View>
					<Text
						style={{
							fontSize: 25,
							letterSpacing: 1,
							textAlign: "center",
							fontWeight: "700",
						}}
					>
						Do you want to take this book
					</Text>
				</View>
				<CustomButton text={"For the rent of " + rent} onPress={() => {}} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	confirmText: {
		paddingTop: 10,
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		color: "slategrey",
		fontWeight: "bold",
		letterSpacing: 2,
	},
	scrollView: {
		paddingBottom: DIM.height * 0.15,
		alignItems: "center",
	},
	star: {
		marginRight: 10,
	},
	subTitle: {
		fontSize: 19,
		color: COLORS.black,
		fontWeight: "600",
		letterSpacing: 0.2,
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.white,
		paddingTop: 30,
	},
	imageContainer: {
		height: DIM.height * 0.38,
		width: DIM.width * 0.95,
		// backgroundColor: "red",
		paddingLeft: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	textBoxContainer: {
		backgroundColor: COLORS.white,
		height: "95%",
		width: "47%",
		paddingLeft: 20,
		justifyContent: "space-evenly",
		// alignItems: "center",
	},
});
