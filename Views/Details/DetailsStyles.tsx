import {Platform, StyleSheet} from 'react-native';

const DetailsStyles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  bottomView: {
    backgroundColor: 'white',
    flex: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  imageView: {
    flex: 3,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  phone: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  country: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  state: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  icons: {
    fontSize: 50,
    color: 'green',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'green',
  },
  backIcon: {
    fontSize: 25,
    alignSelf: 'flex-start',
    top: 10,
    margin: 10,
    color: 'white',
  },

  image: {
    marginTop: 20,
    margin: 15,
    width: 190,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
  },
  shareText: {
    color: 'green',
    fontSize: 15,
  },
  saveText: {
    color: 'green',
    fontSize: 15,
  },
});

export default DetailsStyles;
