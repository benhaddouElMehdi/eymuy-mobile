import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Restaurants extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Restaurants</Text>
            </View>
        );
    }
}
export default Restaurants;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
