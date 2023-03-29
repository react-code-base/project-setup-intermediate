import React from 'react'
import { useInputValue } from '../../hooks/useInputValue';
import './form.scss';

const Form = () => {

    const email = useInputValue("");  
    const password = useInputValue("");

    const handleSubmit = e => {    
        e.preventDefault();    
        console.log(email.value, password.value);
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" {...email} />
            <input type="password" placeholder="Password"  
                value={password.value} 
                onChange={password.onChange} />

            <button type="submit">Submit</button>
        </form>
    </>
    )
}

export default Form
