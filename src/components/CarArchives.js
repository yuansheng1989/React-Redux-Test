import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CarArchives extends Component {
    handleClick = (carId) => {
        this.props.history.push('/modify/' + carId);
    }
    
    render() {
        const { cars } = this.props;
        const carList = cars.map(car => {
            return (
                <tr key={car.id}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.transmissionType}</td>
                    <td>{car.kilometers}</td>
                    <td><button type="button" className="btn btn-primary" onClick={() => this.handleClick(car.id)}>Modify</button></td>
                </tr>
            );
        });
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Year</th>
                        <th scope="col">Color</th>
                        <th scope="col">Transmission Type</th>
                        <th scope="col">Kilometers</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {carList}
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(withRouter(CarArchives));