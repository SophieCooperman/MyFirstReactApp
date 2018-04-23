

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default class AlbumItem extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     imgUrl: 'http://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
        //     artistName: 'Artist Name',
        //     title: '',
        //     year: ''
            
            
        // }

        this.deviceWidth = Dimensions.get('window').width;
    }


    render(){
        return(
            <View style = {styles.songContainer}>
                {/* Urls with https doesnt load */}
                <Image source={{uri:'http://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'}} style={styles.imageStyle}/>
                <View style = {styles.songTextContainer}>
                    <Text style = {styles.bodyText}>ArtistName</Text>
                    <Text style = {styles.bodyText}>{this.props.title}</Text>
                    <Text style = {styles.bodyText}>{this.props.year}</Text>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    songContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        margin:5,
        backgroundColor: 'black',
        
    },

    songTextContainer: {
        flexDirection: 'column',
        margin:5,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    bodyText: {
        color: '#fff',
        padding: 5
    
    },
    imageStyle: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
  });