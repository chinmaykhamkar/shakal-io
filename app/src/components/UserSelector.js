import React, { useState } from 'react';

import { Card, List } from 'semantic-ui-react';

import { useDispatch, useMappedState } from 'redux-react-hook';
import connectionActions from '../actions/connectionActions';

const mapState = store => ({
    userId: store.connection.id,
    serverConnection: store.connection.serverConnection,
    to: store.connection.to,
});

export default function UserSelector({ list, disabled }) {
    const { userId, serverConnection, to } = useMappedState(mapState);
    const dispatch = useDispatch();

    let handleItemClick = (e, data) => {
        const to = data.uuid;
        serverConnection.send({
            type: 'call',
            to,
        });
        dispatch(connectionActions.SET_TO(to));
    }

    let i = 0;
    const toListItem = e => (
        <List.Item 
            key={i++}
            uuid={e.id}
            disabled={to === e.id}
            > 
            {e.name ? e.name : e.id} 
        </List.Item>);
    
    let items = list
                .filter(e => e.id !== userId)
                .map(toListItem);
    console.log(JSON.stringify(items))

    return (
        <Card fluid raised className='animated bounceInDown'>
            <Card.Content>
                <Card.Header>Select User to Call</Card.Header>
            </Card.Content>
            <Card.Content>
                <List animated divided selection={disabled} items={items} onItemClick={handleItemClick} />
            </Card.Content>
        </Card>
    )
}
