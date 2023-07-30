import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import BottomInfoText from './map'; // Importando o array do arquivo 'map.js'

export default function MonitorBottom() {
  const [showWarning, setShowWarning] = useState(null);

  const handleWarningPress = (itemId) => {
    if (showWarning === itemId) {
      // Se o mesmo item estiver sendo clicado novamente, esconder o aviso
      setShowWarning(null);
    } else {
      setShowWarning(itemId);
    }
  };

  const getWarningMessage = (title) => {
    switch (title) {
      case 'Reservatório de água':
        return 'Por favor, encha o reservatório de água';
      case 'Luz':
        return 'Aviso: Baixa luminosidade';
      case 'Temperatura':
        return 'Aviso: Temperatura baixa';
      // Adicione mais casos conforme necessário para outros títulos
      default:
        return '';
    }
  };

  return (
    <View style={styles.box}>
      <View style={styles.squares}>
        {BottomInfoText.map((item) => (
          <View
            key={item.id}
            style={[
              styles.infoContainer,
              item.porcentagem && parseInt(item.porcentagem) < 40 && { backgroundColor: 'red' },
            ]}
          >
            {item.porcentagem && parseInt(item.porcentagem) < 40 && (
              <TouchableOpacity onPress={() => handleWarningPress(item.id)} style={styles.warningContainer}>
                <Image source={require('../../../assets/warning.png')} resizeMode="contain" style={styles.warningIcon} />
              </TouchableOpacity>
            )}
            <Image source={item.imagem} resizeMode="contain" style={styles.imageReservatorio} />
            {item.porcentagem && <Text style={styles.porcentagem}>{item.porcentagem}</Text>}
            {item.graus && <Text style={styles.graus}>{item.graus}</Text>}
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
        {showWarning !== null && (
          <View style={styles.boxWarningText}>
            <Image source={require('../../../assets/warning.png')} resizeMode="contain" style={styles.boxWarningIcon} />
            <Text style={styles.warningText}>{getWarningMessage(BottomInfoText[showWarning].title)}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos do componente MonitorBottom
  box: {
    top: 500,
    width: 380,
  },
  squares: {
    flexDirection: 'row',
  },
  infoContainer: {
    borderRadius: 30,
    backgroundColor: '#31A05E',
    margin: 10,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  porcentagem: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  graus: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  imageReservatorio: {
    height: 20,
    width: 40,
  },
  warningContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningIcon: {
    height: 20,
    width: 20,
    bottom: 30,
  },
  warningText: {
    color: 'white',
  },
  boxWarningText: {
    position: 'absolute',
    flexDirection: 'row',
    top: 140,
    width: '100%',
    height: 50,
    backgroundColor: '#31A05E',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxWarningIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
});
