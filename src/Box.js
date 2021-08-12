

function Box({width, height, backgroundColor="red", deleteBox, id}){
    let style = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor
    }


    return (
        <div className="Box" id={id}>
            <div style={style}></div>
            <button onClick={deleteBox}>remove</button>
        </div>
    );
}

export default Box;