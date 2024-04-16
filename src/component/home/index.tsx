import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

const Home = () => {
  return (
    <View style={style.mainView}>
      <Text style={style.title}>Notepad</Text>
      <TextInput
        activeUnderlineColor="transparent"
        underlineColor="#f00"
        style={style.searchBar}
        placeholder="Search notes"
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {marginTop: 50, paddingLeft: 20, paddingRight: 20},
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },
  searchBar: {
    height: 45,
    borderRadius: 40,
    borderTopEndRadius: 40, // Overall border radius
    borderTopStartRadius: 40,
  },
});

export default Home;
