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
  Button,
  ScrollView
  
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
    tomatoB: false,
    tomatoS:"",
    onionB: false,
    onionS:"",
    VegList: [],
    meatList: [],
    cheeseList:[]
  };
  pizzaBuild = {
    ...pizza
  };
  veggies = {
    ...pizza.vegetable_toppings
  }
  meats = {
    ...pizza.non_vegetable_toppings
  }
  cheeseTop = {
    ...pizza.cheese
  }
// getTotal = () =>{
//  const sum=(this.state.size.value*this.);
// }
AddCheck=() => {
  if (this.state.tomatoB){
    return;
  }
// this.state.tomatoB=true ? this.state.tomatoS=this.pizzaBuild.vegetable_toppings[0]:null
// this.state.onionB=true ? this.state.onionS=this.pizzaBuild.vegetable_toppings[1]:null
}
  
  render() {
   
  
    return (
      
      <ScrollView  style={styles.container2}>
      <Text  style={{fontSize:22, fontWeight:"bold", color:"black"}}> PIZZA BUILDER </Text>
      <View style={styles.container}><View>
     
     </View>
      <Text  style={styles.label1} >Size </Text>
      <Text></Text>
      <Picker
      mode="dropdown"
  selectedValue={this.state.size}
  style={{ height: 50, width:100}}
  onValueChange={(itemValue) => this.setState({size: itemValue})}>
   
  <Picker.Item  label="12 Inch" value={this.pizzaBuild.size[0]} />
  <Picker.Item label="18 Inch" value={this.pizzaBuild.size[1]} />
  <Picker.Item label="24 Inch" value={this.pizzaBuild.size[2]} />
</Picker>
 </View>
      
   <Text  style={styles.label1}>Vegetable Toppings</Text>
  <View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.tomatoB}
     onValueChange={() => this.setState({ tomatoB: !this.state.tomatoB } )
    }
      
   />
   <Text style={{marginTop: 5}}>Roma Tomatoes </Text>
 </View>
</View>
<View style={{ flexDirection: 'column'}}>
 <View style={{ flexDirection: 'row' }}>
   <CheckBox
     value={this.state.onionB}
     onValueChange={() => this.setState({ onionB: !this.state.onionB})}
   />
   <Text style={{marginTop: 5}}>Red Onions    </Text>
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
 <Text>  </Text>
</View>
</View>
<View style={{alignItems:"center"}}>
<Button title="Send Order" onPress={this.AddCheck}/>
<Text>    </Text>

</View>
<View >
  <Text style={styles.youOrderedlbl}>You ordered</Text>
  <Text>   
  </Text>
</View>
<View >
  <Text style={styles.sizeLbl}>Size</Text>
</View>
<View >
 
<Text>              Inches: {this.state.size.inches}                         Value: {this.state.size.value} </Text>
</View>
<Text>  </Text>
<View >
  <Text style={styles.sizeLbl}>Vegetable Toppings</Text>
</View>
<View >
 
<Text>          Toppings:{this.state.tomatoS.toppings}                          Value: {this.state.tomatoS.value} </Text>
</View>

<Text>  </Text>
<View >
  <Text style={styles.sizeLbl}>Non Vegetable Toppings</Text>
</View>
<View >
 
<Text>          Toppings:                          Value:  </Text>
</View>

<Text>  </Text>
<View >
  <Text style={styles.sizeLbl}>Cheese</Text>
</View>
<View >
 
<Text>                Name:                         Value:  </Text>
</View>
<Text>   </Text>
<View >
  <Text style={styles.sizeLbl}>TOTAL :   </Text>
</View>
<Text>   </Text>
<Text>   </Text>
      </ScrollView>
      
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

  sizeLbl: {
      fontSize:16 ,
      fontWeight:"bold",
      color:"black"
  },
  youOrderedlbl: {
    fontSize:22,
    fontWeight:"bold",
    
},
vegLbl:{
  fontSize:16 ,
      fontWeight:"bold",
      color:"black"
}
});
