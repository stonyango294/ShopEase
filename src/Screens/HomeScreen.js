import React, { Component } from "react";
import {
    Box,
    NativeBaseProvider,
    Text,
} from "native-base";
import { StyleSheet } from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <NativeBaseProvider>
                <Box flex={1}>
                    <Text>HomeScreen</Text>
                </Box>
            </NativeBaseProvider>
        );
    }
}

const styles = StyleSheet.create({});
