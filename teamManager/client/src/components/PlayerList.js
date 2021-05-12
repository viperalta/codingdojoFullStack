import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from './DeleteButton';

const PlayerList = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/players")
          .then((res) => setPlayers(res.data));
      }, []);

      const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }

    return (
        <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre del Jugador</th>
            <th scope="col">Posición</th>
            <th scope="col">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                    {/* <Link  to={'player/'+player._id+'/edit'}><button type="button" className="btn btn-info m-1">Editar</button></Link> */}
                    <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    );
}

export default PlayerList;
