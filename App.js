/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

const Images = [
    {
        uri: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "Cat with beautiful eyes"
    },

    {
        uri: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A cat with blue eyes"
    },

    {
        uri: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A cat on the sofa"
    },

    {
        uri: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A cat on the window"
    },

    {
        uri: "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A dark cat"
    },

    {
        uri: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A cat in dream"
    },

    {
        uri: "https://images.pexels.com/photos/1784289/pexels-photo-1784289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "Bird sitting on a railing"
    },

    {
        uri: "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A yellow cat"
    },

    {
        uri: "https://images.pexels.com/photos/703830/pexels-photo-703830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        label: "A cat named Nana"
    }
];

export default class App extends Component {
    state = {
        index: 0,
        imageWidth: null
    }

    nextImage(event) {
        const { index, imageWidth } = this.state,
              X = event.nativeEvent.locationX,
              delta = (X < imageWidth/2) ? -1 : +1;

        let newIndex = (index + delta) % Images.length;

        if (newIndex < 0) {
            newIndex = Images.length - Math.abs(newIndex);
        }

        this.setState({
            index: newIndex
        });
    }

    onImageLayout(event) {
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        });
    }

    render() {
        const image = Images[this.state.index];

        return (
            <View style={styles.container}>
                <View style={styles.empty} />
                <TouchableHighlight onPress={this.nextImage.bind(this)}
                                    style={styles.image}>
                    <ImageBackground source={{uri: image.uri}}
                           style={styles.image}
                           onLayout={this.onImageLayout.bind(this)}>
                        <Text style={styles.imageLabel}>{image.label}</Text>
                    </ImageBackground>
                </TouchableHighlight>
                <View style={styles.empty} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abcdef',
    },
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    },
    empty: {
        flex: 1
    }
});