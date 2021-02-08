export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        car
    };
}

export const editCar = (car) => {
    return {
        type: 'EDIT_CAR',
        car
    }
}