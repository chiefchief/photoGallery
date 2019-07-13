import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingVertical: 50
  },
  flat: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16
  }
});
