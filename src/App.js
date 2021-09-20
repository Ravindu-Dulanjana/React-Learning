import Count from "./Count";
import React, { createContext, useReducer } from 'react'
import Massage from "./Massage";
import Parent from "./Parent";
import List from "./List";
import Form from "./Form";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import Fetch from "./Fetch";
import ComponentA from "./ComponentA";
import CounterOne from "./components/CounterOne";
import CountTwo from "./components/CountTwo";
import { useContext } from "react/cjs/react.development";
import FetchData from "./components/FetchData";
import ClassTimer from "./components/ClassTimer";
import HookCounterRef from "./components/HookCounterRef";
import CustomHook from "./components/CustomHook";


export const userContext = React.createContext();
export const channelContext = React.createContext();

export const counterContext = React.createContext();



const initialState = 0;

const reducer = (state, action) => {

    switch(action){
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }


} 

function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* count - {count} */}
      {/* <Massage/> */}
      {/* <Count last='dulanjana'/> */}
      {/* <Parent/> */}
      {/* <List /> */}
      {/* <Form/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterThree/> */}
      {/* <Fetch/> */}

      {/* <userContext.Provider value={'Ravindu'}>
        <channelContext.Provider value={'AlphaCeph'}>

           <ComponentA/>

        </channelContext.Provider>
          
      </userContext.Provider> */}

      {/* <CounterOne/>
      <CountTwo/> */}
      {/* <counterContext.Provider value={{countState: count , counterDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider> */}

      {/* <FetchData/> */}
      {/* <ClassTimer/> */}
      {/* <HookCounterRef/> */}
      <CustomHook/>
    </div>
  );
}

export default App;
