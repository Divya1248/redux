// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Increment, Decrement, Reset } from './Redux/action/action';


// const App = () => {
//     let dispatch = useDispatch();
//     let value = useSelector(state =>state);
//     console.log(value);
//     let { CounterReducer } = value;
//     return (
//       <div>
//         <h1>{CounterReducer}</h1>
//         <button onClick={() => dispatch(Increment())}>Increment</button>
//         <button onClick={() => dispatch(Decrement())}>Decrement</button>
//         <button onClick={() => dispatch(Reset())}>Reset</button>
//       </div>
//     );
// }

// export default App



// Redux
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addpost } from './CRUD redux/action/action'

const App = () => {
    let dispatch = useDispatch();
    // let value = useSelector(state => state)
    // console.log(state)
    // let {Addpost} = value
    return (
        <div>
          <h1>hello</h1> 
        </div>
    )
}

export default App

