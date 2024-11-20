import { useState } from "react";
export default function Friends() {
    const initFriend = ["Ayman", "Harsh", "Jame", "Logan", "Syed",];
    const [friendsList, SetFriends] = useState(initFriend);
    const [isVisible, setisVisible] = useState(false);
    const [newfriendname, setnewfriendname] = useState('Enter Name');


    const deleteFunction = (friend) => {
        console.log(friend);
        let temp_friends = friendsList;
        temp_friends = temp_friends.filter(item => item != friend);
        SetFriends(temp_friends);
    }

    const addPopupFunction = () => {
        setisVisible(true);
    }

    const addNewFriend = () => {
        let temp_friends = friendsList;
        temp_friends.push(newfriendname)
        setisVisible(false);
        SetFriends(temp_friends);
    }

    const handleChange = event => {
        setnewfriendname(event.target.value);
        console.log(newfriendname);
    }

    const listItems = friendsList.map((friend) =>
    <li>
        {friend}
        <button className="btn btn-primary btn-sm m-2" onClick={() => deleteFunction(friend)}> Delete</button>
    </li>

);

    return (
        <>
        <h1>Friends List</h1>
        <ul>
            {listItems}
        </ul>
        <button className="btn btn-primary btn-sm m-2" onClick={() => addPopupFunction()}> Add New Friend</button>
        <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <form onSubmit={() => addNewFriend()}>
            <label>
                <input type="text" value={newfriendname} onChange={handleChange} name="name"/>
            </label>
            <input className="btn btn-primary btn-sm m-2" type="submit" name="Submit"/>
        </form>
        </div >
        </>
    )
}