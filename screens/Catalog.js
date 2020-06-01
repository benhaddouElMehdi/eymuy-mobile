import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import { catalog } from '../infra/Catalog-infra'

class Catalog extends Component {

  constructor(props) {
   super(props);
   this.state = {
     dataSource: undefined
    };
  }
  componentDidMount(){
   catalog(this.props.navigation.state.params.qr).then((responseJson)=> {
       console.log(responseJson)
       this.setState({
        dataSource: responseJson
       })
     })
  }

  render() {
      return (
          <View style={styles.container}>
              <Text>Catalog</Text>
            { this.state.dataSource != undefined  &&
              <FlatList
                data={this.state.dataSource.menus}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                   <View>
                    <Text>{item.id.toString()}</Text>
                    <Text> {item.label}</Text>
                    <Text>{item.description}</Text>
                    <Text>Items : </Text>

                    <FlatList
                      data={item.items}
                      keyExtractor={(item) => item.reference.toString()}
                      renderItem={({item}) => (
                         <View>
                          <Text>{item.reference}</Text>
                          <Text> {item.label}</Text>
                          <Text>{item.description}</Text>
                          <Text>******</Text>

                         </View>
                      )}
                    />

                    <Text>----------------------------------</Text>





                   </View>
                )}
              />
           }
          </View>
      );
  }
  }
export default Catalog;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
