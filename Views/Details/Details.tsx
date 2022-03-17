import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import DetailStyles from './DetailsStyles';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from '../../Shared/IconButton';

const Details = ({currentUser, navigation}: any) => {
  const handleShareImage = async () => {
    let options = {
      title: 'share',
      message: 'message',
      url: currentUser.picturelarge,
    };
    try {
      await Share.open(options);
    } catch (err) {
      console.log(err);
    }
  };
  const back = () => {
    navigation.navigate('Home');
  };
  const locate = async () => {
    try {
      const uri =
        Platform.OS === 'ios'
          ? `comgooglemaps://?q=${currentUser.locationcoordinateslatitude},${currentUser.locationcoordinateslongitude}`
          : `geo://?q=${currentUser.locationcoordinateslatitude},${currentUser.locationcoordinateslongitude}&z=100`;
      await Linking.openURL(uri);
    } catch (error) {}
  };
  const call = () => {
    Linking.openURL(`tel:${currentUser.cell}`);
  };
  const email = () => {
    try {
      Linking.openURL(`mailto:${currentUser.email}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={DetailStyles.container}>
      <Icon name="arrow-left" style={DetailStyles.backIcon} onPress={back} />
      <View style={DetailStyles.imageView}>
        <Image
          source={{uri: currentUser.picturelarge}}
          style={DetailStyles.image}
        />
        <Text style={DetailStyles.name}>
          {currentUser.namefirst} {currentUser.namelast}
        </Text>
        <Text style={DetailStyles.country}>
          {currentUser.locationcountry} {currentUser.locationstate}
        </Text>
        <Text style={DetailStyles.country}>{currentUser.email}</Text>
        <Text style={DetailStyles.country}>{currentUser.cell}</Text>
      </View>

      <View style={DetailStyles.bottomView}>
        <View style={DetailStyles.iconsView}>
          <IconButton name="map-pin" functionName=" Locate" func={locate} />
          <IconButton name="mobile-phone" functionName="Call" func={call} />
          <IconButton name="mail-reply" functionName="Email" func={email} />
        </View>
        <View style={DetailStyles.buttonsContainer}>
          <TouchableOpacity
            onPress={handleShareImage}
            style={DetailStyles.saveButton}>
            <Text style={DetailStyles.saveText}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleShareImage}
            style={DetailStyles.shareButton}>
            <Text style={DetailStyles.shareText}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(Details);
