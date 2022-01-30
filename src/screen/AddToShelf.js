import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	TouchableHighlight,
	Modal,
} from "react-native";

import {
	Entypo,
	Ionicons,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import CheckBox from "@react-native-community/checkbox";
import ImagePicker from "react-native-image-crop-picker";

import moment from "moment";

import RNDateTimePicker from "@react-native-community/datetimepicker";

import { COLORS, DIM } from "../constants";
import { Header, CustomTextInput } from "../components";

export default function AddToShelf({ navigation }) {
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [showQualityError, setShowQualityError] = useState(false);

	const [high, setHigh] = useState(false);
	const [low, setLow] = useState(false);
	const [medium, setMedium] = useState(false);

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [hasDatePickerOpened, setHasDatePickerOpened] = useState(false);

	const [showTimePicker, setShowTimePicker] = useState(false);
	const [hasTimePickerOpened, setHasTimePickerOpened] = useState(false);

	const [blackout, setBlackout] = useState(false);
	const [blackoutDate, setBlackoutDate] = useState(new Date());
	const [hasBlackoutDatePickerOpened, setHasBlackoutDatePickerOpened] =
		useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShowDatePicker(false);
		setDate(currentDate);
	};

	const onChangeTime = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShowTimePicker(false);

		let temp = moment(currentDate);
		let timeComp = temp.format("HH:mm");
		// console.log(timeComp);

		setTime(timeComp);

		// let fHours = currentDate.getHours().toString();
		// let fMin = currentDate.getMinutes().toString();
		// let tempTime = fHours + " : " + fMin;
		// // console.log(selectedDate);

		// setTime(tempTime);
	};

	const onChangeBlackout = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setBlackout(false);
		setBlackoutDate(currentDate);
	};

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
				// rightIconOnPress={() => console.log("Location pin")}
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
				<View style={styles.datePickerContainer}>
					<TouchableHighlight
						style={styles.datePicker}
						onPress={() => {
							setShowDatePicker(true);
							setHasDatePickerOpened(true);
						}}
						underlayColor={COLORS.box_light}
					>
						<>
							{showDatePicker && (
								<RNDateTimePicker
									testID="dateTimePicker"
									display="default"
									value={date}
									mode={"date"}
									is24Hour={true}
									onChange={onChange}
								/>
							)}
							<Ionicons
								name="calendar"
								size={30}
								color={"grey"}
								style={styles.icon}
							/>
							{!hasDatePickerOpened && (
								<Text style={styles.datePickerText}>Pickup Date</Text>
							)}
							{hasDatePickerOpened && (
								<Text style={styles.datePickerText}>
									{date.toString().slice(4, 15)}
								</Text>
							)}
						</>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.timePicker}
						onPress={() => {
							setShowTimePicker(true);
							setHasTimePickerOpened(true);
						}}
						underlayColor={COLORS.box_light}
					>
						<>
							{showTimePicker && (
								<RNDateTimePicker
									testID="dateTimePicker"
									display="default"
									value={date}
									mode={"time"}
									is24Hour={true}
									onChange={onChangeTime}
								/>
							)}
							<Ionicons
								name="time"
								size={30}
								color={"grey"}
								style={{ marginRight: 9 }}
							/>
							{!hasTimePickerOpened && (
								<Text style={styles.datePickerText}>Time</Text>
							)}
							{hasTimePickerOpened && (
								<Text style={styles.datePickerText}>{time}</Text>
							)}
						</>
					</TouchableHighlight>
				</View>
				<TouchableHighlight
					underlayColor={COLORS.box_light}
					onPress={() => {
						// console.log("Open Modal");
						setModalOpen(true);
					}}
					style={styles.conditionPickerContainer}
				>
					<>
						<FontAwesome
							name="cube"
							size={30}
							color={"grey"}
							style={styles.icon}
						/>
						{!high && !low && !medium && (
							<Text style={styles.conditionPickerText}>
								Select Quality of Product
							</Text>
						)}
						{high && (
							<Text
								style={[styles.conditionPickerText, { marginRight: "53%" }]}
							>
								{"Good"}
							</Text>
						)}
						{low && (
							<Text
								style={[styles.conditionPickerText, { marginRight: "55%" }]}
							>
								{"Poor"}
							</Text>
						)}
						{medium && (
							<Text
								style={[styles.conditionPickerText, { marginRight: "56%" }]}
							>
								{"Bad"}
							</Text>
						)}
						<Ionicons
							name="caret-down"
							size={30}
							color={"grey"}
							style={{ marginLeft: 20 }}
						/>
					</>
				</TouchableHighlight>
				{modalOpen && (
					<Modal
						animationType="slide"
						transparent
						onRequestClose={() => setModalOpen(false)}
					>
						<View style={styles.modalStyle}>
							<View style={styles.modalElementContainer}>
								<MaterialCommunityIcons
									name="quality-high"
									size={30}
									color={COLORS.primary}
									style={{ marginRight: 10 }}
								/>
								<Text style={styles.modalElementText}>Good</Text>
								<CheckBox
									disabled={low || medium ? true : false}
									value={high}
									onValueChange={(newvalue) => setHigh(newvalue)}
									style={{
										marginLeft: "48%",
									}}
									tintColors={{ true: COLORS.primary, false: COLORS.primary }}
								/>
							</View>
							<View style={styles.modalElementContainer}>
								<MaterialCommunityIcons
									name="quality-medium"
									size={30}
									color={COLORS.primary}
									style={{ marginRight: 10 }}
								/>
								<Text style={styles.modalElementText}>Bad</Text>
								<CheckBox
									disabled={high || low ? true : false}
									value={medium}
									onValueChange={(newvalue) => setMedium(newvalue)}
									style={{
										marginLeft: "52%",
									}}
									tintColors={{ true: COLORS.primary, false: COLORS.primary }}
								/>
							</View>
							<View
								style={[styles.modalElementContainer, { marginBottom: 10 }]}
							>
								<MaterialCommunityIcons
									name="quality-low"
									size={30}
									color={COLORS.primary}
									style={{ marginRight: 10 }}
								/>
								<Text style={styles.modalElementText}>Poor</Text>
								<CheckBox
									disabled={high || medium ? true : false}
									value={low}
									onValueChange={(newvalue) => setLow(newvalue)}
									style={{
										marginLeft: "50%",
									}}
									tintColors={{ true: COLORS.primary, false: COLORS.primary }}
								/>
							</View>
							{showQualityError && (
								<Text style={styles.qualityError}>
									Select at lease one quality
								</Text>
							)}
							<TouchableOpacity
								style={styles.modalButton}
								onPress={() => {
									if (!high && !low && !medium) {
										setShowQualityError(true);
									} else {
										setShowQualityError(false);
										setModalOpen(false);
									}
								}}
							>
								<Text style={styles.modalButtonText}>Done</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				)}
				<TouchableHighlight
					style={styles.blackOut}
					onPress={() => {
						setBlackout(true);
						setHasBlackoutDatePickerOpened(true);
					}}
					underlayColor={COLORS.box_light}
				>
					<>
						{blackout && (
							<RNDateTimePicker
								testID="dateTimePicker"
								display="default"
								value={date}
								mode={"date"}
								is24Hour={true}
								onChange={onChangeBlackout}
							/>
						)}
						<FontAwesome
							name="calendar-times-o"
							size={30}
							color={"grey"}
							style={styles.icon}
						/>
						{!hasBlackoutDatePickerOpened && (
							<Text style={styles.datePickerText}>Blackout Date</Text>
						)}
						{hasBlackoutDatePickerOpened && (
							<Text style={styles.datePickerText}>
								{blackoutDate.toString().slice(4, 15)}
							</Text>
						)}
					</>
				</TouchableHighlight>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	blackOut: {
		flexDirection: "row",
		height: DIM.height * 0.1,
		width: DIM.width * 0.85,
		alignItems: "center",
		backgroundColor: COLORS.slate,
		borderRadius: 10,
		paddingLeft: 20,
		marginTop: 15,
	},
	conditionPickerContainer: {
		flexDirection: "row",
		height: DIM.height * 0.1,
		width: DIM.width * 0.85,
		alignItems: "center",
		backgroundColor: COLORS.slate,
		borderRadius: 10,
		paddingLeft: 20,
		marginTop: 15,
	},
	conditionPickerText: {
		fontSize: 17,
		fontWeight: "600",
		fontStyle: "italic",
		letterSpacing: 1.5,
		color: "slategrey",
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: "center",
	},
	custom: {
		marginTop: 15,
	},
	icon: {
		marginRight: 14,
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
	datePicker: {
		height: DIM.height * 0.1,
		width: DIM.width * 0.45,
		backgroundColor: COLORS.boxColor,
		alignItems: "center",
		paddingLeft: 20,
		borderRadius: 10,
		flexDirection: "row",
	},
	datePickerText: {
		fontSize: 17,
		fontWeight: "600",
		fontStyle: "italic",
		letterSpacing: 1.5,
		color: "slategrey",
	},
	datePickerContainer: {
		// backgroundColor: "red",
		height: DIM.height * 0.1,
		width: DIM.width,
		marginTop: 15,
		paddingLeft: DIM.width * 0.07,
		flexDirection: "row",
	},
	timePicker: {
		height: DIM.height * 0.1,
		width: DIM.width * 0.34,
		backgroundColor: COLORS.boxColor,
		alignItems: "center",
		paddingLeft: 20,
		borderRadius: 10,
		flexDirection: "row",
		marginLeft: DIM.width * 0.06,
	},
	qualityError: {
		color: COLORS.primary,
		fontSize: 17,
		fontStyle: "italic",
		fontWeight: "600",
		marginBottom: 10,
	},
	modalStyle: {
		paddingTop: 15,
		height: DIM.height * 0.5,
		width: DIM.width * 0.8,
		backgroundColor: "white",
		top: "25%",
		bottom: "25%",
		left: "9.7%",
		right: "17%",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		paddingTop: 10,
		borderRightColor: COLORS.primary,
		borderLeftColor: "tomato",
		borderTopColor: COLORS.primary,
		borderBottomColor: "tomato",
		borderWidth: 10,
		opacity: 0.75,
		elevation: 4,
		alignItems: "center",
	},
	modalElementContainer: {
		height: DIM.height * 0.082,
		width: "100%",
		// backgroundColor: "black",
		marginBottom: 20,
		paddingLeft: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	modalElementText: {
		fontSize: 20,
		color: "grey",
		fontWeight: "600",
		fontStyle: "italic",
	},
	modalButton: {
		height: DIM.height * 0.07,
		width: DIM.width * 0.4,
		backgroundColor: COLORS.primary,
		borderRadius: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	modalButtonText: {
		fontSize: 18,
		color: COLORS.white,
		fontWeight: "bold",
	},
});
