import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AirbnbRating, Rating } from "react-native-ratings";

import { COLORS, DIM } from "../constants";
import { Header, DetailingComponent, CustomButton } from "../components";

export default function DetailsScreen({ navigation, route }) {
	const [userRating, setUserRating] = useState(null);

	const {
		src,
		author,
		rating,
		owner,
		owner_email,
		location_for_pickup,
		return_date,
		return_time,
	} = route.params;
	const ratingCompleted = (rating) => {
		setUserRating(rating);
		// console.log(rating);
	};
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
						style={styles.image}
						resizeMode="cover"
					/>
					<View style={styles.textBoxContainer}>
						<View>
							<Text style={styles.title}>Author :</Text>
							<Text style={styles.subTitle}>{author}</Text>
						</View>
						<View
							style={{ height: 1.5, backgroundColor: COLORS.primary }}
						></View>
						<View>
							<Text style={styles.title}>Owner :</Text>
							<Text style={styles.subTitle}>{owner}</Text>
						</View>
						<View
							style={{ height: 1.5, backgroundColor: COLORS.primary }}
						></View>

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
						<View
							style={{ height: 1.5, backgroundColor: COLORS.primary }}
						></View>
					</View>
				</View>
				<View style={styles.confirmText}>
					<DetailingComponent
						title={"Contact Email :"}
						subTitle={owner_email}
						iconName={"mail-sharp"}
					/>
					<View style={styles.divider} />
					<DetailingComponent
						title={"Location for pickup :"}
						subTitle={location_for_pickup}
						iconName={"location"}
					/>
					<View style={styles.divider} />
					<DetailingComponent
						title={"Date of returning: "}
						subTitle={`${return_date}, ${return_time}`}
						iconName={"time-sharp"}
					/>
					<View style={styles.divider} />
					<View style={styles.ratingsContainer}>
						<View style={styles.ratingTitleContainer}>
							<Ionicons
								name={"star"}
								color={COLORS.primary}
								size={30}
								style={styles.star}
							/>
							<Text style={styles.contentTitle}>{"Give A Rating :"}</Text>
						</View>
						<View>
							<AirbnbRating
								defaultRating={rating}
								selectedColor={COLORS.primary}
								unSelectedColor={COLORS.slate}
								onFinishRating={ratingCompleted}
								reviewSize={20}
								reviewColor={COLORS.primary}
								style={{ paddingVertical: 10 }}
							/>
						</View>
					</View>
				</View>
				<CustomButton
					text={"Submit Rating"}
					iconName={"share"}
					iconStyle={{
						marginLeft: 15,
					}}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	ratingsContainer: {
		height: DIM.height * 0.13,
		width: DIM.width * 0.9,
		// backgroundColor: "orange",
		padding: 10,
		marginBottom: DIM.height * 0.1,
	},
	ratingTitleContainer: {
		flexDirection: "row",
		// backgroundColor: "red",
		alignItems: "center",
	},
	confirmText: {
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		color: "slategrey",
		fontWeight: "bold",
		letterSpacing: 2,
	},
	contentTitle: {
		fontSize: 24,
		color: "slategrey",
		fontWeight: "bold",
		letterSpacing: 2,
	},
	scrollView: {
		paddingBottom: DIM.height * 0.15,
		alignItems: "center",
	},
	divider: {
		height: 1.5,
		width: DIM.width * 0.9,
		alignSelf: "center",
		backgroundColor: "slategrey",
		// backgroundColor: COLORS.primary,
	},
	star: {
		marginRight: 10,
	},
	subTitle: {
		fontSize: 19,
		color: "slategrey",
		fontWeight: "600",
		letterSpacing: 0.1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.white,
		// paddingTop: 30,
	},
	image: {
		height: "95%",
		width: "50%",
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
