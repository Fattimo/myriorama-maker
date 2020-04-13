import React from 'react'

const Info = (props) => {
    const back = () => {
        props.setLearn(false)
    }

    return (
        <div className = {props.learn ? 'info':'hide'}>
            <h2>What is a Myriorama?</h2>
            <div className = 'desc'>
                <div className = 'block-of-text'>
                    <p>
                        A myriorama is a type of optical toy. Essentially, an image is split into multiple panels. These panels can be swapped
                        around in any order and are constructed in such a way that they can be swapped around in any order and still remain continuous.
                        This means that the backgrounds of each panel connect together and still maintain a cohesive image.
                    </p>
                    <p>
                        This website is intended to partition images into a Myriorama. Once an image is uploaded and the number of partitions are 
                        selected, a Myriorama will be generated and the image will be split into even panels. Clicking on the panel will select it,
                        and clicking the arrows above will move the panels around
                    </p>
                </div>
                <img src = "https://images-na.ssl-images-amazon.com/images/I/51i0jdhmukL._AC_.jpg" alt = "example"/>
            </div>
            <p>Website created by Matt Chen for ENGL1102:HP using React</p>
            <button onClick = {back} className = 'button'>Back to Home</button>
        </div>
    )
}

export default Info