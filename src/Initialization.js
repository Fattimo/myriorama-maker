import React from 'react'

const Initialization = (props) => {
    const[label, setLabel] = React.useState("Upload Image");

    const submitFile = (e) => {
        console.log(document.getElementById("image-submission").files[0])
        setLabel(document.getElementById("image-submission").files[0].name)
    }

    
    return (
        <header className = {props.init || props.learn ? "hide":"App-header"}>
            <h1>Myriorama Maker</h1>
            
            <input type="file" accept = "image/*" id="image-submission" name="file" className = "submit" onChange = {submitFile}/>    
            <label htmlFor = "image-submission" id = "label">{label}</label>

            <div className = "partitions">
            <p>Number of Partitions: {props.slider}</p>
            <input type="range" min="1" max="12" value={props.slider} className="slider" onChange={props.adjustSlider}/>
            </div>

            <button className = 'button' onClick = {props.loadFile}>Make a Myriorama!</button>
            <br></br>
            <button className = 'button' onClick = {props.learnMore}>Learn More</button>
        </header>
    )
}
export default Initialization