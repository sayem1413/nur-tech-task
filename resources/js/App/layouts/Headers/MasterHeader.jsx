import React, {Component} from "react";
import {connect} from 'react-redux'
import {Link, NavLink, withRouter} from 'react-router-dom';


export class MasterHeader extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NUR TECH TASK</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink className="nav-link mr-3 mt-1" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mr-3 ml-3 mt-1" to="/buyer-enquery">BUYER ENQUERY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mr-3 ml-3 mt-1" to="/all-buyer-enquery">All BUYER ENQUERIES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mr-3 ml-3 mt-1" to="/buyer-enqueries-scroll">BUYER ENQUERIES SCROLL</Link>
                                </li>
                            </React.Fragment>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}
const mapStateToProps = (state, ownProps) => {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MasterHeader))
