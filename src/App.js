//import logo from './logo.svg';
import './App.css';
import React from 'react';

var styles={color:'red'}
var styles2={color:'yellow'}

var Header=React.createClass({
render :function (){
  return(
    <div><h3>{this.props.name}</h3><h2>This is Header Component</h2></div>
  );
}
});
var Footer=React.createClass({
  getInitialState :function(){
    return {
      user: 'HCL',
      id:'101'
    }
  },
  render :function (){
    return(
      <div>
      <h1>User is:{this.state.user}
      <br/>ID is :{this.state.id}</h1>
          <h2>This is Footer Component</h2>

      </div>
    );
  }
  });
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <div style={styles}>
        <h1>Web developer</h1>
        </div>
       <h3 style={styles2}>Hello HCL</h3>
        <h3>Sum is :{4+9}</h3>
      <Header name ="Sonu"/>
      <Header name ="Titu"/>

      <Footer/>
      </header>
  
    </div>
  );
}

export default App;
