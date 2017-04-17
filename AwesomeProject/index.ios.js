
import React from 'react'
 
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
 
import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;
 
 
 
var AwesomeProject = React.createClass({
  
  getInitialState: function() {
    return {
      selectedItem : 2,
      itemList: ['Korean', 'Indian', 'Italian', 'Sandwiches','Burgers', 'Breakfast','Mexican', 'Caribbean','Vietnamese', 'Chinese',
                   'Seafood', 'Pizza', 'Thai', 'Japanese', 'German']
    }
  },
 
  onPikcerSelect: function(index) {
    this.setState({
      selectedItem: index,
    })
  },
 
  onAddItem: function() {
    var name = '司马懿'
    if (this.state.itemList.indexOf(name) == -1) {
      this.state.itemList.push(name)
    }
    this.setState({
      selectedItem: this.state.itemList.indexOf(name),
    })
  },
 
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Picker style={{width: 150, height: 180}}
          selectedValue={this.state.selectedItem}
          itemStyle={{color:"white", fontSize:26}}
          onValueChange={(index) => this.onPikcerSelect(index)}>
            {this.state.itemList.map((value, i) => (
              <PickerItem label={value} value={i} key={"money"+value}/>
            ))}
        </Picker>
        <Text style={{margin: 20, color: '#ffffff'}}>
          你最喜欢的是：{this.state.itemList[this.state.selectedItem]}
        </Text>
 
        <Text style={{margin: 20, color: '#ffffff'}}
            onPress={this.onAddItem}>
          怎么没有司马懿？
        </Text>
      </View>
    );
  }
});
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1962dd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
// import { Dial } from 'react-native-dial'
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class DinnerSpinner extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// <

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
