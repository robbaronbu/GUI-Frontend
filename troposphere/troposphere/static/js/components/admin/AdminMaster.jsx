import React from "react";
import Router from "react-router";
import SecondaryAdminNavigation from "./SecondaryAdminNavigation";

let RouteHandler = Router.RouteHandler;

export default React.createClass({

    mixins: [Router.State],

    render: function() {
        return (
        <div>
            <SecondaryAdminNavigation/>
            <div style={{ paddingTop: "30px" }} className="container admin">
                <span className="adminHeader">
                    <h1 className="t-display-1">Admin</h1> 
                    <RouteHandler />
                </span>
            </div>
        </div>
        );
    }
});
