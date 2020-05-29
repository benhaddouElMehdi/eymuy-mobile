import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Orders extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>History</Text>
            </View>
        );
    }
}
export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
