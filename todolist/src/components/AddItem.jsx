import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";


function AddItem() {
    const [item, setItems] = useState();

    return (
    <>
    <form>
        <input type="text" id="toDo"/>
        <button type="submit" onClick={addToDo} >
            <FontAwesomeIcon icon={faCirclePlus} />
        </button>
    </form>

    </>
    )

    function addToDo() {
        var userInput = document.getElementById("toDo")
        if (userInput != null && userInput.value === "") {
            alert("Please enter a to do list item in the box before clicking add!")
        }
        else{
            setItems(userInput.value)
        }
    
    }
}

export default AddItem