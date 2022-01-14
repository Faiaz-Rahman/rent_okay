import React, { useState } from "react";

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { DIM, COLORS } from "../constants";

const CustomTextInput = ({
	iconName = null,
	text,
	passEntry = null,
	customStyle,
	onChangeText,
	keyboardType = "email-address",
}) => {
	const [hide, setHide] = useState(true);

	if (passEntry === null) {
		return (
			<View style={[styles.textInputContainer, customStyle]}>
				<Ionicons
					name={iconName}
					size={30}
					color={"grey"}
					style={styles.icon}
				/>
				<TextInput
					placeholder={text}
					placeholderTextColor={"grey"}
					style={styles.textInput}
					onChangeText={onChangeText}
					keyboardType={keyboardType}
				/>
			</View>
		);
	} else {
		return (
			<View style={[styles.textInputContainer, customStyle]}>
				<Ionicons
					name={iconName}
					size={30}
					color={"grey"}
					style={styles.icon}
				/>
				<TextInput
					placeholder={text}
					placeholderTextColor={"grey"}
					style={styles.textInput}
					secureTextEntry={hide ? true : false}
					onChangeText={onChangeText}
				/>
				<TouchableOpacity onPress={() => setHide(!hide)}>
					<Ionicons
						name={hide ? "eye" : "eye-off"}
						size={30}
						color={"grey"}
						style={{
							marginRight: 15,
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	icon: {
		marginRight: 14,
	},
	textInputContainer: {
		flexDirection: "row",
		height: DIM.height * 0.1,
		width: DIM.width * 0.85,
		alignItems: "center",
		backgroundColor: COLORS.slate,
		borderRadius: 10,
		paddingLeft: 20,
	},
	textInput: {
		flex: 1,
		fontSize: 17,
		fontWeight: "600",
		fontStyle: "italic",
		letterSpacing: 1.5,
		color: "slategrey",
	},
});

export default CustomTextInput;
