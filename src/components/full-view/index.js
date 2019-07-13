import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import route from "services/route";
//styles
import styles from "./styles";

function FullView({ photo }) {
  const back = () => {
    route.navigate("Gallery");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cross} onPress={back}>
        <Text style={styles.back}>{"Back"}</Text>
      </TouchableOpacity>
      <Image style={styles.img} source={{ uri: photo }} />
    </View>
  );
}

const mapStateToProps = state => ({
  photo: state.photo
});

export default connect(mapStateToProps)(FullView);
