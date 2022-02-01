import React, { useEffect, useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import ImageCropPicker from "react-native-image-crop-picker";

import { CustomButton, Header, ProfileElement } from "../components";
import { COLORS, DIM } from "../constants";

import { Entypo, Octicons } from "@expo/vector-icons";

export default function Profile({ navigation }) {
	const [pressed, setPressed] = useState(false);
	const [verified, setVerified] = useState(true);
	const [profileImage, setProfileImage] = useState(null);

	const [imagePickerOpened, setImagePickerOpened] = useState(false);

	const chooseImageFromLibrary = () => {
		setImagePickerOpened(true);

		ImageCropPicker.openPicker({
			width: DIM.width,
			height: DIM.height,
			cropping: true,
		})
			.then((image) => {
				const imageUri = image.path;
				setProfileImage(imageUri);
			})
			.catch(() => {
				setProfileImage(null);
			});
	};

	useEffect(() => {
		if (pressed) navigation.navigate("login");
	}, [pressed]);

	return (
		<View style={styles.container}>
			<Header
				notHome
				customRightIcon
				customRightIconName={"ios-settings-sharp"}
				rightIconOnPress={() => navigation.navigate("settings")}
				leftIconOnPress={() => navigation.goBack()}
				text={"Profile"}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.profileHeader}>
					<View style={styles.profileImageContainer}>
						{profileImage ? (
							<Image
								source={{ uri: profileImage }}
								style={styles.image}
								resizeMode="cover"
							/>
						) : (
							<Image
								source={require("../../assets/user.jpg")}
								style={styles.image}
								resizeMode="cover"
							/>
						)}
						<TouchableOpacity
							style={styles.imagePickerContainer}
							onPress={chooseImageFromLibrary}
						>
							<Entypo name="camera" size={25} color={COLORS.white} />
						</TouchableOpacity>
						<View style={styles.verified}>
							<Octicons
								name={verified ? "verified" : "unverified"}
								size={25}
								color={COLORS.primary}
							/>
						</View>
					</View>
				</View>
				<View style={styles.overlap}>
					<ProfileElement
						title={"Name"}
						subTitle={"John Hurley"}
						iconName={"person"}
					/>
					<ProfileElement
						title={"Email"}
						subTitle={"johnhurley@gmail.com"}
						iconName={"mail"}
						customStyle={{ marginTop: 5 }}
						subtitleStyle={{ letterSpacing: 1 }}
					/>
					<ProfileElement
						title={"Books Rented"}
						subTitle={"7"}
						iconName={"book-sharp"}
						customStyle={{ marginTop: 5 }}
						subtitleStyle={{ letterSpacing: 1 }}
					/>
					<ProfileElement
						title={"Books In Rent"}
						subTitle={"7"}
						iconName={"ios-book-outline"}
						customStyle={{ marginTop: 5 }}
						subtitleStyle={{ letterSpacing: 1 }}
					/>
					<ProfileElement
						title={"Address"}
						subTitle={"New York"}
						iconName={"location"}
						customStyle={{ marginTop: 5 }}
						subtitleStyle={{ letterSpacing: 1 }}
					/>
				</View>
				<CustomButton
					text={"Log Out"}
					iconName={"ios-log-out"}
					iconStyle={{ marginLeft: 15 }}
					onPress={() => {
						console.log("Login Button");
						setPressed(true);
					}}
					customStyle={{
						position: "absolute",
						bottom: DIM.height * 0.15,
					}}
					textStyle={{ fontSize: 24 }}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		// paddingTop: 30,
		alignItems: "center",
	},
	image: {
		height: 180,
		width: 180,
		borderRadius: 100,
	},
	imagePickerContainer: {
		backgroundColor: COLORS.primary,
		position: "absolute",
		height: 40,
		width: 40,
		right: 20,
		bottom: 15,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		borderColor: COLORS.white,
		borderWidth: 3,
	},
	overlap: {
		height: DIM.height * 0.67,
		width: DIM.width * 0.9,
		backgroundColor: COLORS.boxColor,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		position: "absolute",
		marginTop: DIM.height * 0.28,
		overflow: "hidden",
	},
	profileImageContainer: {
		height: 180,
		width: 180,
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
		height: DIM.height * 1.25,
	},
	verified: {
		position: "absolute",
		height: 35,
		width: 35,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		right: 10,
		top: 20,
	},
});
