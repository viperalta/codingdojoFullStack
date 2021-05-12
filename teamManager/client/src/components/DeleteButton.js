import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { playerId, successCallback } = props;

    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="btn btn-danger" onClick={deletePlayer}>
            Eliminar Jugador
        </button>
    )
}

export default DeleteButton;
