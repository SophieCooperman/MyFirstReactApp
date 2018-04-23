import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';


export default class Repository extends Component {

    constructor(props){
        super(props);
        this.state ={ 
            isLoading: true            
        }
      }
    
      componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        //return fetch('http://10.0.2.2:80/Data/getMusicList') // cant work through android device - must be emulator
        
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
                isLoading: false,
                ans:responseJson,
                dataSource: responseJson.movies,
            
              
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    
    
      render(){
        if(this.state.isLoading){
          return(
            <View style={{padding: 10}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{paddingTop:10}}>
            <Text>
                {JSON.stringify(this.state.ans)+'\n'}
            </Text>
            
            {/* <FlatList 
              data={this.state.dataSource}
              renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
              keyExtractor={(item, index) => index}
            /> */}
          </View>
        );
      }

}

