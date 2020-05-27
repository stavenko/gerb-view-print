import { deprecated } from "typesafe-actions";
import { withState } from "./type-safe-reducer";
const { createStandardAction } = deprecated;

export const applicationActions = {
  init: createStandardAction("app/init")<string>(),
};

export interface AppState {
  foo: string;
}

const initialState: AppState = { foo: "none" };

export const application = withState(initialState).add(
  applicationActions.init,
  (state, { payload }) => ({ ...state, foo: payload })
);
