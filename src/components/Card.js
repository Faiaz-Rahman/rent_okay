import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, DIM } from "../constants";

import { Rating } from "react-native-ratings";

export default function Card({ val, onPress }) {
	return (
		<>
			<View style={styles.margin} />
			<TouchableOpacity style={styles.card} onPress={onPress}>
				<>
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
						<View style={styles.ownerContainer}>
							<Text style={styles.owner}>OWNER: {val.owner}</Text>
						</View>
						<View style={styles.rentContainer}>
							<Text style={styles.rentText}>RENT: </Text>
							<Text style={styles.rentText}>{val.rent}</Text>
						</View>
						<View style={styles.ratingMainContainer}>
							<View style={styles.ratingCardContainer}>
								<Text style={styles.ratingCard}>Rating</Text>
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
								ratingBackgroundColor={COLORS.primary}
								selectedColor={COLORS.primary}
								startingValue={val.rating}
								style={styles.rating}
							/>
						</View>
					</View>
				</>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	author: {
		fontSize: 20,
		fontStyle: "italic",
		fontWeight: "900",
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
	margin: {
		backgroundColor: COLORS.slate,
		height: 2,
		width: DIM.width * 0.9,
		alignSelf: "center",
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
	rating: {
		paddingTop: 15,
		paddingLeft: 10,
	},
	ratingCard: {
		fontSize: 17,
		color: COLORS.white,
		fontWeight: "bold",
	},
	ratingCardContainer: {
		backgroundColor: COLORS.primary,
		height: 35,
		width: 60,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
		borderRadius: 6,
	},
	ratingMainContainer: {
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		// backgroundColor: "pink",
	},
	rentContainer: {
		flexDirection: "row",
		height: 40,
		width: "85%",
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 9,
	},
	rentText: {
		color: COLORS.white,
		fontSize: 17,
		fontWeight: "bold",
		letterSpacing: 3,
	},
});
