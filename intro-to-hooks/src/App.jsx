import { useState } from "react";

function App() {
  // let count = 0 // Normal js value whose updated value is not visible re-rended
  const state = useState(12) //  [initial value, state upadating or function]state->useSate(initial value)
  //  console.log("////",state)
  // console.log("//////", state[0])
  // console.log("//////", state[1])
  const [count, setCount] = state
  console.log("App component",count)


  function increment(){
    // count++
    // console.log("increasing count", count)
    // state[0]++
    // state[1](state[0]++)
    // console.log("increasing state", state[0])
    // setCount(count++)
  //     setCount(count+1)
  //   console.log("increasing state", count)
  // setCount(count+1)
  // setCount(count+1)
  // setCount(count+1)
  // console.log("increasing state", count)
  // setCount((prevState) => {
  //   console.log("prevState is", prevState)
  //   console.log("count is", count)
  //   return prevState +1
  // })
  // setCount((prevState) => {
  //   console.log("prevState:-2 is", prevState)
  //   console.log("count:-2 is", count)
  //   return prevState +1
  // })
  // setCount((prevState) => {
  //   console.log("prevState:-3 is", prevState)
  //   console.log("count:-3 is", count)
  //   return prevState +1
  // })
  setCount(prevStat => prevStat + 1)
  setCount(prevStat => prevStat + 1)
  setCount(prevStat => prevStat + 1)
  }
  // function increment2 (){
  //   setCount(count+2)
  //   console.log("increasing state",count)
  // }

  const decrease =  () =>{
    setCount( count == 0 ? 0 : count -1)

    //  if the state is reassigned with the same value then the componentwon't be re-rendered
    // eg: if the state value is 0 and we try to re-assigned 0 again then the component won't be rendered  due to react intelligence. On the other hand if we assign any other value instead
    // of 0 React will re-rendered the component. 
  }
  return (
    <div style={{textAlign:'center'}}>
    <h1>Counter App</h1>
    <br /><br />

    {/* <button onClick={increment2}>Increase by 2</button>
    <br /><br /> */}
    <button onClick={increment}>Increase</button>
    <br /><br />
    <button>{count}</button>
    <br /><br />
    <button onClick={decrease}>Decrease</button>
     </div>
  )
}

export default App
// int.Q.Diff. btn props and state
