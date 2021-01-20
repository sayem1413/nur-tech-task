import React, { Component } from 'react'
import { connect } from 'react-redux'

//import components
import { MasterRoutes } from "../../routes/MasterRoutes";
import MasterHeader from "../Headers/MasterHeader";
import Footer from "../Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export class MasterComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() { }

    render() {
        return (
        <div>
            <MasterHeader />
            <ToastContainer
                position = "top-center"
                autoClose = { 3000 }
                hideProgressBar = { true }
                newestOnTop = { false }
                closeOnClick rtl = { false }
                pauseOnVisibilityChange draggable pauseOnHover />
            <MasterRoutes />
            {/* <Footer /> */}
        </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { };
}
const mapStateToProps = (state) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterComponent)