import { MachineTypeActionTypes } from "./machine-types.action-types";


const INITIAL_STATE = [
  {
    id: 'machine_id_1',
    typeId: 'mtype_id',
    typeName: 'Bulldozers'
    //typeTitle: 
  }
]

const machineTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default machineTypeReducer;
