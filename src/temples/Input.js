import React ,{ useState} from 'react';
import PropTypes from 'prop-types';

function Input({ addPost }){
    const [input , setInput] = useState('');

    function addPostEvent(event){
        setInput(event.target.value);
    }

    function onkeyDown(event){
        const title = event.target.value;

        if(event.key === 'Enter' && title){
            addPost(title);
            setInput('');
        }
    }
    return(
        <div className="input">
            <div className="input_hader">Create Post</div>
            <input 
                className="Input_field"
                type="text"
                value={input}
                onChange={addPostEvent}
                onKeyDown={onkeyDown}
            />
        </div>
    )
}
Input.propTypes = {
    addPost: PropTypes.func.isRequired
};
export default Input;