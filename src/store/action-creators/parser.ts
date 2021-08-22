import { Dispatch } from "react";
import { ParserAction, ParserActionTypes } from "../../types/Parser";
import { axiosInstance } from "../../utils/axiosInstance";

export const fetchStrings = (idArary: number[]) => {
  return async (dispatch: Dispatch<ParserAction>) => {
    try {
      dispatch({ type: ParserActionTypes.FETCH_STRINGS });

      Promise.all(
        idArary.map((id) => {
          let string = axiosInstance
            .get(`/api/textstrings/${id}`)
            .then((response) => response.data.text)
            .catch((e) => {
              dispatch({
                type: ParserActionTypes.FETCH_STRINGS_ERROR,
                payload: e,
              });
            });

          return string;
        })
      ).then((data) => {
        dispatch({
          type: ParserActionTypes.FETCH_STRINGS_SUCCESS,
          payload: data,
        });
      });
    } catch (e) {
      dispatch({ type: ParserActionTypes.FETCH_STRINGS_ERROR, payload: e });
    }
  };
};
export const setSearchInput = (search: string) => {
  return (dispatch: Dispatch<ParserAction>) => {
    dispatch({ type: ParserActionTypes.SET_SEARCH_INPUT, payload: search });
  };
};
