import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCar } from '../actions/carAction';
import { withRouter } from 'react-router-dom';

class AddCar extends Component {
    state = {
        id: Date.now().toString(), //create a unique id for the new car
        make: null,
        model: null,
        year: null,
        color: null,
        transmissionType: null,
        kilometers: null
    };

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
        this.props.addCar(this.state);
        this.props.history.push('/car');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="make" className="col-sm-2 col-form-label">Make</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="make" placeholder="Make" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-2 col-form-label">Model</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="model" placeholder="Model" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="year" className="col-sm-2 col-form-label">Year</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="year" placeholder="Year" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="color" placeholder="Color" onChange={this.handleChange} />
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Transmission Type</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="transmissionType" id="auto" value="Auto" onChange={this.handleChange} />
                                <label className="form-check-label" htmlFor="auto">
                                    Auto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="transmissionType" id="manual" value="Manual" onChange={this.handleChange} />
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
                        <input type="number" className="form-control" id="kilometers" placeholder="Kilometers" onChange={this.handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => { dispatch(addCar(car)) }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(AddCar));