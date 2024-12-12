import './style.css'




function Frames({ pics }) {
    return (
        <div className="pictures__first">
            {pics.map((item, index) => (
                <img key={index} src={item} alt="FlowerImage" />
            ))}
        </div>
    );
}

export default Frames