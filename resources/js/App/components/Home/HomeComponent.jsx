import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';

export class HomeComponent extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <div className="card-header"><h2>Nur Tech Task Home</h2></div>

                            <div className="card-body">
                                <h2>Abu Shahadat Md. Sayem</h2>
                                <h3>Software Engineer</h3>
                                <h4>
                                    e-mail: sayem1413@gmail.com 
                                </h4>
                                <h6>mobile: 01680611205</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
}
const mapStateToProps = (state, ownProps) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
