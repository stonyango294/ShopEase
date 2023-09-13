import React from "react";
import { HStack, Text, NativeBaseProvider, Input, Box } from "native-base";
import Colors from "../Resources/Color";
import SafeAreaDecider from "react-native-smart-statusbar";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeSearch() {
    return (
        <NativeBaseProvider>
            <HStack
                space={3}
                bg={Colors.main}
                safeArea
                w="full"
                alignItems="center"
                py={4}
                px={6}
                flex={1}>
                <Input
                    placeholder="search..."
                    w="85%"
                    alignItems="center"
                    bg={Colors.white}
                    variant="filled"
                    type="search"
                    borderWidth={0}
                    fontSize={15}
                    h={12}
                    _focus={{
                        bg: Colors.white,
                    }}
                />

                {/* Search Icon */}

                <Pressable>
                    <Icon 
                        name="search"
                        size={22}
                        // position="absolute"
                        right={46}
                        bottom={'13'}
                    />
                </Pressable>

                <Pressable ml={3} right={20}>
                    <Icon
                        name="shopping-basket"
                        color={Colors.white}
                        size={25}
                       
                    />

                    <Box
                        px={1}
                        rounded="full"
                        position="absolute"
                        bg={Colors.red}
                        _text={{
                            color: Colors.white,
                            fontSize: "11px",
                        }}
                        top="-13"
                        left={2}>
                        5
                    </Box>
                </Pressable>
            </HStack>
        </NativeBaseProvider>
    );
}

export default HomeSearch;
