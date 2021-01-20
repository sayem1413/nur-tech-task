import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { globalUrl } from "../../../ConfigService";
import {toast} from 'react-toastify';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
`;

export class BuyerEnqueryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country:'',
            quantity:'',
            target_price:'',
            description:'',

            outwear:0,
            botoms:0,
            fabric:0,
            basic_knit:0,
            undergarment:0,
            design_concept:0,
            headwear:0,
            t_shirt:0,
            others:0,

            tags:[],
            categories:[],
            errors:[],
            loading: true,
        }
        this.handleFormInput = this.handleFormInput.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    handleFormInput(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        let value = '';
        if( target.type === 'checkbox' ){
            if( target.checked ){
                value = 1;
            } else {
                value = 0;
            }
        } else {
            value = target.value;
        }
        console.log(target.name + " = "+ value);
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    submitRequest() {
        this.setState({
            loading: true,
        });
        axios.post(globalUrl+'store-buyer-enquery' , this.state).then((res) => {
            this.setState({
                loading: false,
            })
            // console.log(this.state.posted_items);
            toast.success('Buyer enquery stored Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
            this.props.goTo('/all-buyer-enquery');
        }).catch((e) => {
            this.setState({
                loading: false,
            });
            if( e.response.status === 422 ){
                this.setState({
                    errors: e.response.data.errors
                })
            }
            if(e.response.status === 404){
                toast.error('Min 1 (One) tag needed', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                });
            }
            if( e.response.status === 500 ){
                toast.error('Error Occured', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                });
            }
            console.log( e.response );
        })
        
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <div className="card-body">
                                <ClipLoader
                                    css={override}
                                    sizeUnit={"px"}
                                    size={50}
                                    color={'#123abc'}
                                    loading={this.state.loading}
                                />
                                <div className="row">
                                    <div className="col-md-12 text-left">
                                        <h5 className="font-weight-bold">BUYER ENQUERY</h5>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label className="font-weight-bold float-left">Country</label>
                                        <select className="form-control" name="country" onChange={ this.handleFormInput } >
                                            <option key={1} value="Bangladesh">Bangladesh</option>
                                            <option key={2} value="USA">USA</option>
                                            <option key={3} value="UK">UK</option>
                                        </select>
                                        <span className="text-danger float-left">{ this.state.errors.country ? this.state.errors.country[0] : '' }</span>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="font-weight-bold float-left">Quantity</label>
                                        <input type="number" className="form-control" name="quantity" onChange={this.handleFormInput} />
                                        <span className="text-danger float-left">{ this.state.errors.quantity ? this.state.errors.quantity[0] : '' }</span>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="font-weight-bold float-left">Target Price</label>
                                        <input type="text" className="form-control" name="target_price" onChange={this.handleFormInput}  placeholder="$"/>
                                        <span className="text-danger float-left">{ this.state.errors.target_price ? this.state.errors.target_price[0] : '' }</span>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea type="text" className="form-control" name="description" onChange={ this.handleFormInput } placeholder="I'm looking for">
                                        </textarea>
                                        <span className="text-danger float-left">{ this.state.errors.description ? this.state.errors.description[0] : '' }</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-left">
                                        <label className="font-weight-bold float-left mr-2">Tags</label><span className="text-danger mr-2">*</span><span>Min 1 (One) Needed</span>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="outwear" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Outwear</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="botoms" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Pants/Botoms</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="fabric" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Fabric</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="basic_knit" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Basic knit</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="undergarment" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Undergarment</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="design_concept" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Design Story/Concept</small>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="headwear" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Headwear</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="t_shirt" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">T-shirt</small>
                                    </div>
                                    <div className="col-md-2">
                                        <input  type="checkbox" className="float-left mr-1" name="others" onChange={this.handleFormInput}/> <small className="float-left font-weight-bold">Others</small>
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-success float-left" onClick={ this.submitRequest }>
                                            Submit Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goTo: (url) => dispatch(push(url))
    };
}
const mapStateToProps = (state, ownProps) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerEnqueryComponent)
