import React, {useEffect, useState} from 'react';

function Input() {
    const [value, setValue] = useState('')
    useEffect(() => {
        if (value === 'error') {
                throw new Error('test')
        }
    }, [value]);

    return (
            <div>
                <h1>Do not type 'error'</h1>
             <input onChange={(e) => setValue(e.target.value)}></input>
            </div>
    );
}

export default Input;
