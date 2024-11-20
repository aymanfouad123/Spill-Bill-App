import Item from "./Item"

const Items = ({ items, onDelete, onClick }) => {
    return (
        <>
        {items.map((item) => (
            <Item key = {item.id} item = {item} onDelete = {onDelete} onClick = {onClick} />
        ))}
        </>
    )
} 

export default Items