import { useState } from "react"

// const app=()=>{
//   const [count, setCount] = useState(0)
//   const changeCount = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <button onClick={()=>changeCount()}> value count</button>
//     </div>
//   )
// }

// export default App;

// import { useState } from "react"

// const App=()=>{
//   const [count, setCount] = useState(0)
//   const changeCount = () => {
//     setCount(count + 1)
//   } 
//   return (
//     <div>
//       <button onClick={()=>changeCount()}>value count {count}</button>
//     </div>
//   )
// }

// const App = () => {

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log(e)
//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
//  }

// export default App

const App = () => {
  const [username, setusername] = useState("Jhon")
  const [names, setNames] = useState(["Jhon"])

  const SubmitHandler = (e) => {
    e.preventDefault()
    
    const copynames = [...names]
    copynames.push(username)
    setNames(copynames)

    // setusername([...username,username  ]);
    setusername("")

  }

 

  return (
    
  

<div>
<form action="">
   <input type="text"
    placeholder="name"
    onChange={(e) => setusername(e.target.value)}
    value={username} />
    <button>Submit</button>
 </form>
</div>
  )

};

export default App

