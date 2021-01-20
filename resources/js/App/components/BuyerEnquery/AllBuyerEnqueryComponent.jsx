import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Link, withRouter} from 'react-router-dom';
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

export class AllBuyerEnqueryComponent extends Component {
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
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-md-2">
                                    <h6 className="float-left">{buyerEnquery.country}</h6>
                                </div>
                                <div className="col-md-10">
                                    <div className="float-left">
                                        {/* <Link to={`/buyer-enquery/${buyerEnquery.id}`}> */}
                                            <ReadMoreReact
                                                text={buyerEnquery.description}
                                                min={80}
                                                ideal={100}
                                                max={200}
                                            />
                                        {/* </Link> */}
                                    </div>
                                    {/* <p className="float-left">{ buyerEnquery.description }</p> */}
                                    <br/>
                                    {
                                        buyerEnquery.outwear == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Outwear</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.botoms == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Pants/Botoms</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.fabric == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Fabric</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.basic_knit == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Basic_knit</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.undergarment == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Undergarment</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.design_concept == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Design Story/Concept</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.headwear == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Headwear</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.t_shirt == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">T_shirt</button>
                                        :''
                                    }
                                    {
                                        buyerEnquery.others == 1 ?
                                        <button className="btn btn-light border disabled float-left mr-1">Others</button>
                                        :''
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return buyerEnqueryList;
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-12">
                        <div className="card text-center">
                            <div className="card-body">
                                <h6 className="float-left font-weight-bold">Seller Messages</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-12">
                        <div className="">
                            <div className="">
                                <ClipLoader
                                    css={override}
                                    sizeUnit={"px"}
                                    size={50}
                                    color={'#123abc'}
                                    loading={this.state.loading}
                                />
                                <div className="row">
                                { this.buyerEnqueryList() }
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
    return {};
}
const mapStateToProps = (state, ownProps) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBuyerEnqueryComponent)
