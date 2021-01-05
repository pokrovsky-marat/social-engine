import { api, profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_PROFILE_INFO = "SET-PROFILE-INFO";
const SET_STATUS_PROFILE = "SET-STATUS-PROFILE";

let initialState = {
  posts: [
    { id: 0, message: "Hello my  sister-twister" },
    { id: 1, message: " bah bah bababah" },
    { id: 3, message: "User 3" },
    { id: 4, message: "Hey, hey, hey, ya-ha-ha!!!" },
  ],
  profileInfo: null,
  statusProfile: "",
};

function profilePageReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    let newId = state.posts[state.posts.length - 1].id + 1;
    return {
      ...state,
      posts: [...state.posts, { id: newId, message: action.message }],
    };
  } else if (action.type === DELETE_POST) {
    {
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.id),
      };
    }
  } else if (action.type === SET_PROFILE_INFO) {
    {
      return { ...state, profileInfo: action.profileInfo };
    }
  } else if (action.type === SET_STATUS_PROFILE) {
    {
      return { ...state, statusProfile: action.statusProfile };
    }
  }
  return state;
}

export function addPost(data) {
  return { type: ADD_POST, message: data.message };
}

export function deletePost(id) {
  return { type: DELETE_POST, id };
}

export function setProfileInfo(profileInfo) {
  return { type: SET_PROFILE_INFO, profileInfo };
}

export function setStatusProfile(statusProfile) {
  return { type: SET_STATUS_PROFILE, statusProfile };
}

export const getUser = (userId) => {
  console.log("getUser ----------")
  return (dispatch) => {
    api.getUser(userId).then((response) => {

      dispatch(setProfileInfo(response));
    });
  };
};
export const getStatusProfile = (userId) => {
  return (dispatch) => {
    profileApi.getStatusProfile(userId).then((response) => {
      dispatch(setStatusProfile(response));
    });
  };
};
export const updateStatusProfile = (status) => {
  return (dispatch) => {
    profileApi.updateStatusProfile(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setStatusProfile(status));
      }
    });
  };
};
export const updateProfilePhoto = (image, id) => {
  return (dispatch) => {
    profileApi
      .updateProfilePhoto(image)
      .then((response) => {
        if (response.resultCode === 0) {
      
          dispatch(getUser(id));
        } else {
          console.log(response.messages);
        }
      })
      .catch((err) => {
        console.log("error!!!");
      });
  };
};
export const updateProfileData = (data, id) => {
  return (dispatch) => {
    profileApi
        .updateProfileData(data)
        .then((response) => {
          debugger
          if (response.resultCode === 0) {
            dispatch(getUser(id));
          } else {
            console.log(response.messages);
          }
        })
        .catch((err) => {
          console.log("error!!!");
        });
  };
};

export default profilePageReducer;
