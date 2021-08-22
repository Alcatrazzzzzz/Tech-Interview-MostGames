import { combineReducers } from "redux";
import { ParserReducer } from "./parserReducer";

export const rootReducer = combineReducers({
  parser: ParserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
