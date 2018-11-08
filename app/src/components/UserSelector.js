import React from 'react';
import { Card, List } from 'semantic-ui-react';

import { connect } from 'react-redux';

function UserSelector (props) {
    let handleItemClick = (e, data) => {
        alert('' + data.uuid);
    }

    let items = [<List.Item uuid='1'> Ola </List.Item>, <List.Item uuid='2'> Amigo </List.Item>];

    return (
        <Card fluid raised>
            <Card.Content>
                <Card.Header>Select User to Call</Card.Header>
            </Card.Content>
            <Card.Content>
                <List animated divided selection items={items} onItemClick={handleItemClick} />
            </Card.Content>
        </Card>
    )
}

const mapStateToProps = store => ({
    onlineUsersList: store.onlineUsersList,
});

export default connect (mapStateToProps)(UserSelector);