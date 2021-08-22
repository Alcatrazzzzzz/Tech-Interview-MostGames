import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ParserActionCreators from "../store/action-creators/parser";

//custom hook to get actions object
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ParserActionCreators, dispatch);
};
