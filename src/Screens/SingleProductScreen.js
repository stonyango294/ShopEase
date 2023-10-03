import { ScrollViewBase, View, Dimensions } from "react-native";
import React from "react";
import {
	Box,
	HStack,
	Heading,
	Image,
	Input,
	NativeBaseProvider,
	NumberInput,
	ScrollView,
	Spacer,
	Text,
} from "native-base";
import Rating from "../Components/Ratings";
import NumericInput from "react-native-numeric-input";
import Btn from "../Components/Btn";
import Colors from "../Resources/Color";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomNumericInput from "../Components/NumericInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { heightS, widthS } = Dimensions.get("window");

const SingleProductScreen = () => {
	const navigation = useNavigation();
	return (
		<NativeBaseProvider>
			<Box px={5} height={80}>
				<Box
					flexDirection={"row"}
					mt={3}
					position={"absolute"}
					right={5}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Icon name="arrow-left" size={25} color={Colors.main} />
					</TouchableOpacity>
					<Spacer />
					<Icon name="shopping-cart" size={30} color={Colors.main} />
				</Box>
				<Image
					source={require("../../assets/product-1.png")}
					alt="Product-1"
					w={"full"}
					h={300}
					resizeMode="contain"
				/>
				<Heading fontSize={30} mb={2} bold>
					New Headphones from Alibaba Shop
				</Heading>

				<Rating value={3} />

				<HStack my={2} alignItems={"center"}>
					{/* <Input
						type="text"
						variant={"outline"}
						placeholder="Number of Items purchased"
						w={200}
					/> */}
					<CustomNumericInput />
					<Spacer />

					<Heading>Ksh. 1200</Heading>
				</HStack>

				<Box>
					<ScrollView>
						<Heading fontWeight={"medium"}>
							About the Product
						</Heading>
						<Text
							fontSize={18}
							lineHeight={24}
							fontWeight={"light"}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Excepturi recusandae nobis deleniti,
							perspiciatis unde eveniet animi quia, dolor
							voluptatem non eos voluptates a quam maiores error
							fugiat expedita ut aliquam assumenda. Placeat
							officia voluptate doloribus corrupti omnis autem in?
							Excepturi doloribus reprehenderit ipsa voluptas
							soluta esse deleniti quisquam exercitationem Lorem
							ipsum dolor sit, amet consectetur adipisicing elit.
							Ab, consectetur aliquid. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Excepturi recusandae
							nobis deleniti, perspiciatis unde eveniet animi
							quia, dolor voluptatem non eos voluptates a quam
							maiores error fugiat expedita ut aliquam assumenda.
							Placeat officia voluptate doloribus corrupti omnis
							autem in? Excepturi doloribus reprehenderit ipsa
							voluptas soluta esse deleniti quisquam
							exercitationem Lorem ipsum dolor sit, amet
							consectetur adipisicing elit. Ab, consectetur
							aliquid.
						</Text>
						<Box pb={5} mb={7}>
							<Btn
								bg={Colors.main}
								color={Colors.white}
								alignItems={"center"}
								mt={7}>
								ADD TO CART
							</Btn>
						</Box>
					</ScrollView>
				</Box>
			</Box>
		</NativeBaseProvider>
	);
};

export default SingleProductScreen;
