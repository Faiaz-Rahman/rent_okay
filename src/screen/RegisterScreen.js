import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import * as yup from "yup";
import { Formik } from "formik";

import { COLORS, DIM } from "../constants";

import {
	CustomButton,
	CustomTextInput,
	ErrorComponent,
	Logo,
} from "../components";

export default function RegisterScreen() {
	const validationSchema = yup.object().shape({
		name: yup.string().required("Your name is required !"),
		books_count: yup
			.string()
			.required("Enter the no. of books you have for rent."),
		email: yup
			.string()
			.email("Please enter valid Email")
			.required("Email Address is required !"),
		address: yup.string().required("Your location is needed !"),
		pass: yup.string().required("Password is required !"),
		confPass: yup
			.string()
			.oneOf([yup.ref("pass"), null], "Passwords not match !"),
		address: yup.string().required("Address is required !"),
	});
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={styles.container}
		>
			<Logo />
			<Text style={styles.header}>Register</Text>
			<Formik
				initialValues={{
					name: "",
					books_count: "",
					email: "",
					address: "",
					pass: "",
					confPass: "",
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleSubmit, handleChange, values, errors, touched }) => (
					<>
						<CustomTextInput
							text="Enter Your Full Name"
							customStyle={styles.custom}
							iconName="create-sharp"
							onChangeText={handleChange("name")}
						/>
						{errors.name && touched.name && (
							<ErrorComponent error={errors.name} />
						)}
						<CustomTextInput
							text="Books you have for rent"
							iconName="document"
							customStyle={styles.custom}
							keyboardType="numeric"
							onChangeText={handleChange("books_count")}
						/>
						{errors.books_count && touched.books_count && (
							<ErrorComponent error={errors.books_count} />
						)}
						<CustomTextInput
							text="Email Address"
							iconName="mail"
							customStyle={styles.custom}
							onChangeText={handleChange("email")}
						/>
						{errors.email && touched.email && (
							<ErrorComponent error={errors.email} />
						)}
						<CustomTextInput
							text="Your Address"
							iconName="location"
							customStyle={styles.custom}
							onChangeText={handleChange("address")}
						/>
						{errors.address && touched.address && (
							<ErrorComponent error={errors.address} />
						)}
						<CustomTextInput
							text="Password"
							iconName="key"
							customStyle={styles.custom}
							passEntry
							onChangeText={handleChange("pass")}
						/>
						{errors.pass && touched.pass && (
							<ErrorComponent error={errors.pass} />
						)}
						<CustomTextInput
							text="Confirm Password"
							iconName="key"
							customStyle={styles.custom}
							passEntry
							onChangeText={handleChange("confPass")}
						/>
						{errors.confPass && touched.confPass && (
							<ErrorComponent error={errors.confPass} />
						)}
						<CustomButton
							onPress={handleSubmit}
							text="REGISTER"
							customStyle={{
								marginTop: 7,
							}}
						/>
					</>
				)}
			</Formik>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.white,
		paddingTop: DIM.height * 0.1,
		paddingBottom: DIM.height * 0.1,
	},
	custom: {
		marginBottom: 12,
	},
	header: {
		fontSize: 35,
		fontWeight: "bold",
		marginBottom: 20,
	},
});
