import { combineReducers } from "redux";

export default combineReducers({
  photoList: require("./photoList").default,
  photo: require("./photo").default
});
