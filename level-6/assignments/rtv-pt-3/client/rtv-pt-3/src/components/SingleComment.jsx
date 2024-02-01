import React, { useState } from 'react';

function SingleComment(props) {

    const { text } = props
    return ( 
        <div>
            <p>{text}</p>
        </div>
     );
}

export default SingleComment;