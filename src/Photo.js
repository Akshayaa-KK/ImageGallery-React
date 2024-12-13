import './style.css'
import Header from './Header';
import Border from './Border';
import Frames from './Frame';

import Daisy from './daisy-2.jpg'
import Hibiscus from './Hibiscus.jpg'
import Lily from './Lily.jpg'
import Lotus from './lotus.jpg'
import Rose from './roses.jpg'
import Tulip from './Tulips.jpg'
import Sunflower from './sunflowers.jpg'
import Passionflower from './Passion-Flower.jpg'
import Title from './Title';

let firstSet = [Daisy, Hibiscus, Lily, Lotus,Rose, Tulip, Sunflower, Passionflower];


function Photo() {
    return (<div className="container">
        <Header></Header>
        <Title></Title>
        <Border></Border>
        <Frames pics={firstSet}></Frames>
    </div>)
}

export default Photo