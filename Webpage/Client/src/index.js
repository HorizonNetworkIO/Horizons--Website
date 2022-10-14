import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export var appRef = React.createRef();

class Index extends React.Component {
  // componentDidMount() {
  //   document.title = 'HorizonNetwork.io';
  // }

  render() {
    return (
      <React.StrictMode>
        <App ref={appRef} />
      </React.StrictMode>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);