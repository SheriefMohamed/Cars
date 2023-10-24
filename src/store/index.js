import { configureStore } from "@reduxjs/toolkit";
import carsReducer, { changeTerm, addCar, deleteCar } from "./slices/carsSlice";
import formReducer, { changeName, changeCost } from "./slices/formSlices";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, changeTerm, addCar, deleteCar };
