

function Box({width, height, backgroundColor, deleteBox, id}){
    let style = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor
    }


    return (
        <div className="Box" >
            <div style={style}></div>
            <button onClick={() =>deleteBox(id)}>remove</button>
        </div>
    );
}

export default Box;