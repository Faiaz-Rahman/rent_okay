import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Profile, Wishlist } from "../screen";

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
				}}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
