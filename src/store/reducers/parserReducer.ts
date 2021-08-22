import {
  ParserAction,
  ParserActionTypes,
  ParserState,
} from "../../types/Parser";

const initialState: ParserState = {
  data: null,
  error: null,
  loading: false,
  searchInput: "",
};

export const ParserReducer = (
  state: ParserState = initialState,
  action: ParserAction
): ParserState => {
  switch (action.type) {
    case ParserActionTypes.FETCH_STRINGS:
      return {
        ...state,
        loading: true,
      };
    case ParserActionTypes.FETCH_STRINGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ParserActionTypes.FETCH_STRINGS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ParserActionTypes.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    default:
      return state;
  }
};
