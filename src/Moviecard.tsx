import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

interface IMovieCard {
  name: string;
  imageUrl: string;
   data:string;
}

const MovieCard = ({name, imageUrl, data}: IMovieCard) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.text1}>{name}</Text>
        <Image
          style={{
            width: 100,
            height: 100,
            marginLeft: 5,
            marginBottom: 45,
            marginTop: 5,
            borderRadius: 5,
          }}
          source={{uri: imageUrl}}
        />
        <Text style={styles.text2}>{data}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MovieCard;

const styles = StyleSheet.create({
  text1: {
    fontSize: 25,
    color: 'black',
    marginLeft: 5,
    marginTop: 10,
  },
  text2: {
    fontSize: 18,
    color: 'gray',
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 20,
   },
});