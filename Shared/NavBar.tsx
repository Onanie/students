import React from 'react';
import {View, Text} from 'react-native';
import SharedStyles from './SharedStyles';
import Search from './Search';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation?: any;
}
export default function NavBar({navigation}: Props) {
  return (
    <View style={SharedStyles.header}>
      <View style={SharedStyles.headerTop}>
        <View style={SharedStyles.headerCenter}>
          <Icon
            name="chevron-left"
            style={[
              SharedStyles.backIcon,
              {display: navigation ? 'flex' : 'none'},
            ]}
            onPress={() => navigation.goBack()}
          />
          <Text style={SharedStyles.headerTitle}>Users App</Text>
        </View>
      </View>
      <Search />
    </View>
  );
}
