import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import Colors from "./src/Resources/Color";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import { NativeBaseProvider } from "native-base";
import RegistrationScreen from "./src/Screens/RegistrationScreen";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NativeBaseProvider>
                <StatusBar backgroundColor={Colors.status}/>
                <HomeScreen />
            </NativeBaseProvider>
        );
    }
}

export default App;
