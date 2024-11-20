import React, { Component } from "react";
import AddEvent from "../components/addItem";

class NewEvent extends Component {
    state = {
        friendsList: ["Ayman", "Harsh", "Jame", "Logan", "Syed"],
        splitMethods: [],
        items:[],
    };

    handleGoBack = items => {
        console.log(items);
    }

    render() {
        return (
            <React.StrictMode>
                <AddEvent splitMethods={this.state.splitMethods} friendsList={this.state.friendsList} items={this.state.items} goBack={this.handleGoBack}/>
            </React.StrictMode>
        );
    }
}

export default NewEvent;