import React from 'react';
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      {!modalVisible && (
        <>
          <Text style={styles.title}>
            Hello World</Text>
            <TouchableOpacity
            style={styles.customButton}
            onPress={openModal}>
            <Text style={styles.customButtonText}>Entrar</Text>
                </TouchableOpacity>
                <Text>
                  Plataforma atual: {Platform.OS==='ios' ? 'iOS' : 'Android'}
                </Text>
        </>
      )}
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          onRequestClose={handleCloseModal}
          >
            <View>  
              <Text> 
                Isto é um modal
              </Text>
              <TouchableOpacity
                style={styles.customButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.customButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>

            </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 10,
    },
    customButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

});