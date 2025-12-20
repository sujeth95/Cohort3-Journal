import { useState } from "react";

function App() {
  //props
  return (
    <div style={{background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
      {/* <Greeting name={"raman"} /> */}
    </div>
  )
}


const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // defining a new state variable
  // when the value of a state variable changes,
  // the component that uses the state variables re-renders.

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }
// function PostComponent({name, subtitle, time, image, description}) {
//   return <div style={style}>
//     <div style={{display: "flex"}}>
//       <img src={image} style={{
//         width: 30,
//         height: 30,
//         borderRadius: 20
//       }} />
//       <div style={{fontSize: 10, marginLeft: 10}}>
//         <b>
//           {name}
//         </b>
//         <div>{subtitle}</div>
//         {(time !== undefined ? <div></div>)}
//       </div>
//     </div>
//   </div>
// }

{/* <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            <PostComponent 
              name={"harkirat"}
              subtitle={"20 followers"}
              time={"2m ago"}
              images={"https://app.100xdevs.com/favicon.ico"}
              description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
            />
            <br />
          </div>
          <div>
            <PostComponent 
              name={"raman"}
              subtitle={"Promoted"}
              image={"https://app.100xdevs.com/favicon.ico"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I followd to get a job"}
            />
            <br />
          </div>
        </div>
      </div> */}
export default App