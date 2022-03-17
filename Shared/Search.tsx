import React from 'react';
import {View, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {setSearch} from '../Redux/Actions';
import SharedStyles from './SharedStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <View style={SharedStyles.searchBar}>
      <Icon name="search" style={SharedStyles.searchIcon} />
      <TextInput
        style={SharedStyles.searchInput}
        placeholder="  Search..."
        onChangeText={text => dispatch(setSearch(text))}
      />
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    searchText: state.text,
  };
};

export default connect(mapStateToProps, setSearch)(Search);
