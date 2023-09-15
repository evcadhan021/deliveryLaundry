import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { WARNA_UTAMA } from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';


const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={{width: '60%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.labelSaldo}>Saldo : </Text>
          <Text style={styles.valueSaldo}>Rp. 100.000</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.labelPoint}>Antar Point : </Text>
          <Text style={styles.valuePoint}>100 point</Text>
        </View>
      </View>
      <View style={styles.buttonAksi}>
        <ButtonIcon title="Add Saldo"/>
        <Gap width={15}/>
        <ButtonIcon title="Get Point"/>
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    marginTop: -windowHeight * 0.08,
    flexDirection:'row'
  },
  labelSaldo:{
    fontSize:20,
    fontFamily:'TitilliumWeb-Regular',
    color:'black'
  },
  valueSaldo:{
    fontSize:20,
    fontFamily:'TitilliumWeb-Bold',
    color:'black'
  },
  labelPoint:{
    fontSize:12,
    fontFamily:'TitilliumWeb-Bold',
    color:'black'
  },
  valuePoint:{
    fontSize:12,
    fontFamily:'TitilliumWeb-Bold',
    color: WARNA_UTAMA
  },
  buttonAksi:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  }
});
