import React, { Component } from 'react';

class Country extends Component {
    render() {
    const {name, capital, region, population, flag} = this.props.country
        return (
            <div className='col-md-6 mx-auto my-3'>
                <div className="card">
                    <div className="card-body">
                        <h3 className='text-center'>{name}</h3><hr></hr>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Capital: {capital}</p>
                                <p>Region: {region}</p>
                                <p>population: {population}</p>
                            </div>
                            <div className="col-md-6">
                                <img height='200' width='200' className='img-thumbnail shadow rounded' src={flag} alt=''></img>
                            </div>
                        </div><hr></hr>
                            <button onClick={()=> this.props.addedCountries(this.props.country)} className='btn btn-warning d-block mx-auto'>Add This Country</button>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Country;