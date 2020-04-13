import React from 'react'

const Card = (props) => {
    const lb = props.bound * 100
    
    const cardStyles = {
        margin: "0 0 0 -"+ lb + "%",
    }
    
    const select = () => {
        props.setSelected(props.index)
    }

    return (
        <div className = {props.selected === props.index ? "card-container selected":"card-container"} onClick = {select}>
            <img src =  {props.src} className = "card" alt = {props.selected} style = {cardStyles}/>
        </div>
    )
}

export default Card