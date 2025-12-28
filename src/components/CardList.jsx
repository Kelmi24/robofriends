import React from "react";
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
            { 
                robots.map((user, i) => {
                    return (
                    <Card
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />
                );
                })
            }
        </div>
    );
}

export default CardList;