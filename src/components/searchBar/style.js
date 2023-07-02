import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerBar: {
    position:"absolute",
    top:110,
    maxHeight:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "flex-start",
    marginHorizontal: 50,
    marginTop: 20,
  },
  searchContainer: {
    maxWidth:280,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    paddingHorizontal: 0,
    marginRight: 10, // Espaçamento horizontal entre o campo de pesquisa e o ícone de filtro
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
    margin: 10
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  filterIcon: {
    width: 39,
    height: 39,
    marginTop:2,
    marginLeft: 10, // Margem esquerda para afastar o ícone de filtro do campo de pesquisa
  },
});

export default styles;
