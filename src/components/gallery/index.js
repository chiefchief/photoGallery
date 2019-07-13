import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setPhotoes } from "reducers/photoList";
import PhotoContainer from "containers/photo-container";
//styles
import styles from "./styles";

function Gallery({ photoList, photo, setPhotoes }) {
  useEffect(() => {
    setPhotoes();
  }, []);

  const renderItem = ({ item }) => {
    return <PhotoContainer key={item.id} item={item} />;
    // console.log(item, "ITEM");
  };

  const keyExtractor = item => {
    return item.id;
  };

  console.log(photoList, photo, "PHOTOLIST");
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={photoList.photos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  photoList: state.photoList,
  photo: state.photo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPhotoes
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
