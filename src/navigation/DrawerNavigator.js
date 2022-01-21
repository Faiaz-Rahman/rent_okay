import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Profile, Wishlist } from "../screen";

import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen
				name="homeScreen"
				component={Home}
				options={{
					drawerLabel: "Home",
					drawerLabelStyle: {
						fontSize: 16,
						fontWeight: "bold",
					},
					drawerIcon: () => {
						return <FontAwesome name="home" size={30} color={"slategrey"} />;
					},
				}}
			/>
			<Drawer.Screen
				name="wishlist"
				component={Wishlist}
				options={{
					drawerLabel: "Wishlist",
					drawerLabelStyle: {
						fontSize: 16,
						fontWeight: "bold",
					},
					drawerIcon: () => {
						return (
							<FontAwesome name="list-alt" size={25} color={"slategrey"} />
						);
					},
				}}
			/>
			<Drawer.Screen
				name="profile"
				component={Profile}
				options={{
					drawerLabel: "Profile",
					drawerLabelStyle: {
						fontSize: 16,
						fontWeight: "bold",
					},
					drawerIcon: () => {
						return (
							<FontAwesome name="user-circle-o" size={25} color={"slategrey"} />
						);
					},
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
