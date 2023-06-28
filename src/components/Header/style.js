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
},
profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
},
centerContainer: {
    flex: 2,
    alignItems: 'center',
},
greetingText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 'bold',
},
rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
},
notificationIcon: {
    width: 40,
    height: 40,
},
});

export default styles;
