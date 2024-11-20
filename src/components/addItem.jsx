import React, { Component } from "react";
import SplitMethod from "./splitMethod";


class AddItem extends Component {
    state = {
        items: [],
        selection: "Make a selection",
        selectedFriend: "",
        addedFriends: [],
        itemName: "",
        itemPrice: "",
    };

    handleSelection = (method) => {
        const selection = method.target.value;
        this.setState({ selection });
    };

    handleFriendSelection = (selection) => {
        const selectedFriend = selection.target.value;
        this.setState({ selectedFriend });
    };

    handleAddFriend = () => {
        let addedFriends = [...this.state.addedFriends];
        if (!addedFriends.includes(this.state.selectedFriend)) {
            addedFriends.push(this.state.selectedFriend);
        }
        this.setState({ addedFriends });
    };

    handleName = (method) => {
        let itemName = this.state.itemName;
        itemName = method.target.value;
        this.setState({ itemName });
    };

    handlePrice = (method) => {
        let itemPrice = this.state.itemPrice;
        itemPrice = method.target.value;
        this.setState({ itemPrice });
    };

    handleAddItemClick = () => {
        const newItem = {
            name: this.state.itemName,
            price: this.state.itemPrice,
            people: this.state.addedFriends,
            method: this.state.selection,
        };
        const items = [...this.state.items];
        items.push(newItem);
        this.setState({ items });
        this.setState({...this.state, addedFriends: []})
    };

    

    render() {
        const { splitMethods, friendsList } = this.props;

        return (
            <React.Fragment>
                <div style={{ margin: 20, display: "inline-grid", textAlign: "center"}} >
                    <div >
                        <span >Event Name: </span>
                        <input
                            type="text"
                            id="itemName"
                            name="itemName"
                            placeholder="Edit name"
                            size="10"
                            onChange={this.handleName}
                        />
                        <br></br>
                        <span >New Item: </span>
                        <input
                            type="text"
                            id="itemName"
                            name="itemName"
                            placeholder="Enter new item"
                            size="10"
                            onChange={this.handleName}
                        />
                        <br></br>
                        <span> Price: </span>
                        <input
                            type="number"
                            id="itemPrice"
                            name="itemPrice"
                            placeholder="0"
                            style={{ width: 70 }}
                            onChange={this.handlePrice}
                        />
                    </div>
                    <br></br>
                    <div >
                        {splitMethods.map((method) => (
                            <SplitMethod
                                key={method.id}
                                method={method}
                                onSelect={this.handleSelection}
                            />
                        ))}
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="friend">Add friend(s):</label>
                        <br />
                        <select
                            name="friend"
                            id="friend"
                            onChange={this.handleFriendSelection}
                            defaultValue={"SAF"}
                        >
                            <option value="SAF" disabled>
                                Select a friend
                            </option>
                            {friendsList.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        <button
                            className="btn btn-secondary btn-sm m-2"
                            style={{ fontSize: 9 }}
                            onClick={this.handleAddFriend}
                        >
                            +
                        </button>
                    </div>
                    <div>
                        <button
                            className="btn btn-primary btn-sm m-2"
                            onClick={this.handleAddItemClick}
                        >
                            Add Item
                        </button>
                        <button
                            className="btn btn-primary btn-sm m-2"
                            onClick={() =>
                                {
                                    this.props.goBack(this.state.items);
                                }
                            }
                        >
                            Save
                        </button>
                        <br></br>
                        <br></br>
                        Participants:
                        <ul style={{listStyleType: "none"}}> 
                            {this.state.addedFriends.map(friend => {
                                return <li>{friend}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddItem;