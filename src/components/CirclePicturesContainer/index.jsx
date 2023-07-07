import CirclePictures from "./CirclePictures/index"
import Person1 from '../../assets/person01.jpg'
import Person2 from '../../assets/person02.jpg'
import Person3 from '../../assets/person03.jpg'

import './index.css'

const CirclePicturesContainer = () => {
    return (
        <div className="picture_container">
            <CirclePictures imageSource={Person1} />
            <CirclePictures imageSource={Person2} />
            <CirclePictures imageSource={Person3} />
        </div>
    )
}

export default CirclePicturesContainer