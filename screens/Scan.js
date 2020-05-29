import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Scan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Scan</Text>
            </View>
        );
    }
}
export default Scan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
