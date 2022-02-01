import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";

import { COLORS, DIM } from "../constants";
import { CustomButton, Header } from "../components";

import ImagePicker from "react-native-image-crop-picker";

import { Ionicons } from "@expo/vector-icons";

export default function Settings({ navigation }) {
	const [front, setFront] = useState(null);
	const [back, setBack] = useState(null);

	const chooseImageFromLibraryFront = () => {
		// setImagePickerOpened(true);

		ImagePicker.openPicker({
			width: DIM.width,
			height: DIM.height,
			cropping: true,
		})
			.then((image) => {
				const imageUri = image.path;
				setFront(imageUri);
			})
			.catch(() => {
				setFront(null);
			});
	};

	const chooseImageFromLibraryBack = () => {
		// setImagePickerOpened(true);

		ImagePicker.openPicker({
			width: DIM.width,
			height: DIM.height,
			cropping: true,
		})
			.then((image) => {
				const imageUri = image.path;
				setBack(imageUri);
			})
			.catch(() => {
				setBack(null);
			});
	};

	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconVisible={false}
				leftIconOnPress={() => navigation.goBack()}
				text={"Settings"}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollView}
			>
				<View style={styles.verifyTextContainer}>
					<Text style={styles.verifyText}>Verify Your Account</Text>
				</View>
				<View style={styles.verifySubtitleTextContainer}>
					<Text style={styles.verifySubtitleText}>
						To verify your account upload front and back images of Your NID
					</Text>
				</View>
				<TouchableOpacity
					style={styles.imagePickerContainer}
					onPress={chooseImageFromLibraryFront}
				>
					{front ? (
						<Image
							source={{ uri: front }}
							style={{ height: "100%", width: "100%" }}
							resizeMode="stretch"
						/>
					) : (
						<>
							<Text style={styles.frontNid}>Upload Front of NID</Text>
							<Ionicons name="camera-sharp" size={45} color={"slategrey"} />
						</>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={chooseImageFromLibraryBack}
					style={[
						styles.imagePickerContainer,
						{
							marginTop: 15,
						},
					]}
				>
					{back ? (
						<Image
							source={{ uri: back }}
							style={{ height: "100%", width: "100%" }}
							resizeMode="stretch"
						/>
					) : (
						<>
							<Text style={styles.frontNid}>Upload Back of NID</Text>
							<Ionicons name="camera-sharp" size={45} color={"slategrey"} />
						</>
					)}
				</TouchableOpacity>
				<CustomButton
					onPress={() => console.log("verification pending")}
					text="Upload for Verification"
					customStyle={styles.custom}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.white,
	},
	custom: {
		marginTop: 20,
	},
	frontNid: {
		fontSize: 18,
		color: "grey",
		letterSpacing: 1.5,
		fontStyle: "italic",
		fontWeight: "600",
	},
	imagePickerContainer: {
		height: DIM.height * 0.3,
		width: DIM.width * 0.8,
		backgroundColor: COLORS.boxColor,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		overflow: "hidden",
	},
	scrollView: {
		alignItems: "center",
		paddingBottom: 30,
	},
	verifyTextContainer: {
		marginTop: 10,
		backgroundColor: COLORS.box_light,
		height: DIM.height * 0.12,
		width: DIM.width * 0.9,
		paddingTop: 20,
		alignItems: "center",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 50,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 10,
		marginBottom: 10,
		borderColor: COLORS.slate,
		borderWidth: 2,
	},
	verifyText: {
		fontSize: 23,
		letterSpacing: 3,
		color: "slategrey",
		fontWeight: "800",
	},
	verifySubtitleTextContainer: {
		height: DIM.height * 0.08,
		width: DIM.width * 0.9,
		// backgroundColor: COLORS.slate,
		justifyContent: "center",
		marginBottom: 15,
	},
	verifySubtitleText: {
		fontSize: 18,
		fontWeight: "800",
		fontStyle: "italic",
		textAlign: "center",
		color: "slategrey",
		letterSpacing: 1.5,
	},
});
