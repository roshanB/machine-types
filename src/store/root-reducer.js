import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import machineTypeReducer from './machine-types/machine-types.reducer';
import machineReducer from './machines/machines.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['machine']
};

const rootReducer = combineReducers({
  machines: machineReducer,
  machineTypes: machineTypeReducer
});

export default persistReducer(persistConfig, rootReducer);
