import React from 'react';
import NavBar from './components/NavBar';
import Encontra from './components/Encontra';
import Ideas from './components/Ideas';

export default function App() {
  return (<>

    <style type="text/css">{`
      @media (min-width: 992px) {
        .myContainer {
          max-width: 1027px;
          margin-left: auto;
          margin-right: auto;
        }
      }
      @media only screen and (max-width: 950px) {
        .noneForSmallScreen {
          display: none;
        }
      }
      @media only screen and (min-width: 950px) {
        .noneForLargeScreen {
          display: none;
        }
      }
    `}</style>

    <NavBar />

    <div className='myContainer'>
      <Encontra />
      <Ideas />
    </div>

  </>);
}