import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0d2818",
        position: "absolute",
        bottom: 0,
        padding: 15,
        width:"100%", 
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
      },
      homeIcon: {
        width: 36,
        height: 40
      },
      shopIcon: {
        width: 42,
        height: 42
      },
      incubatorIcon: {
        width: 45,
        height: 45
      },
      helpIcon: {
        width: 47,
        height: 47
      },
})

export default styles;