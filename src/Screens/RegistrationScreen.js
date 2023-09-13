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

const RegistrationScreen = () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box w={"100%"} px={"10%"} py={"10%"}>
                    {/* Heading */}
                    <Heading
                        fontSize={35}
                        fontWeight={"bold"}
                        color={Colors.main}>
                        Sign Up
                    </Heading>

                    {/* Stacks */}
                    <VStack space="5" pt={"10%"}>
                        {/* USERNAME */}
                        <Text fontWeight={"bold"}>Username</Text>
                        <Input
                            placeholder="stonyango"
                            variant="outline"
                            color={Colors.main}
                            fontSize={16}
                        />

                        {/* EMAIL */}
                        <Text fontWeight={"bold"}>Email</Text>
                        <Input
                            placeholder="stonyango@gmail.com"
                            variant="outline"
                            color={Colors.main}
                            fontSize={16}
                        />

                        {/* PASSWORD */}
                        <Text fontWeight={"bold"}>Password</Text>
                        <Input
                            placeholder="Password"
                            type="password"
                            variant="outline"
                            color={Colors.main}
                            fontSize={16}
                        />

                        {/* Confirm Password */}
                        <Text fontWeight={"bold"}>Confirm Password</Text>
                        <Input
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
                        bg={Colors.main}>
                        REGISTER
                    </Button>

                    <Box alignItems={"center"}>
                        {/* Text Bottom */}
                        <HStack>
                            <Text>Already have an account? </Text>
                            <Text color={Colors.main}>Login</Text>
                        </HStack>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default RegistrationScreen;
