import Header from "../components/Header";
import Items from "../components/Items"
import { useState } from "react";
import './Events.css';

const App = () => {
  const [items, setItems] = useState(
    [{
        id:3,
        text: "Large Fries",
        participants: "Logan · Syed · Jame · Ayman",
        price: 7.23
    },
    {
        id:4,
        text: "Cheeseburger",
        participants: "Ayman · Harsh",
        price: 10.80
    },
    {
        id:5,
        text: "Strawberry Milkshake",
        participants: "Jame · Syed",
        price: 7.35
    },
    {
        id:6,
        text: "Large Cajun Fries",
        participants: "Logan · Syed · Jame · Ayman · Harsh",
        price: 7.23
    },
    {
      id:7,
      text: "Hamburger",
      participants: "Logan · Jame",
      price: 9.65
    },
    {
      id:8,
      text: "Hot Dog",
      participants: "Syed",
      price: 6.54
    },
  ])

  const deleteItem = (id) => { 
    setItems(items.filter((item) => item.id !== id))
  }

  const eventPage = (id) => {
    console.log("Path to events's page", id)
  }

  return (
    <div className="container">
      <Header 
        title = {"Item Details"}
      />
      {items.length > 0 ? (<Items items = {items} onDelete = {deleteItem} onClick = {eventPage} />) : "No Events"}
    </div>
  );
}

export default App;