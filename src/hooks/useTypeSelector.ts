import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

//custom hook to add types to normal redux selector
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
