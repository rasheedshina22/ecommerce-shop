import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const baseUrl = 'http://localhost:5000';

const MessagesScreen = () => {
  const socket = useRef();

  //socket connection
  useEffect(() => {
    //if the socket is nit connected, connect
    if (!socket.current) {
      socket.current = io(baseUrl);
    }

    //if the socket is connected
    if (socket.current) {
      socket.current.emit('hello', { name: 'shina', age: 'opeyemi rasheed' });
    }

    //what does the return (cleanup) do?
    return () => {
      if (socket.current) {
        // socket.current.emit('disconnect');
        socket.current.off();
      }
    };
  }, []);
  return <div>MessagesScreen</div>;
};

export default MessagesScreen;
