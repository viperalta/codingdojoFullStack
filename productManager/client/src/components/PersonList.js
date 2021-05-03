import React from 'react';

const PersonList = (props) => {
    return (
        <div>

            {props.people.map((person,index)=>{
                return <p key={index}> {person.lastName},{person.firstName} </p>
            })}
        </div>
    );
}

export default PersonList;
