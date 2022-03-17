import {StyleSheet} from 'react-native';

const SharedStyles = StyleSheet.create({
  Headercontainer: {
    flex: 1,
    marginTop: 10,
  },
  HeaderbuttonContainer: {
    margin: 10,
  },
  IconButton: {
    backgroundColor: 'white',
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 80,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderbuttonRowContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  HeaderbuttonRow: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    flex: 0,
    backgroundColor: 'white',
    padding: 10,
    height: 125,
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  headerTop: {
    flexDirection: 'row',
  },
  headerCenter: {
    flexDirection: 'row',
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTitle: {
    top: 10,
    fontSize: 21,
    color: 'green',
    fontWeight: 'bold',
    left: 110,
    margin: 5,
  },
  headerSubTitle: {
    top: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1,
    right: '0%',
    position: 'absolute',
  },
  subHeader: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  subHeaderLeft: {
    backgroundColor: 'yellow',
    padding: 5,
  },
  subHeaderCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subHeaderName: {
    color: 'white',
    marginLeft: 10,
  },
  searchBar: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'green',
    marginHorizontal: 15,
  },

  errorText: {
    color: '#fdca40',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },

  centerText: {
    bottom: '45%',
    fontSize: 21,
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  backIcon: {
    color: 'green',
    fontSize: 25,
    margin: 5,
    top: '10%',
  },
  detailsBar: {
    flexDirection: 'row',
    position: 'relative',
    top: 10,
    height: '10%',
    backgroundColor: 'white',
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },

  headerContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  addIcon: {
    fontSize: 35,
    alignSelf: 'flex-end',
    top: -20,
    color: '#666A6D',
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 25,
    borderWidth: 0,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
    top: '30%',
  },
  image: {
    height: 70,
    width: 100,
  },
  productCard: {
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,

    borderRadius: 10,
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderBottomWidth: 0,
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 5,
    height: '100%',
    width: '100%',
  },
  userImage: {
    marginTop: 10,
    margin: 4,
    width: 80,
    height: 80,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 200 / 2,
    alignSelf: 'center',
  },
  productImageContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    width: '100%',
    height: '100%',
  },
  productFooterContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  productTitle: {color: 'black', fontSize: 17, fontWeight: 'bold', margin: 5},
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productRatingContainer: {
    borderColor: 'gray',
    borderTopColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    width: '100%',
    flexDirection: 'row',

    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 30,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
});
export default SharedStyles;
