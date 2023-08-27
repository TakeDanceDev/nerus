import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ReturnMenu from '../ReturnMenu';

const optionsData = [
  { id: 1, label: 'Notificações', editable: true, data: 'Ativada', modalOptions: ['Ativada', 'Desativada'], selected: false },
  { id: 2, label: 'Idioma', editable: true, data: 'Português', modalOptions: ['Português', 'Espanhol', 'Inglês'], selected: false },
  { id: 3, label: 'Dados e Personalização', editable: false, navigationTarget: 'personalizacao', selected: false },
  { id: 4, label: 'Tema do Aplicativo', editable: false, navigationTarget: 'temaAPP', selected: false },
];

export default function MenuConfig() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const renderItem = ({ item }) => {
    const { id, label, editable, data, modalOptions, navigationTarget, upperThan } = item;

    const handleOptionPress = () => {
      if (editable) {
        setSelectedOption(item);
        setModalVisible(true);
      } else if (navigationTarget) {
        // Navegue para a tela de destino se houver uma
        // navigationTarget definida
        // Implemente a navegação de acordo com a sua estrutura de navegação
        // navigation.navigate(navigationTarget);
      }
    };

    return (
      <TouchableOpacity onPress={handleOptionPress}>
        <View style={styles.optionRow}>
          {item.selected && <Image source={require('../../../assets/rb-selected.png')} style={styles.selectedIcon} />}
          <Text style={styles.optionLabel}>{label}</Text>
          <Text style={styles.optionValue}>{data}</Text>
          <Image source={require('../../../assets/arrow-back.png')} style = {[styles.optionIcon, { transform: [{ scaleX: -1 }] }]}  />
        </View>
      </TouchableOpacity>
    );
  };

  const handleModalOptionSelect = (option) => {
    setModalVisible(false);

    if (selectedOption) {
      const updatedOptionsData = [...optionsData];
      const selectedIndex = updatedOptionsData.findIndex((item) => item.id === selectedOption.id);
      if (selectedIndex !== -1) {
        updatedOptionsData[selectedIndex].data = option;
        setSelectedOption(null);
        // Aqui você pode adicionar lógica para salvar a opção selecionada no estado ou no backend
      }
    }
  };

  return (
    <LinearGradient style={styles.container} colors={["#1a5432", "#0d2818"]}>
      <ReturnMenu />
      <Text style={styles.upperText}>Configurar o APP</Text>
      <View style={styles.centeredContent}>
        <FlatList
          data={optionsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Modal visible={modalVisible}
         animationType="slide"
         transparent={true}
         onRequestClose={() => setModalVisible(false)}
        >
          <View style = {styles.modalContainer}> 
          <View style = {styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma opção:</Text>
            <FlatList
              data={selectedOption ? selectedOption.modalOptions : []}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleModalOptionSelect(item)}
                >
                  <Text style={styles.modalOptionText}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    bottom: 150,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    right: 20,
  
  },
  optionValue: {
    fontSize: 16,
    color: '#fff',
    right: 15,
  },
  centeredContent: {
    bottom: 100,
    width: "90%",
  },
  optionIcon: {
    width: 10,
    height: 20,
    position: 'absolute',
    right: 10,
  },
  selectedIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Espaço entre o ícone de seleção e o ícone
    tintColor: 'green', // Cor do ícone de seleção
  },
  modalContainer:{
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    top: 200,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#1a5432',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff', // Cor do botão "Fechar"
    fontWeight: 'bold',
  },
});
