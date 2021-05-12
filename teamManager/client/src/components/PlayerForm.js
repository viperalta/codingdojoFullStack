import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";

const PlayerForm = (props) => {
    const { initialName,initialPosition, onSubmitProp } = props;

    return (
        
          <Formik
          initialValues={{
          name : initialName,
          position:initialPosition,
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string()
            .min(3, "El nombre es muy corto")
            .required ("Por favor ingresa tu nombre"),
            
            position: Yup.string()
            .min (3, "La posicion es muy corta")
            .required("Por favor ingrese posicion correctamente"),
            
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(( )=>{
                console.log(values);
                onSubmitProp( values );
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h1>Agrega un nuevo jugador</h1>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="col-sm-2 col-form-label">
                            Nombre
                        </label>
                        <Field id= 'name'type="text" className="form-control" placeholder="Nombre" name='name'/>
                         {errors.name && touched.name && <p className="perror">{errors.name}</p>}
                     
                
                         <label className="col-sm-2 col-form-label">Posicion</label>
                         <Field  id= 'position' type="text" placeholder="Posicion" className="form-control" name='position'/>
                         {errors.position && touched.position && <p className="perror">{errors.position}</p>}
    <br></br>
                        <button type="submit" className="btn btn-success" disabled={Object.values(errors).length > 0}>Agregar </button>
                </Form>
                </div>
        );
        }}
        </Formik>
        
      );
    
}

export default PlayerForm;
