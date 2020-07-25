import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import TimeKeeper from 'react-timekeeper';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

const ReactTimekeeper = () => {
  const [time, setTime] = useState('12:34pm');

  const onChange = time => {
    setTime(time);
  };

  return (
    <div>
      <TimeKeeper
        time={time}
        onChange={(data) => setTime(data.formatted12)}
      />
      <span>Time is {time}</span>
    </div>
  );
};

render(<ReactTimekeeper />, document.querySelector("#root"));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
