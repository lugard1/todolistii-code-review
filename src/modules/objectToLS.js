import { store, taskArray } from './store.js';

const addObjToLocalStorage = (value) => {
  const task = {
    description: value,
    completed: false,
    index: taskArray.length,
  };
  taskArray.unshift(task);
  store();
};

export default addObjToLocalStorage;