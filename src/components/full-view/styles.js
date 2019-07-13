import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  img: {
    flex: 1,
    resizeMode: "center"
  },
  cross: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 6
  },
  back: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  }
});
