import { StateType } from "typesafe-actions";
import { combineReducers } from "redux";
import { application } from "./application";
export const rootReducer = combineReducers({
  application,
});

export type RootState = StateType<typeof rootReducer>;


