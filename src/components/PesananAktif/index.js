import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IconPesananActive} from '../../assets';
import { WARNA_ABU_ABU, WARNA_BELUM_DICUCI, WARNA_UTAMA } from '../../utils/constant';

const pesananAktif = ({title,status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconPesananActive />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default pesananAktif;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.01,
    alignItems:'center'
  },
  text:{
    marginLeft: windowHeight*0.02
  },
  title:{
    color:'black',
    fontSize:18,
    fontFamily:'TitilliumWeb-semiBold'
  },
  status:(status) => ({
    color:'black',
    fontSize:14,
    fontFamily:'TitilliumWeb-Light',
    color: status === "Sudah Selesai" ? WARNA_UTAMA : status === "Masih Dicuci" ? WARNA_BELUM_DICUCI : WARNA_ABU_ABU
  })
});
