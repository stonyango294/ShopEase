import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import Colors from "./src/Resources/Color";
import HomeScreen from "./src/Screens/HomeScreen";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor={Colors.main} />
                <HomeScreen />
            </View>
        );
    }
}

export default App;
