import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

const GameList = () => {
  let { id } = useParams();
  const [players, setPlayers] = useState([]);
  const [success,setSuccess]=useState('')

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => setPlayers(res.data));
  }, []);

  const updatePlayer = (player, status) => {

    setSuccess('');
    if(id==1){
        player.game1 = status;
    }
    if(id==2){
        player.game2 = status;
    }
    if(id==3){
        player.game3 = status;
    }

    player.game1 = status;
    axios.put("http://localhost:8000/api/player/" + player._id, player).then((res) => {
      console.log(res);
      setSuccess('Haz actualizado exitosamente el status del jugador '+player.name+' para el juego '+id);
      //history.push("/");
    });
  };

  const showSuccess = () =>{
      if (success==''){
          return(<></>)
      }
      else{
          return(
            <div className="alert alert-success" role="alert">{success}</div>
          )
      }
  }

  const showPlayers = () => {
    let botonJugar = "";
    let botonNojugar = "";
    let botonIndeciso = "";

    return players.map((player, index) => {
      if (id == 1) {
        if (player.game1 == "Indeciso") {
          botonJugar = (<button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>);
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops iactive">Indeciso</button>;
        }
        if (player.game1 == "noJugar") {
          botonJugar = <button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>;
          botonNojugar = <button className="ops nactive">No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
        if (player.game1 == "Jugar") {
          botonJugar = <button className="ops jactive">Jugar</button>;
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
      }

      if (id == 2) {
        if (player.game2 == "Indeciso") {
          botonJugar = (<button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>);
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops iactive">Indeciso</button>;
        }
        if (player.game2 == "noJugar") {
          botonJugar = <button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>;
          botonNojugar = <button className="ops nactive">No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
        if (player.game2 == "Jugar") {
          botonJugar = <button className="ops jactive">Jugar</button>;
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
      }

      if (id == 3) {
        if (player.game3 == "Indeciso") {
          botonJugar = (<button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>);
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops iactive">Indeciso</button>;
        }
        if (player.game3 == "noJugar") {
          botonJugar = <button className="ops" onClick={() => updatePlayer(player, "Jugar")}>Jugar</button>;
          botonNojugar = <button className="ops nactive">No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
        if (player.game3 == "Jugar") {
          botonJugar = <button className="ops jactive">Jugar</button>;
          botonNojugar = <button className="ops" onClick={() => updatePlayer(player, "noJugar")}>No Jugar</button>;
          botonIndeciso = <button className="ops" onClick={() => updatePlayer(player, "Indeciso")}>Indeciso</button>;
        }
      }

      

      return (
        <tr key={index}>
          <td>{player.name}</td>
          <td>{player.position}</td>
          <td>
            {botonJugar}
            {botonNojugar}
            {botonIndeciso}
            {/* <Link  to={'player/'+player._id+'/edit'}><button type="button" className="btn btn-info m-1">Editar</button></Link> */}
            {/* <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/> */}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
        {showSuccess()}
      <h3>Informacion sobre juego {id}</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre del Jugador</th>
            <th scope="col">Posición</th>
            <th scope="col">Operaciones</th>
          </tr>
        </thead>
        <tbody>{showPlayers()}</tbody>
      </table>
    </div>
  );
};

export default GameList;
