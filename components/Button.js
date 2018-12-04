import React from 'react';
import { Button } from 'react-native'

const CustButton = (props) => {
  return (
    <Button 
      onPress={props.fn}
      title={props.title}
      color="crimson"
      accessibilityLabel="this is just another button"
    />
  );
}

export default CustButton;
