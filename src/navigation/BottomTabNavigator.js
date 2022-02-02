import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile, BookShelf, Feed } from "../screen";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { COLORS, DIM } from "../constants";

import BooksNavigator from "./BooksNavigator";
import ShelfNavigator from "./ShelfNavigator";
import FeedsNavigator from "./FeedsNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					height: DIM.height * 0.08,
					position: "absolute",
					marginBottom: 15,
					borderRadius: 10,
					marginLeft: 15,
					marginRight: 15,
					backgroundColor: "#f1f1f1",
					elevation: 10,
				},
			}}
		>
			<Tab.Screen
				name="__feed"
				component={FeedsNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="feed"
								size={30}
								color={focused ? COLORS.primary : "grey"}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="__books"
				component={BooksNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name="md-home"
								size={30}
								color={focused ? COLORS.primary : "grey"}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="wish"
				component={ShelfNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="book"
								size={30}
								color={focused ? COLORS.primary : "grey"}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="user"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="user"
								size={30}
								color={focused ? COLORS.primary : "grey"}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
