import { v4 as uuid } from 'uuid';

function Box({width, height, backgroundColor="red"}){
    let style = {
        width,
        height,
        backgroundColor
    }
    let id = uuid();

    function removeBox(){
        let box = document.getElementById(id);
        box.remove();
    }

    return (
        <div className="box" id={id}>
            <div style={style}>box here</div>
            <button onClick={removeBox}>remove</button>
        </div>
    );
}

export default Box;