import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
        <Stack.Screen
					name="Register"
					component={RegistrationScreen}
					options={{ headerShown: false }}
				/>
        <Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
        <Stack.Screen
					name="SingleProduct"
					component={SingleProductScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
