const initState = {
    cars: [
        {id: '1', make: 'BMW', model: 'X5', year: '2020', color: 'black', transmissionType: 'Auto', kilometers: 13000},
        {id: '2', make: 'Toyota', model: 'Rav4', year: '2018', color: 'white', transmissionType: 'Manual', kilometers: 34000},
        {id: '3', make: 'Honda', model: 'Civic', year: '2019', color: 'blue', transmissionType: 'Auto', kilometers: 27000}
    ]

}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_CAR') {
        let newCars = [...state.cars, action.car];
        return {
            ...state,
            cars: newCars
        }
    } else if (action.type === 'EDIT_CAR') {
        let newCars = [...state.cars];
        let carIndex = newCars.findIndex(car => car.id === action.car.id);
        newCars[carIndex].make = action.car.make;
        newCars[carIndex].model = action.car.model;
        newCars[carIndex].year = action.car.year;
        newCars[carIndex].color = action.car.color;
        newCars[carIndex].transmissionType = action.car.transmissionType;
        newCars[carIndex].kilometers = action.car.kilometers;
        return {
            ...state,
            cars: newCars
        }
    }
    return state;
}

export default rootReducer;