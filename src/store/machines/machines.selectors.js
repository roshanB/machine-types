import { createSelector } from 'reselect';

const selectMachines = state => state.machines;

export const selectMachineTypesForNav = createSelector(
  [selectMachines],
  machines => machines.flatMap(machine => ({ typeName: machine.typeName, typeId: machine.typeId }))
);

export const selectPerParams = (params) => createSelector(
  [selectMachines],
  machines => {
    const isGetByTypeId = params && params.machineTypeId && params.machineTypeId !== '';
    return machines
      && machines.length
      && machines.filter(machine => !isGetByTypeId || params.machineTypeId === machine.typeId)
  }
)