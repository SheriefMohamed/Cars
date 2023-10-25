import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            // Note...
            // action.payload = {name: "Somename", cost: 777}
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        deleteCar(state, action){
            // Note...
            // action.payload = id of the car to be removed
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            })
            state.data = updated;
        }
    }
})

export default carsSlice.reducer;
export const {changeTerm, addCar, deleteCar} = carsSlice.actions;