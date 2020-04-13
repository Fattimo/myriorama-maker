import React from 'react';
import logo from './logo.svg';
import './App.css';
import Initialization from './Initialization'
import Myriorama from './Myriorama';
import Info from './Info'

const App = () => {
  const [init, setInit] = React.useState(false)
  const [myrioramaStyle, setMyrioramaStyle] = React.useState({})
  const [selected, setSelected] = React.useState(0)
  const [bounds, setBounds] = React.useState([0,1,2,3,4])
  const [slider, setSlider] = React.useState(6)
  const [learn, setLearn] = React.useState(false)

  let image = new Image()

  const loadFile = () => {
    if (document.getElementById("image-submission").files[0] === undefined) {
      alert("Please check your image file")
    } else {
      image.src = URL.createObjectURL(document.getElementById("image-submission").files[0])
      setInit(true)
      setBounds(ascendingArray(slider))
    }
  }

  image.onload = function() {
    setMyrioramaStyle({
      width: image.width,
      height: image.height,
      src: image.src,
    })
  }  

  const leftClick = (e) => {
    if (selected > 0) {
      let data = [...bounds]
      let temp = data[selected]
      data[selected] = data[selected - 1]
      data[selected -1] = temp
      setBounds(data)
      setSelected(selected - 1)
    }
  }

  const rightClick = (e) => {
    if (selected < bounds.length - 1) {
      let data = [...bounds]
      let temp = data[selected]
      data[selected] = data[selected + 1]
      data[selected + 1] = temp
      setBounds(data)
      setSelected(selected + 1)
    }
  }

  const adjustSlider = (e) => {
    setSlider(e.target.value)
  }

  const ascendingArray = (size) => {
    let arr = []
    for (let i = 0; i < size; i++) {
      arr.push(i)
    }
    return arr
  }

  const learnMore = () => {
    setLearn(true)
  }

  return (
    <div className="App">
      <Initialization
        slider = {slider}
        adjustSlider = {adjustSlider}
        loadFile = {loadFile}
        init = {init}
        learn = {learn}
        learnMore = {learnMore}
      />
      <Myriorama
        init = {init}
        leftClick = {leftClick}
        rightClick={rightClick}
        bounds = {bounds}
        selected = {selected}
        setSelected = {setSelected}
        myrioramaStyle = {myrioramaStyle}
      />
      <Info
        learn = {learn}
        setLearn = {setLearn}
      />
    </div>
  );
}

export default App;
