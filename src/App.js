
import './App.css';
import Card from './components/card'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// 

import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Modal from '@mui/material/Modal'
class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen:true})
  }

  render () {
    return (
      <React.Fragment>
        <ModalVideo style={{margin:200, height:'80vh', width:'80vw', justifyContent: 'center', alignItems: 'center'}} channel='youtube' isOpen={this.state.isOpen} videoId='9ZEURntrQOg' onClose={() => this.setState({isOpen: false})} />
        {/* <Modal open={this.isOpen} onClose={() => this.setState(false)} >
          <>
          <iframe src='https://www.youtube.com/watch?v=9ZEURntrQOg'> </iframe>
          { this.isOpen? <div onclick={()=>{}} >X close</div>: <></> }
          </>
        </Modal> */}
        
        <button onClick={this.openModal}>
          
        </button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
        <button onClick={this.openModal} style={{margin:30}}><Card /></button>
      </React.Fragment>
    )
  }
}



export default App;
