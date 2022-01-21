import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Logout, Profile, Wishlist } from "../screen";

import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

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
				options={() => ({
					drawerLabel: "Home",
					drawerLabelStyle: {
						fontSize: 17,
						fontWeight: "bold",
					},
					drawerActiveBackgroundColor: COLORS.light_primary,
					drawerIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="home"
								size={30}
								color={focused ? "white" : "slategrey"}
							/>
						);
					},
					drawerActiveTintColor: "white",
					drawerInactiveTintColor: "slategrey",
				})}
			/>
			<Drawer.Screen
				name="wishlist"
				component={Wishlist}
				options={{
					drawerLabel: "Wishlist",
					drawerLabelStyle: {
						fontSize: 17,
						fontWeight: "bold",
					},
					drawerActiveBackgroundColor: COLORS.light_primary,
					drawerIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="list-alt"
								size={25}
								color={focused ? "white" : "slategrey"}
							/>
						);
					},
					drawerActiveTintColor: "white",
					drawerInactiveTintColor: "slategrey",
				}}
			/>
			<Drawer.Screen
				name="profile"
				component={Profile}
				options={{
					drawerLabel: "Profile",
					drawerLabelStyle: {
						fontSize: 17,
						fontWeight: "bold",
					},
					drawerActiveBackgroundColor: COLORS.light_primary,
					drawerIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={focused ? "white" : "slategrey"}
							/>
						);
					},
					drawerActiveTintColor: "white",
					drawerInactiveTintColor: "slategrey",
				}}
			/>
			<Drawer.Screen
				name="logout"
				component={Logout}
				options={{
					drawerLabel: "Logout",
					drawerLabelStyle: {
						fontSize: 17,
						fontWeight: "bold",
					},
					drawerActiveBackgroundColor: COLORS.light_primary,
					drawerIcon: ({ focused }) => {
						return (
							<MaterialIcons
								name="logout"
								size={25}
								color={focused ? "white" : "slategrey"}
							/>
						);
					},
					drawerActiveTintColor: "white",
					drawerInactiveTintColor: "slategrey",
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
