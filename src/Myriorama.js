import React from 'react'
import Card from './Card'

const Myriorama = (props) => {

    const cards = props.bounds.map((bound, index) => 
      <Card 
        src = {props.myrioramaStyle.src}
        bound = {bound}
        index = {index}
        selected = {props.selected}
        setSelected = {props.setSelected}
      />)

    const cardStyle = {
        height: Math.min((window.innerHeight) * .8, props.myrioramaStyle.height),
        width: Math.min((window.innerHeight) *.8 / props.myrioramaStyle.height * props.myrioramaStyle.width, props.myrioramaStyle.width), 
    }


    return (
    <section className = {props.init ? "myriorama-container":"hide"}>
        <div className = {props.init ? "buttons":"hide"}>
          <button className = "button" onClick = {props.leftClick}>←</button>
          <button className = "button" onClick = {props.rightClick}>→</button>
        </div>
        <br/>
        <div className = 'overflow-wrapper'>
            <div style = {props.init ? cardStyle:{}} className = {props.init ? "myriorama":"hide"}>
            {cards}
            </div>
        </div>
        <p>Refresh the page to upload a new image!</p>
    </section>
    )
}
export default Myriorama