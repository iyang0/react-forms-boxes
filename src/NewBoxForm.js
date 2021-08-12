import React, { useState } from "react";

function NewBoxForm(props){
    let initialState = {
        height:"",
        width:"",
        backgroundColor:"",
    }
    const [ formData, setFormData ] = useState(initialState);

    function handleSubmit(evt) {
        evt.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
      }

    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData( ele =>({
            ...ele,
            [name]:value,
        }));
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="height-input">Box Height:</label>
        <input id="height-input" 
            name="height"
            value={formData.height}
            onChange={handleChange}></input>
        <br/>
        <label htmlFor="width-input">Box Width:</label>
        <input id="width-input" 
            name="width"
            value={formData.width}
            onChange={handleChange}></input>
        <br/>
        <label htmlFor="color-input">Box color:</label>
        <input id="color-input" 
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}></input>
        <br/>
        <input type="submit"></input>
    </form>)
}

export default NewBoxForm;