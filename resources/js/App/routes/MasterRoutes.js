import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect, NavLink, useRouteMatch, useParams} from 'react-router-dom';

import HomeComponent from "../components/Home/HomeComponent";
import BuyerEnqueryComponent from "../components/BuyerEnquery/BuyerEnqueryComponent";
import AllBuyerEnqueryComponent from "../components/BuyerEnquery/AllBuyerEnqueryComponent";
import BuyerEnquiriesScrollComponent from "../components/BuyerEnquery/BuyerEnquiriesScrollComponent";
import BuyerEnqueryDetailsComponent from "../components/BuyerEnquery/BuyerEnqueryDetailsComponent";

export class MasterRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <HomeComponent />
                </Route>
                <Route path="/buyer-enquery">
                    <BuyerEnqueryComponent />
                </Route>
                <Route path="/all-buyer-enquery">
                    <AllBuyerEnqueryComponent />
                </Route>
                <Route path="/buyer-enqueries-scroll">
                    <BuyerEnquiriesScrollComponent />
                </Route>
                {/* <Route path={`/buyer-enquery/:id`}>
                    <BuyerEnqueryDetailsComponent />
                </Route> */}
            </Switch>
        );
    }
}

export default connect(null, null)(MasterRoutes)
