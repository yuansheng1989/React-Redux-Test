import React, { Component } from 'react';
import AddCar from './AddCar';
import EditCar from './EditCar';

class ModifyArchives extends Component {
    render() {
        const { isNew } = this.props;
        const carForm = isNew? (
            <div className='col-md-12'>
                <h3>Create New Car</h3>
                <AddCar />
            </div>
        ) : (
            <div className='col-md-12'>
                <h3>Edit Existing Car</h3>
                <EditCar />
            </div>
        );

        return (
            <div className='container'>
                <div className='row'>
                    {carForm}
                </div>
            </div>
        );
    }
}

export default ModifyArchives;