import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "45%",
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden"
  },
  img: {
    height: 100,
    marginBottom: 16
  },
  descr: {
    fontSize: 14,
    color: "#070707",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 8,
    marginHorizontal: 8
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    textAlign: "center",
    marginHorizontal: 8,
    marginBottom: 8
  }
});
