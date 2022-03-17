import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SharedStyles from './SharedStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  functionName: string;
  func: () => void;
}
const IconButton = ({name, functionName, func}: Props) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={SharedStyles.IconButton} onPress={func}>
        <Icon name={name} style={SharedStyles.searchIcon} />
        <Text>{functionName}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default IconButton;
