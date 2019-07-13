import { PHOTO_LIST } from "./__proto__";
import { requestPhotoes, getWeather } from "services/getPhotoes";

const SET_PHOTOS = "[photoList] SET_PHOTOS";
const initialState = new PHOTO_LIST();

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return action.photo;
    default:
      return state;
  }
};

export const setPhotoes = () => async dispatch => {
  try {
    const response = await requestPhotoes();
    dispatch(savePhoto(new PHOTO_LIST(response.body)));
  } catch (e) {
    console.log(e, "EEE");
  }
};

export const savePhoto = photo => ({ type: SET_PHOTOS, photo });
