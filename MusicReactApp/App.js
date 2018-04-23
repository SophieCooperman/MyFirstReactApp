import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert, TouchableHighlight } from "react-native";
import AlbumItem from "./src/component/AlbumItem";
import Repository from "./src/component/Repository";
import { getMovies } from "./src/functions/API";

export default class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        albums: null,
        status: false
      };
  }
  

  componentDidMount(){
    this.fetchMovies();
  }

  fetchMovies(){
    const _this = this;

    getMovies().then(data => {
      _this.setState({
        rawJson: data.movies,
        albums: data.movies.map(movie => {
          return <AlbumItem title={movie.title} year={movie.releaseYear} />
        })
      });

    
    });
  }


  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to my react music app!</Text>
        
        {/* <Button title="show JSON" color = '#FF00FF' onPress={()=> {
          Alert.alert(JSON.stringify(this.state.rawJson));
        }}/>  */}

        <TouchableHighlight 
          style = {styles.customButton}
          underlayColor = '#FF00FF'
          onPress={()=>this.toggleStatus()}> 
          <Text>Show JSON</Text> 
        </TouchableHighlight>

        {this.state.status ? <Repository/> : null}
        
        {/* must stay in multiply rows - why?????????????? */}
        <ScrollView style={styles.customScrollView}>  
          {this.state.albums} 
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555759",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },

  title: {
    fontSize: 20,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    color: "white",
    justifyContent: "center"
  },

  customScrollView: {
    flex: 1,
    width: "100%",
    marginTop: 30
  },

  customButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDAA',
    padding: 10    
  }

});
