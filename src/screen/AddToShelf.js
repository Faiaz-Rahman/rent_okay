import React, { useEffect, useState, useRef } from "react";
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

import { Formik } from "formik";
import * as yup from "yup";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { COLORS, DIM } from "../constants";
import {
	Header,
	CustomTextInput,
	CustomButton,
	ErrorComponent,
} from "../components";

export default function AddToShelf({ navigation }) {
	const validationSchema = yup.object().shape({
		name: yup.string().required("Name of Book is required"),
		author_name: yup.string().required("Provide the Author Name of Book"),
		location: yup.string().required("Provide Pickup Location"),
		rent_price: yup.string().min(1).required("Enter a price"),
		pickup_date: yup.string().required("Pickup Date and Time is a must"),
		pickup_time: yup.string().required("Pickup Time is required"),
		quality: yup.string().required("Provide the Quality"),
		image: yup.string().required("Provide an Image"),
		blkout_date: yup.string(),
	});

	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [blackoutDate, setBlackoutDate] = useState("");

	const [modalOpen, setModalOpen] = useState(false);
	const [showQualityError, setShowQualityError] = useState(false);

	const [high, setHigh] = useState(false);
	const [low, setLow] = useState(false);
	const [medium, setMedium] = useState(false);

	const img = useRef(null);

	const [image, setImage] = useState(null);
	const [imagePickerOpened, setImagePickerOpened] = useState(false);

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [showTimePicker, setShowTimePicker] = useState(false);

	const [hasDatePickerOpened, setHasDatePickerOpened] = useState(false);
	const [hasTimePickerOpened, setHasTimePickerOpened] = useState(false);

	const [showBlackoutDate, setShowBlackoutDate] = useState(false);
	const [hasBlackoutDateOpened, setHasBlackoutDateOpened] = useState(false);

	const hideDatePicker = () => {
		setShowDatePicker(false);
	};
	const hideTimePicker = () => {
		setShowTimePicker(false);
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
				<Formik
					initialValues={{
						name: "",
						author_name: "",
						location: "",
						rent_price: "",
						pickup_date: "",
						pickup_time: "",
						quality: "",
						image: "",
						blkout_date: "",
					}}
					validationSchema={validationSchema}
					onSubmit={(values) => console.log(values)}
				>
					{({
						handleSubmit,
						handleChange,
						values,
						errors,
						touched,
						handleBlur,
						setTouched,
						setErrors,
						setFieldTouched,
						setFieldValue,
						isValid,
					}) => (
						<>
							<TouchableOpacity
								onPress={() => {
									setFieldTouched("image", true);
									setImagePickerOpened(true);

									let imageUri = "";
									ImagePicker.openPicker({
										width: 300,
										height: 400,
										cropping: true,
									})
										.then((image) => {
											imageUri = image.path;
											setImage(imageUri);

											setFieldValue("image", imageUri);
											img.current = imageUri;
											// console.log(imageUri);
										})
										.catch(() => {
											// console.log("Image Picker Closed");
											setImage(null);
										});
								}}
								style={styles.imagePicker}
							>
								{image !== null && (
									<Image source={{ uri: image }} style={styles.image} />
								)}
								{image === null && (
									<Entypo name="camera" size={35} color={"grey"} />
								)}
							</TouchableOpacity>
							{errors.image && touched.image && (
								// Custom ErrorComponent for Displaying Errors
								<ErrorComponent error={errors.image} />
							)}
							<CustomTextInput
								refs={img}
								customStyle={{ marginTop: 7, marginBottom: 7 }}
								iconName={"book"}
								text={"Name of your book"}
								onChangeText={handleChange("name")}
								onBlur={handleBlur("name")}
							/>
							{errors.name && touched.name && (
								// Custom ErrorComponent for Displaying Errors
								<ErrorComponent error={errors.name} />
							)}
							<CustomTextInput
								customStyle={styles.custom}
								iconName={"create-sharp"}
								onChangeText={handleChange("author_name")}
								text={"Name of Author"}
								onBlur={handleBlur("author_name")}
							/>
							{errors.author_name && touched.author_name && (
								// Custom ErrorComponent for Displaying Errors
								<ErrorComponent error={errors.author_name} />
							)}
							<CustomTextInput
								customStyle={styles.custom}
								iconName={"location"}
								text={"Location for return book"}
								onChangeText={handleChange("location")}
								onBlur={handleBlur("location")}
							/>
							{errors.location && touched.location && (
								// Custom ErrorComponent for Displaying Errors
								<ErrorComponent error={errors.location} />
							)}
							<CustomTextInput
								customStyle={styles.custom}
								iconName={"md-logo-usd"}
								text={"Rent Price"}
								keyboardType="numeric"
								onChangeText={handleChange("rent_price")}
								onBlur={handleBlur("rent_price")}
							/>
							{errors.rent_price && touched.rent_price && (
								// Custom ErrorComponent for Displaying Errors
								<ErrorComponent error={errors.rent_price} />
							)}
							<View style={styles.datePickerContainer}>
								<TouchableHighlight
									style={styles.datePicker}
									onPress={() => {
										setShowDatePicker(true);
										setFieldTouched("pickup_date", true);
									}}
									underlayColor={COLORS.box_light}
								>
									<>
										<Ionicons
											name="calendar"
											size={30}
											color={"grey"}
											style={styles.icon}
										/>
										{showDatePicker && (
											<DateTimePickerModal
												isVisible={showDatePicker}
												mode="date"
												onConfirm={(date) => {
													let tmp = date.toString().slice(4, 15);
													setDate(tmp);
													// console.log(tmp);
													setHasDatePickerOpened(true);

													setShowDatePicker(false);
													setFieldValue("pickup_date", tmp);
												}}
												onCancel={hideDatePicker}
											/>
										)}
										{hasDatePickerOpened ? (
											<Text style={styles.datePickerText}>{date}</Text>
										) : (
											<Text style={styles.datePickerText}>{"Pickup Date"}</Text>
										)}
									</>
								</TouchableHighlight>
								<TouchableHighlight
									style={styles.timePicker}
									onPress={() => {
										setShowTimePicker(true);
										setFieldTouched("pickup_time", true);
									}}
									underlayColor={COLORS.box_light}
								>
									<>
										<Ionicons
											name="time"
											size={30}
											color={"grey"}
											style={{ marginRight: 9 }}
										/>
										{showTimePicker && (
											<DateTimePickerModal
												isVisible={showTimePicker}
												is24Hour
												mode="time"
												onConfirm={(date) => {
													let tmp = moment(date);
													let fTime = tmp.format("HH:mm");

													setTime(fTime);
													// console.log(fTime);
													setHasTimePickerOpened(true);

													setShowTimePicker(false);
													setFieldValue("pickup_time", fTime);
												}}
												onCancel={hideTimePicker}
											/>
										)}
										{hasTimePickerOpened ? (
											<Text style={styles.datePickerText}>{time}</Text>
										) : (
											<Text style={styles.datePickerText}>{"Time"}</Text>
										)}
									</>
								</TouchableHighlight>
							</View>
							{errors.pickup_date &&
								touched.pickup_date &&
								errors.pickup_time &&
								touched.pickup_time && (
									<ErrorComponent error={errors.pickup_date} />
								)}

							<TouchableHighlight
								underlayColor={COLORS.box_light}
								onPress={() => {
									// console.log("Open Modal");
									setFieldTouched("quality", true);
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
											style={[
												styles.conditionPickerText,
												{ marginRight: "53%" },
											]}
										>
											{"Good"}
										</Text>
									)}
									{low && (
										<Text
											style={[
												styles.conditionPickerText,
												{ marginRight: "55%" },
											]}
										>
											{"Poor"}
										</Text>
									)}
									{medium && (
										<Text
											style={[
												styles.conditionPickerText,
												{ marginRight: "56%" },
											]}
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
									onRequestClose={() => {
										if (high || low || medium) {
											if (high) {
												setFieldValue("quality", "good");
											} else if (low) {
												setFieldValue("quality", "poor");
											} else {
												setFieldValue("quality", "bad");
											}
											setModalOpen(false);
										}
									}}
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
												tintColors={{
													true: COLORS.primary,
													false: COLORS.primary,
												}}
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
												tintColors={{
													true: COLORS.primary,
													false: COLORS.primary,
												}}
											/>
										</View>
										<View
											style={[
												styles.modalElementContainer,
												{ marginBottom: 10 },
											]}
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
												tintColors={{
													true: COLORS.primary,
													false: COLORS.primary,
												}}
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
													if (high) {
														setFieldValue("quality", "good");
													} else if (low) {
														setFieldValue("quality", "poor");
													} else {
														setFieldValue("quality", "bad");
													}
													setModalOpen(false);
												}
											}}
										>
											<Text style={styles.modalButtonText}>Done</Text>
										</TouchableOpacity>
									</View>
								</Modal>
							)}
							{errors.quality && touched.quality && (
								// Custom ErrorComponent for Displaying QualityPicker Errors
								<ErrorComponent error={errors.quality} />
							)}
							<TouchableHighlight
								style={styles.blackOut}
								onPress={() => {
									setHasBlackoutDateOpened(true);
									setShowBlackoutDate(true);
								}}
								underlayColor={COLORS.box_light}
							>
								<>
									<FontAwesome
										name="calendar-times-o"
										size={30}
										color={"grey"}
										style={styles.icon}
									/>
									{showBlackoutDate && (
										<DateTimePickerModal
											isVisible={showBlackoutDate}
											mode="date"
											onConfirm={(date) => {
												let tmp = date.toString().slice(4, 15);
												setBlackoutDate(tmp);
												// console.log(tmp);
												setHasBlackoutDateOpened(true);

												setShowBlackoutDate(false);
												setFieldValue("blkout_date", tmp);
											}}
											onCancel={() => setBlackoutDate(false)}
										/>
									)}
									{hasBlackoutDateOpened ? (
										<Text style={styles.datePickerText}>{blackoutDate}</Text>
									) : (
										<Text style={styles.datePickerText}>{"Blackout Date"}</Text>
									)}
								</>
							</TouchableHighlight>
							<CustomButton
								text="Submit"
								iconName={"arrow-redo"}
								iconStyle={{ marginLeft: 15 }}
								customStyle={{ marginTop: 15 }}
								onPress={() => {
									handleSubmit();
								}}
							/>
						</>
					)}
				</Formik>
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
		marginTop: 7,
	},
	conditionPickerContainer: {
		flexDirection: "row",
		height: DIM.height * 0.1,
		width: DIM.width * 0.85,
		alignItems: "center",
		backgroundColor: COLORS.slate,
		borderRadius: 10,
		paddingLeft: 20,
		marginTop: 7,
		marginBottom: 6,
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
		marginTop: 7,
		marginBottom: 4,
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
		marginBottom: 10,
	},
	scrollView: {
		alignItems: "center",
		paddingBottom: 100,
	},
	datePicker: {
		height: DIM.height * 0.1,
		width: DIM.width * 0.45,
		backgroundColor: COLORS.slate,
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
		marginTop: 7,
		marginBottom: 7,
		paddingLeft: DIM.width * 0.07,
		flexDirection: "row",
	},
	timePicker: {
		height: DIM.height * 0.1,
		width: DIM.width * 0.34,
		backgroundColor: COLORS.slate,
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
