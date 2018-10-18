/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  CheckBox,
  Button
  
} from 'react-native';

const pizza = {
  size: [
    {
      value: 1,
      inches: "12"
    },
    {
      value: 1.6,
      inches: "18"
    },
    {
      value: 1.9,
      inches: "24"
    }
  ],
  vegetable_toppings: [
    {
      toppings: "Tomatoes",
      value: 60
    },
    {
      toppings: "Red Onion",
      value: 23
    },
    {
      toppings: "Green Pepper",
      value: 40
    },
    {
      toppings: "Chilly",
      value: 35
    },
    {
      toppings: "Mushroom",
      value: 55
    },
    {
      toppings: "Grilled Zucchini",
      value: 35
    },
    {
      toppings: "Green Olives",
      value: 65
    } 
  ],
  non_vegetable_toppings: [
    {
      toppings: "Pepperoni",
      value: 88
    },
    {
      toppings: "Bacon",
      value: 120
    },
    {
      toppings: "Chicken",
      value: 120
    },
    {
      toppings: "Steak Strip",
      value: 120
    },
    {
      toppings: "Italian Ham",
      value: 50
    },
    {
      toppings: "Chorizo Sausage",
      value: 70
    },
  ],
  cheese: [
    {
      name: "cheese",
      value:70,
    },
    {
      name: "Feta Cheese",
      value:95,
    },
    {
      name: "Parmesan Cheese",
      value:95,
    },
    {
      name: "Parmesan Cheese",
      value: 78,
    },
    {
      name: "Extra Cheese",
      value: 50,
    },
    {
      name: "Four Cheese",
      value: 150,
    },
    {
      name: "Goat Cheese",
      value: 90,
    },
    {
      name: "Mozzarella",
      value: 80,
    },
    {
      name: "Dairy Free Cheese",
      value: "140"
    }
  ]
}

export default class App extends Component{
  state ={
    size:"",
    tomato: false,
    yeah:""
  };
  pizzaBuild = {
    ...pizza
  };
Help=() => {
  alert(this.state.yeah)
}
  
  render() {
   
  
    return (
      
      <View  style={styles.container2}>
      <Text  style={{fontSize:22, fontWeight:"bold"}}> PIZZA BUILDER </Text>
      <View style={styles.container}><View>
     
     </View>
      <Text  style={styles.label1}>Size</Text>
      <Text></Text>
      <Picker
      mode="dropdown"
  selectedValue={this.state.size}
  style={{ height: 50, width:100}}
  onValueChange={(itemValue) => this.setState({size: itemValue})}>
   
  <Picker.Item  label="12 Inch" value={this.pizzaBuild.size[0]} />
  <Picker.Item label="18 Inch" value={this.pizzaBuild.size[1]} />
  <Picker.Item label="22 Inch" value={this.pizzaBuild.size[2]} />
</Picker>
<Text> Value= {this.state.size.value}         Inches: {this.state.size.inches} </Text>
 </View>
      
   <Text  style={styles.label1}>Vegetable Toppings</Text>
  <View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.tomato}
     onChange={() => this.setState({ tomato: !this.state.tomato} )}
      
   />
   <Text style={{marginTop: 5}}>Roma Tomatoes</Text>
 </View>
</View>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.RedTomato}
     onValueChange={() => this.setState({ RedTomato: !this.state.RedTomato})}
   />
   <Text style={{marginTop: 5}}>Red Tomatoes    </Text>
 </View>
</View>

<Text>  </Text>
<View>
<Text style={styles.label1}>Non Vegetable Toppings</Text>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.Bacon}
     onValueChange={() => this.setState({ Bacon: !this.state.Bacon })}
   />
   <Text style={{marginTop: 5}}>Bacon</Text>
 </View>
</View>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.Pepperoni}
     onValueChange={() => this.setState({ Pepperoni: !this.state.Pepperoni })}
   />
   <Text style={{marginTop: 5}}>Pepperoni    </Text>
 </View>
</View>
</View>
<Text>  </Text>
<View>
<Text style={styles.label1}>Cheese</Text>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.Cheese}
     onValueChange={() => this.setState({ Cheese: !this.state.Cheese })}
   />
   <Text style={{marginTop: 5}}>Cheese</Text>
 </View>
</View>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.FetaCheese}
     onValueChange={() => this.setState({ FetaCheese: !this.state.FetaCheese })}
   />
   <Text style={{marginTop: 5}}>Feta    </Text>
 </View>
</View>
</View>
<View style={{alignItems:"center"}}>
<Button title="Send Order" onPress={this.Help}/>
<Text>  </Text>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
   padding: 10,
   backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection:"row"
  },
  container2: {
    flex:1,
    padding: 10,
    backgroundColor: "#fff",
     alignItems: "flex-start",
     justifyContent: "flex-start",
     flexDirection:"column"
   },
  label1:{
    fontSize:15 ,
    flexDirection:"row",
    fontWeight:"bold"
  },
  sizePicker: {
    fontSize:1 ,
    textAlign: 'center',
    flexDirection:"row"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
