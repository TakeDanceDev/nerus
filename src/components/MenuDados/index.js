import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ReturnMenu from '../ReturnMenu';

const options = [
  { id: 1, label: 'Nome', editable: true, data: 'João' },
  { id: 2, label: 'E-mail', editable: true, data: 'joao@example.com' },
  { id: 3, label: 'Telefone', editable: true, data: '(123) 456-7890' },
  { id: 4, label: 'Endereço', editable: true, data: 'Rua Principal, 123' },
  { id: 5, label: 'Dados complementares', editable: false },
];

export default function MenuDados({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingOption, setEditingOption] = useState(null);
  const [editedData, setEditedData] = useState('');

  const handleOptionPress = (option) => {
    if (option.editable) {
      setEditingOption(option);
      setEditedData(option.data);
      setModalVisible(true);
    } else {
      navigation.navigate('DadosComplementares');
    }
  };

  const handleSaveEdit = () => {
    // Implement logic to save the edited data
    if (editingOption) {
      editingOption.data = editedData;
    }
    setModalVisible(false);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient style={styles.Container} colors={['#1a5432', '#0d2818']}>
      <ReturnMenu />
      <View style={styles.upperContainer}>
        <Text style={styles.upperText}>Meus Dados</Text>
      </View>
      <View style={styles.optionsContainer}>
      {options.map((option) => (
         <TouchableOpacity
          key={option.id}
          onPress={() => handleOptionPress(option)}
          style={styles.optionItem}
  >
          <Text style={styles.optionText}>{option.label}</Text>
          <View style={styles.dataContainer}>
          <Text style={styles.dataText}>
        {option.data && option.data.length > 20 ? option.data.slice(0, 19) + '...' : option.data}
      </Text>
      <Text style={styles.greaterThan}>&gt;</Text>
    </View>
  </TouchableOpacity>
))}
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContent}>
                <TextInput
                  style={styles.editInput}
                  value={editedData}
                  onChangeText={(text) => setEditedData(text)}
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSaveEdit}>
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
  upperText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  optionItem: {
    top: 150,
    flexDirection: 'row', // Align icon and text side by side
    justifyContent: 'space-between', // Space between icon and text
    alignItems: 'center', // Center vertically
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    color: '#fff',
    fontSize: 16,
  },
  greaterThan: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  editInput: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#1a5432',
    padding: 10,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
