import { MachineActionTypes } from "./machines.action-types";

export const setCurrentUser = (user) => ({
  type: MachineActionTypes.SET_CURRENT_USER,
  payload: user,
});
