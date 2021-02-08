import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editCar } from '../actions/carAction';

class EditCar extends Component {
    state = {
        id: this.props.match.params.carId,
        make: null,
        model: null,
        year: null,
        color: null,
        transmissionType: null,
        kilometers: null
    };

    componentDidMount() {
        const car = this.props.cars.find(car => car.id == this.state.id);   
        this.setState({
            ...this.state,
            make: car.make,
            model: car.model,
            year: car.year,
            color: car.color,
            transmissionType: car.transmissionType,
            kilometers: car.kilometers
        });
    }

    handleChange = (e) => {
        if (e.target.type === 'radio') {
            this.setState({
                [e.target.name]: e.target.value
            });
        } else if (e.target.type === 'number') {
            this.setState({
                [e.target.id]: Number(e.target.value)
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editCar(this.state);
        this.props.history.push('/car');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="make" className="col-sm-2 col-form-label">Make</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="make" placeholder="Make" onChange={this.handleChange} defaultValue={this.state.make}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-2 col-form-label">Model</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="model" placeholder="Model" onChange={this.handleChange} defaultValue={this.state.model} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="year" className="col-sm-2 col-form-label">Year</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="year" placeholder="Year" onChange={this.handleChange} defaultValue={this.state.year} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="color" placeholder="Color" onChange={this.handleChange} defaultValue={this.state.color} />
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Transmission Type</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="transmissionType" id="auto" value="Auto" onChange={this.handleChange} checked={this.state.transmissionType === 'Auto'} />
                                <label className="form-check-label" htmlFor="auto">
                                    Auto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="transmissionType" id="manual" value="Manual" onChange={this.handleChange} checked={this.state.transmissionType === 'Manual'} />
                                <label className="form-check-label" htmlFor="manual">
                                    Manual
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row">
                    <label htmlFor="kilometers" className="col-sm-2 col-form-label">Kilometers</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="kilometers" placeholder="Kilometers" onChange={this.handleChange} defaultValue={this.state.kilometers} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Modify</button>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cars: state.cars
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCar: (car) => { dispatch(editCar(car)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditCar));