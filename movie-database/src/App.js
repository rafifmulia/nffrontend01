// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// bawaan reactjs
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "1rem"}}>Task Pertemuan 04</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
