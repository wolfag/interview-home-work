import { createAction } from "redux-actions";

import * as Type from "./type";

export const loginAction = createAction(Type.LOGIN);
export const loginSuccessAction = createAction(Type.LOGIN_SUCCESS);
export const loginFailAction = createAction(Type.LOGIN_FAIL);

export const logoutAction = createAction(Type.LOGOUT);
export const logoutSuccessAction = createAction(Type.LOGOUT_SUCCESS);
