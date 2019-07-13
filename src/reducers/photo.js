const SET_A_PHOTO = "[photo] SET_A_PHOTO";
const CLEAR_PHOTO = "[photo] CLEAR_PHOTO";
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_A_PHOTO:
      return action.photo;
    case CLEAR_PHOTO:
      return initialState;
    default:
      return state;
  }
};

export const setAPhoto = photo => ({ type: SET_A_PHOTO, photo });
export const clearPhoto = () => ({ type: CLEAR_PHOTO, photo });
