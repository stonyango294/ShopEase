import { Flex, ScrollView, Pressable, Image, Box, Heading } from "native-base";
import React from "react";
import { Text } from "react-native";
import product from "../Resources/Product";
import Colors from "../Resources/Color";
import Rating from "./Ratings";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts() {
	const navigation = useNavigation();
	const rate = () => {
		for (let i = 0; i <= product.length; i++) {
			return product[i];
		}
	};

	return (
		<Box flex={7}>
			<ScrollView>
				<Flex
					flexWrap="wrap"
					direction="row"
					justifyContent="space-between"
					px={6}>
					{product.map((product) => (
						<Pressable
							key={product.id}
							width="47%"
							bg={Colors.white}
							rounded="md"
							shadow={3}
							pt={0.3}
							my={3}
							pb={2}
							onPress={() => navigation.navigate("SingleProduct")}
							overflow="hidden">
							<Image
								source={product.image}
								alt={product.name}
								w="full"
								h={24}
								resizeMode="center"
							/>

							<Box pl={3}>
								<Heading size={"sm"} bold>
									Ksh. {product.price}
								</Heading>
								<Text fontSize={10} mt={1} isTruncated w="full">
									{product.name}
								</Text>

								{/* Ratings */}
								<Rating value={2} />
							</Box>
						</Pressable>
					))}
				</Flex>
			</ScrollView>
		</Box>
	);
}
