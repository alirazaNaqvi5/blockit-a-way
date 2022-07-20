import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from 'react-native';
import QRScanner from './QRScanner';

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
                <QRScanner />
            <TouchableOpacity 
            onPress={() => setModalVisible(!modalVisible)}
                style={{backgroundColor:'red',padding:20,margin:12,borderRadius:10}}
                >
                <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
            
        {/* <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View> */}
      </Modal>
      {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
      <TouchableOpacity style={styles.Option} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Receive Parcel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    Option: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#000",
        },
        text: {
        color: "white",
        fontSize: 18,
        },
  centeredView: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalView;