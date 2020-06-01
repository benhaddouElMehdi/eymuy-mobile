import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



class Scan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qr: "" ,
      scan : true
    }
  }

  onSuccess = e => {
    console.log(e.data)
    this.setState({qr : e.data})
    this.setState({scan : false})
    this._displayCatalog(e.data);
  };


  scanAgain = () => {
    this.setState({scan : true})
  };


  _displayCatalog = (qr) => {
    console.log("------------")
    console.log(qr)
    this.props.navigation.navigate('Catalog' , {qr: qr})
  }


  render() {
    console.log("-------  render() Scan  -----")
    const { scan, qr } = this.state
    return (
      <View>

     { !scan  &&
      <TouchableOpacity onPress={this.scanAgain} >
           <Text>Click to Scan again!</Text>
      </TouchableOpacity>

     }
      {  scan &&
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        reactivate= {true}
        flashMode={RNCamera.Constants.FlashMode.off}
        showMarker = {true}
        topContent={
          <Text>
             EYUMY SCAN Restaurant QR code
          </Text>
        }
        bottomContent={
          <TouchableOpacity>
            <Text>{this.state.qr}</Text>
          </TouchableOpacity>
        }
      />

    }
    </View>
    )
  }
}
export default Scan;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
