
import PropTypes from 'prop-types';
const ErrorMessage = ({message}) => {
    return (
        <div>
           <h1>{message}</h1> 
        </div>
    )
}

ErrorMessage.propTypes ={
    message:PropTypes.string.isRequired
}

export default ErrorMessage;


