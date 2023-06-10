// import { useState } from "react";
import ReactDOM from 'react-dom';
import { Overlay } from './style';

export default function Loader() {
  // const [loader, setLoader] = useState(false);

  // function Loading() {
  //   setLoader();
  // }

  return ReactDOM.createPortal(
    <Overlay>
      <div className='loader' />
      Hello World
    </Overlay>,
    document.getElementById('loader-root'),

  );
}
