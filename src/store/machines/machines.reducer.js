import { MachineActionTypes } from "./machines.action-types";
import { MACHINE_TYPE_FIELD_TYPES } from '../../common/app.constants';

const INITIAL_STATE = [{
  id: 'm_id_1',
  typeId: 'mtype_id',
  typeName: 'Bulldozer',
  titleFieldId: 'fieldId_1',
  fields: [
    {
      id: 'fieldId_1',
      name: 'Make',
      type: MACHINE_TYPE_FIELD_TYPES.smallText.type,
      length: MACHINE_TYPE_FIELD_TYPES.smallText.length,
      value: 'JCB',
    },
    {
      id: 'fieldId_2',
      name: 'Manufacturing Date',
      type: MACHINE_TYPE_FIELD_TYPES.date,
      value: '2021-12-01',
    },
    {
      id: 'fieldId_3',
      name: 'Number of jacks',
      type: MACHINE_TYPE_FIELD_TYPES.number,
      value: 0,
    }
  ]
},
{
  id: 'm_id_2',
  typeId: 'mtype_id_1',
  typeName: 'Boaring Machine',
  titleFieldId: 'fieldId_1',
  fields: [
    {
      id: 'fieldId_1',
      name: 'Make',
      type: MACHINE_TYPE_FIELD_TYPES.smallText.type,
      length: MACHINE_TYPE_FIELD_TYPES.smallText.length,
      value: 'JCB',
    },
    {
      id: 'fieldId_2',
      name: 'Manufacturing Date',
      type: MACHINE_TYPE_FIELD_TYPES.date,
      value: '2021-12-01',
    },
    {
      id: 'fieldId_3',
      name: 'Number of jacks',
      type: MACHINE_TYPE_FIELD_TYPES.number,
      value: 1,
    }
  ]
}];

const machineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      console.log('initial state', state);
      return state;
  }
};

export default machineReducer;
