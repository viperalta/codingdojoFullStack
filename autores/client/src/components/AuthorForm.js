import React, { useState } from "react";
import {useHistory} from "react-router-dom";


const AuthorForm = (props) => {
  const { initialName, onSubmitProp } = props;
  const [name, setName] = useState(initialName);
  const history = useHistory();
  
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name });
  };

  const onCancel = () => {
    history.push("/");
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  onChange={e=>setName(e.target.value)}
                  value={name}
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                />
                <div id="nameHelp" className="form-text"></div>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <button onClick={onCancel} type="submit" className="btn btn-secondary mt-1">Cancelar</button>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default AuthorForm;
