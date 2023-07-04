import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareFirst: {
    width: 90,
    height: 90,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareSecond: {
    width: 90,
    height: 90,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareThird: {
    width: 90,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareFourth: {
    width: 90,
    height: 90,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 16,
    color: 'white',
  },
  temperatureText: {
    fontSize: 16,
    color: 'white',
  },
  imageBottomRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  imageBottomLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  imageTopRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  imageTopLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 5,
    left: 5,
  },
});

export default styles;