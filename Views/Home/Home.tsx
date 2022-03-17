import React, {useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {selectUser} from '../../Redux/Actions';
import NavBar from '../../Shared/NavBar';
import UserCard from '../../Shared/UserCard';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    fetch('http://192.168.8.107:3000/users')
      .then(response => response.json())
      .then(responseJson => {
        setDataSource(responseJson);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderFooter = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <NavBar />
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <UserCard item={item} />;
        }}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state: any) => {
  return {
    text: state.searchText,
  };
};

export default connect(mapStateToProps, selectUser)(Home);
