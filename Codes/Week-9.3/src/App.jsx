
function App() {


  return (
    <div style={{ background: "#f7f1e3", height: "100vh" }}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
        <div><PostComponent /></div>
        <div><PostComponent /></div>
        <div><PostComponent /></div>
        </div>
      </div>
    </div>
  )
}
// To handle your website with multiple developers -> structuring your app into components
// Defining a state of your application

// In javascript objects, you cannot have dash(-) in the middle.
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostComponent() {
  // NOTE: In react everytime you pass an atribute, you need to keep it in {} brackets
  return <div style={style}>
    <div style={{ display: "flex" }}>
      <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{
        width: 40,
        height: 40,
        borderRadius: 20
      }} />
      <div style={{ fontSize: 10, marginLeft: 10 }}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style={{ fontSize: 12 }}>
      What to know how to win big? Check out how these folks won $6000 in bouties.
    </div>
  </div>
}

export default App