import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList(){
    const [ boxes, setBoxes ] = useState([]);

    function deleteBox(id) {
        // let box = document.getElementById(id);
        // box.remove();
        setBoxes(boxes => boxes.filter( ele => ele.id !== id))
    }

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }


    return(
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box => (
                    <Box 
                        deleteBox={ () => deleteBox(box.id)}
                        width={box.width}
                        height={box.height}
                        backgroundColor={box.backgroundColor}
                        id={box.id}
                        key={box.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default BoxList;