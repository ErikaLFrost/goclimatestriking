import React from 'react';

export default () => (
  <div>
    <h1>This is not the page you are looking for.</h1>
    <p>
      You are probably looking for the api and forgot to set the request headers
      to only accept json. <br />
      This can be solved in a few ways If you accept text/html the frontend will
      respond.
      <ul style={{ listStyle: 'disc', padding: '30px' }}>
        <li>did you forget to start the backend?</li>
        <li>make sure request headers `Accept` is not `text/html`</li>
        <li>change request port from 3000 to 3001 while testing</li>
      </ul>
    </p>
  </div>
);
