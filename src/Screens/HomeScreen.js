import { View, Text } from "react-native";
import React from "react";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import { Box, NativeBaseProvider } from "native-base";

const HomeScreen = () => {
    return (
        <NativeBaseProvider>
            <Box flex={1}>
                <HomeSearch />
                <HomeProducts />
            </Box>
        </NativeBaseProvider>
    );
};

export default HomeScreen;
