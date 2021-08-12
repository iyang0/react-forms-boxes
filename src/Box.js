

function Box({width, height, backgroundColor="red", deleteBox, id}){
    let style = {
        width,
        height,
        backgroundColor
    }


    return (
        <li className="box" id={id}>
            <div style={style}>box here</div>
            <button onClick={deleteBox}>remove</button>
        </li>
    );
}

export default Box;