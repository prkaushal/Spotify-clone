import { reducerCases } from "./constants";

export const initialState = {
  token: null,
  playlists: [],
  userInfo : null,
  selectedPlaylistId : ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN : {
        return {
            ...state, token: action.token,

        }
    }

    case reducerCases.SET_PLAYLIST : {
        return {
            ...state , playlists : action.playlists
        }
    }


    case reducerCases.SET_USER : {
        return {
            ...state , userInfo : action.userInfo,
        }
    }


    default:
      return state;
  }
};

export default reducer;
