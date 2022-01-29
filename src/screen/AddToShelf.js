import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";

import ImagePicker from "react-native-image-crop-picker";

import { COLORS, DIM } from "../constants";
import { Header, CustomTextInput } from "../components";

import { Entypo } from "@expo/vector-icons";

export default function AddToShelf({ navigation }) {
	const [image, setImage] = useState(null);
	const [imagePickerOpened, setImagePickerOpened] = useState(false);
	// Image Picker is set
	const chooseImageFromLibrary = () => {
		setImagePickerOpened(true);

		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true,
		})
			.then((image) => {
				const imageUri = image.path;
				setImage(imageUri);
			})
			.catch(() => {
				setImage(null);
			});
	};
	return (
		<View style={styles.container}>
			<Header
				notHome
				rightIconOnPress={() => console.log("Location pin")}
				leftIconOnPress={() => navigation.goBack()}
				text={"Add To Shelf"}
			/>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				<TouchableOpacity
					onPress={chooseImageFromLibrary}
					style={styles.imagePicker}
				>
					{image !== null && (
						<Image source={{ uri: image }} style={styles.image} />
					)}
					{image === null && <Entypo name="camera" size={35} color={"grey"} />}
				</TouchableOpacity>
				<CustomTextInput
					customStyle={styles.custom}
					iconName={"book"}
					text={"Name of your book"}
				/>
				<CustomTextInput
					customStyle={styles.custom}
					iconName={"create-sharp"}
					text={"Name of Author"}
				/>
				<CustomTextInput
					customStyle={styles.custom}
					iconName={"location"}
					text={"Location for return book"}
				/>
				<CustomTextInput
					customStyle={styles.custom}
					iconName={"md-logo-usd"}
					text={"Rent Price"}
					keyboardType="numeric"
				/>
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
	custom: {
		marginTop: 15,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	imagePicker: {
		height: DIM.height * 0.24,
		width: DIM.height * 0.24,
		backgroundColor: COLORS.boxColor,
		marginTop: DIM.height * 0.03,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	scrollView: {
		alignItems: "center",
		paddingBottom: 300,
	},
});
