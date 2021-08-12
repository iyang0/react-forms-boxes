import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList(){
    const { boxes, setBoxes } = useState([]);

    let id = uuid();

    function deleteBox(id) {
        let box = document.getElementById(id);
        box.remove();
    }

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }


    return(
        <div>
            <NewBoxForm addBox={addBox}/>
            <ul>
                {boxes ? boxes.map(box => (
                    <Box deleteBox={ evt => deleteBox(id)}
                        id={box.id}
                    />
                )) : boxes}
            </ul>
        </div>
    )
}

export default BoxList;