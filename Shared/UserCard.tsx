import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {selectUser} from '../Redux/Actions/index';
import SharedStyles from './SharedStyles';

function UserCard({item}: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={SharedStyles.productContainer}>
      <TouchableOpacity
        style={SharedStyles.productCard}
        onPress={() => {
          dispatch(selectUser(item));
          navigation.navigate('Details');
        }}>
        <View style={SharedStyles.productImageContainer}>
          <Image
            style={SharedStyles.userImage}
            source={{uri: item.picturelarge}}
          />
        </View>
        <View style={SharedStyles.textContainer}>
          <Text style={SharedStyles.productTitle}>
            {item.namefirst} {item.namelast}
          </Text>
        </View>

        <View style={SharedStyles.productFooterContainer}>
          <Text style={{alignSelf: 'center'}}>{item.locationcountry}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = (state: any) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, selectUser)(UserCard);
