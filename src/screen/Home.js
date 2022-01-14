import React from "react";
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
} from "react-native";
import { Rating } from "react-native-ratings";

import { Header } from "../components";
import { COLORS, DIM, Data } from "../constants";

export default function Home({ navigation }) {
	const ratingCompleted = (rating) => {
		// console.log("Rating is: " + rating);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header
				leftIcon={() => navigation.toggleDrawer()}
				text={"Browse Books"}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 100,
					paddingTop: 10,
					paddingLeft: 10,
					paddingRight: 10,
					width: DIM.width,
				}}
				pagingEnabled
			>
				{Data.map((val, index) => {
					return (
						<React.Fragment>
							<View
								key={index + 1}
								style={{
									backgroundColor: COLORS.slate,
									height: 2,
									width: DIM.width * 0.9,
									alignSelf: "center",
								}}
							/>
							<View key={index} style={styles.card}>
								<View style={styles.imageContainer}>
									<Image
										source={{ uri: val.src }}
										style={{
											height: "100%",
											width: "100%",
										}}
										resizeMode={"cover"}
									/>
								</View>
								<View style={styles.description}>
									<Text style={styles.author}>
										AUTHOR:{"\n"}
										{val.author}
									</Text>
									<View
										style={{
											height: DIM.height * 0.05,
											paddingTop: 5,
											paddingBottom: 5,
										}}
									>
										<Text style={styles.owner}>OWNER: {val.owner}</Text>
									</View>
									<View
										style={{
											flexDirection: "row",
											height: 40,
											width: "90%",
											backgroundColor: COLORS.primary,
											padding: 10,
											borderRadius: 7,
										}}
									>
										<Text style={styles.rentText}>RENT: </Text>
										<Text style={styles.rentText}>{val.rent}</Text>
									</View>
									<View
										style={{
											alignItems: "center",
											flexDirection: "row",
											width: "100%",
										}}
									>
										<View
											style={{
												backgroundColor: COLORS.primary,
												height: 35,
												width: 60,
												justifyContent: "center",
												alignItems: "center",
												marginTop: 15,
												borderRadius: 6,
											}}
										>
											<Text
												style={{
													fontSize: 17,
													color: COLORS.white,
													fontWeight: "bold",
												}}
											>
												Rating
											</Text>
										</View>
										<Rating
											type="star"
											fractions={1}
											ratingCount={5}
											imageSize={25}
											showRating={false}
											readonly={true}
											ratingColor={COLORS.primary}
											ratingTextColor="#000"
											// tintColor={COLORS.slate}
											ratingBackgroundColor={COLORS.primary}
											selectedColor={COLORS.primary}
											startingValue={val.rating}
											style={{
												paddingTop: 15,
												paddingLeft: 10,
											}}
										/>
									</View>
								</View>
							</View>
						</React.Fragment>
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
	rentText: {
		color: COLORS.white,
		fontSize: 17,
		fontWeight: "bold",
		letterSpacing: 3,
	},
});
