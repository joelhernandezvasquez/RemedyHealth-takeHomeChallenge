
import PropTypes from 'prop-types';
const Message = ({message}) => {
    return (
        <div>
           <h1>{message}</h1> 
        </div>
    )
}

Message.propTypes ={
    message:PropTypes.string.isRequired
}

export default Message;


