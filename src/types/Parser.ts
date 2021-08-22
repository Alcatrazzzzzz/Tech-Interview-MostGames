export interface ParserState {
  searchInput: string;
  data: string[] | null;
  loading: boolean;
  error: null | string;
}

//action constants
export enum ParserActionTypes {
  FETCH_STRINGS = "FETCH_STRINGS",
  FETCH_STRINGS_ERROR = "FETCH_STRINGS_ERROR",
  FETCH_STRINGS_SUCCESS = "FETCH_STRINGS_SUCCESS",
  SET_SEARCH_INPUT = "SET_SEARCH_INPUT",
}

interface FetchStringAction {
  type: ParserActionTypes.FETCH_STRINGS;
}
interface FetchStringSucessAction {
  type: ParserActionTypes.FETCH_STRINGS_SUCCESS;
  payload: string[];
}
interface FetchStringErrorAction {
  type: ParserActionTypes.FETCH_STRINGS_ERROR;
  payload: string;
}
interface SetSearchInputAction {
  type: ParserActionTypes.SET_SEARCH_INPUT;
  payload: string;
}

export type ParserAction =
  | FetchStringAction
  | FetchStringErrorAction
  | FetchStringSucessAction
  | SetSearchInputAction;
