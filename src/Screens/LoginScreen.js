import React from "react";
import {
	Box,
	Text,
	NativeBaseProvider,
	Image,
	Header,
	Heading,
	VStack,
	Input,
	Button,
	Pressable,
	HStack,
	ScrollView,
} from "native-base";
import Colors from "../Resources/Color";

const LoginScreen = ({ navigation }) => {
	return (
		<NativeBaseProvider>
			<ScrollView>
				<Box w={"100%"} px={"10%"} py={"15%"}>
					{/* Heading */}
					<Heading
						fontSize={35}
						fontWeight={"bold"}
						color={Colors.main}>
						Welcome!
					</Heading>

					{/* Stacks */}
					<VStack space="5" mt="50">
						{/* EMAIL */}
						<Text fontWeight={"bold"}>Email</Text>
						<Input
							// InputRightElement={
							//     // <Icon name="at" size={20} color="#900" />
							//     <Icon
							//         name="envelope"
							//         color={Colors.main}
							//         size={20}

							//     />
							// }
							placeholder="user@gmail.com"
							variant="outline"
							color={Colors.main}
							fontSize={16}
						/>

						{/* PASSWORD */}
						<Text fontWeight={"bold"}>Password</Text>
						<Input
							// InputRightElement={
							//     <Icon
							//         name="eye"
							//         color={Colors.main}
							//         size={20}
							//         px={10}
							//     />
							// }
							placeholder="Password"
							type="password"
							variant="outline"
							color={Colors.main}
							fontSize={16}
						/>
					</VStack>
					<Button
						_pressed={{ bg: "colors.main" }}
						my={30}
						rounded={50}
						onPress={() => navigation.navigate("Home")}
						bg={Colors.main}>
						LOGIN
					</Button>

					<Pressable mt={2} mb={"15%"} alignItems={"center"}>
						<Text color={Colors.main}>Forgot Password?</Text>
					</Pressable>

					<Box alignItems={"center"}>
						<Text>Or Sign In Using:</Text>
						<HStack mb={"10%"}>
							{/* Facebook */}
							<Pressable>
								<Image
									source={require("../../assets/google-logo.png")}
									alt="Google Icon"
									width={30}
									height={30}
									resizeMode="contain"
									px={5}
								/>
							</Pressable>

							{/* Twitter X */}
							<Pressable>
								<Image
									source={require("../../assets/twitter-x-logo.png")}
									alt="X Icon"
									width={30}
									height={30}
									resizeMode="contain"
									px={5}
								/>
							</Pressable>

							{/* Facebook */}
							<Pressable>
								<Image
									source={require("../../assets/facebook-logo-2019.jpg")}
									alt="Google Icon"
									width={35}
									h={33}
									resizeMode="cover"
								/>
							</Pressable>
						</HStack>
						{/* Text Bottom */}
						<Box>
							<HStack>
								<Text>Don't have account yet? </Text>
								<Pressable onPress={()=> navigation.navigate('Register')}>
									<Text color={Colors.main}>Sign Up</Text>
								</Pressable>
							</HStack>
						</Box>
					</Box>
				</Box>
			</ScrollView>
		</NativeBaseProvider>
	);
};

export default LoginScreen;
