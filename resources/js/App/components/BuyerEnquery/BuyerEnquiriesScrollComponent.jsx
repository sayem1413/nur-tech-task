import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {push} from 'react-router-redux';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { globalUrl } from "../../../ConfigService";
import {toast} from 'react-toastify';
import ReadMoreReact from 'read-more-react';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
`;

export class BuyerEnquiriesScrollComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buyerEnqueries:[],
            errors:[],
            loading: true,
        }
        this.buyerEnqueryList = this.buyerEnqueryList.bind(this);
    }

    componentDidMount() {
        // this.props.login();
        axios.get(globalUrl+'get-buyer-enqueries').then((res) => {
            console.log( res.data.buyerEnqueries);
            this.setState({
                buyerEnqueries: res.data.buyerEnqueries,
                loading: false,
            })

        }).catch((e) => {
            this.setState({
                loading: false,
            })
        })
    }

    buyerEnqueryList(){
        let {buyerEnqueries} = this.state;
        let buyerEnqueryList = [];
        if(buyerEnqueries){
            buyerEnqueries.map((buyerEnquery, index) => {
                buyerEnqueryList.push(
                    <li className="list-group-item m-2 border rounded" key={index}>
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="float-left">{ this.timeConversion(buyerEnquery.created_at) }</h6>
                            </div>
                            <div className="col-md-8">
                                <span className="font-weight-bold text-success">Target Price - { buyerEnquery.target_price }$</span>
                                <br/>
                                <span className="font-weight-bold">Quantity - { buyerEnquery.quantity }</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h6 className="float-left">{ buyerEnquery.description.slice(0, 60) }</h6>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        return buyerEnqueryList;
    }

    timeConversion(date){
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [day, month, year].join('-');
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <ClipLoader
                                    css={override}
                                    sizeUnit={"px"}
                                    size={50}
                                    color={'#123abc'}
                                    loading={this.state.loading}
                                />
                                <ul className="list-group test-scrollbar">
                                { this.buyerEnqueryList() }
                                </ul>
                                
                                
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyerEnquiriesScrollComponent)
