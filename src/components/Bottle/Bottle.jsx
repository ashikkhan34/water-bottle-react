import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle,handleAddToChart}) => {
    const {name , img , price} = bottle;
    return (
        <div className='bottle'>
            <h3>Name : {name}</h3>
            <img src={img}></img>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToChart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle:PropTypes.object.isRequired,
    handleAddToChart:PropTypes.func.isRequired
}
export default Bottle;