import React, { useState, useEffect } from 'react';
import useSignalConnection from './util/useSignalConnection';
import useVideoCall from './util/useVideoCall';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { If } from 'react-extras';
import { Grid } from 'semantic-ui-react';
import Header from './components/Header';
import LocalVideo from './components/LocalVideo';
import RemoteVideo from './components/RemoteVideo';
import StartupModal from './components/StartupModal';

import { useDispatch, useMappedState } from 'redux-react-hook';
import connectionActions from './actions/connectionActions';
import uiActions from './actions/uiActions';

const mapState = store => ({
  name: store.connection.name,
  to: store.connection.to,
  from: store.connection.from,
});

export default function App () {
  const { name, to, from } = useMappedState(mapState);
  const dispatch = useDispatch();

  const signal = useSignalConnection('ws://localhost:8000/');
  const videoCall = useVideoCall({
    signal,
  });

  // Start peer connection.
  useEffect(_ => {
    if(to) {
      videoCall.initiate(to);
    } else if(videoCall.remote) {
      dispatch(connectionActions.SET_FROM(videoCall.remote));
    }
  }, [to, videoCall.remote]);

  console.log('render');

  // Setup
  signal.on('list', ({ list }) => {
    dispatch(uiActions.SET_USER_LIST(list));
  });
  
  signal.on('calling', ({ from }) => {
    dispatch(connectionActions.SET_FROM(from));
  });
  
  signal.on('id', ({ id }) => {
    dispatch(connectionActions.SET_ID(id));
  });
  
  signal.on('signal', videoCall.gotSignalMessage);

  // Final application
  return (
    <div className="App">
      <If condition={!name}>
        <StartupModal />
      </If>
      
      <div className="AppContent">
        <Header />
        <Grid columns="2" divided stackable>
          <LocalVideo stream={videoCall.localStream} />
          <RemoteVideo stream={videoCall.remoteStream} />
        </Grid>
      </div>
    </div>
  );

}
