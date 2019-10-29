
import React from 'react';

function ListJob(props){
    return (
        <div>
            <h3>List Job</h3>

            <ul>
                {props.data.map(item => (
                    <li key={item.id.toString()}>{item.name} | <strong>{item.species}</strong></li>
                ))}
            </ul>
        </div>
    )
}

export default ListJob;