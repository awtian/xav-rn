import React from 'react';
import {View, Text, Button} from 'react-native';

const About = (props) => {
  return (
    <View>
      <Text>Ini About page</Text>
      <Button
        onPress={() => props.navigation.navigate('Home')}
        title= "Back to home"
        />
    </View>
  );
}

export default About;
