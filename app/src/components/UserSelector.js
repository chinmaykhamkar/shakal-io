import React, { useEffect } from 'react';

import { Card, List } from 'semantic-ui-react';

import { useDispatch, useMappedState } from 'redux-react-hook';
import connectionActions from '../actions/connectionActions';

const mapState = store => ({
    userId: store.connection.id,
    signal: store.connection.signal,
    to: store.connection.to,
    isOpen: store.ui.openUsersList,
    usersList: store.ui.onlineUsersList,
});

export default function UserSelector({ disabled }) {
    const { userId, signal, to, isOpen, usersList } = useMappedState(mapState);
    const dispatch = useDispatch();

    const handleItemClick = (e, data) => {
        const to = data.uuid;
        signal.send({
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
    
    let items = usersList
                .filter(e => e.id !== userId)
                .map(toListItem);
    items.forEach(console.log);

    return (
        <Card hidden={isOpen} fluid raised className='animated bounceInDown'>
            <Card.Content>
                <Card.Header>Select User to Call</Card.Header>
            </Card.Content>
            <Card.Content>
                <List animated divided selection={disabled} items={items} onItemClick={handleItemClick} />
            </Card.Content>
        </Card>
    )
}
