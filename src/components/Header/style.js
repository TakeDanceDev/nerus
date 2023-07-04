import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingRight: 10,
  },
  greetingText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "400",
  },
  greetingTextName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingRight: 15,
  },
  notificationIcon: {
    width: 30,
    height: 40,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
