import React, { useEffect } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setAPhoto } from "reducers/photo";
import route from "services/route";
//styles
import styles from "./styles";

function PhotoContainer({ item, setAPhoto }) {
  const setPhoto = async item => {
    await setAPhoto(item);
    route.navigate("FullView");
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setPhoto(item.urls.full)}
    >
      <Image style={styles.img} source={{ uri: item.urls.full }} />
      {item.description && <Text style={styles.descr}>{item.description}</Text>}
      <Text style={styles.author}>{item.user.name}</Text>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setAPhoto
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(PhotoContainer);
