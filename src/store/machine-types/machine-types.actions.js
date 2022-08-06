import { MachineTypeActionTypes } from "./machine-types.action-types";

export const setCurrentUser = (user) => ({
  type: MachineTypeActionTypes.SET_CURRENT_USER,
  payload: user,
});
