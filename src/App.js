import {Component} from 'react'
import {Routes, Route ,Link} from 'react-router'
import { FaExternalLinkAlt } from 'react-icons/fa';
import Header from './Components/Header'
import Platfrom from './Components/Platform';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import './App.css';
import ReactContext from './ReactContext';
import Home from './Components/Home'
import Python from './Components/Python';
import ApiRequest from './Components/ApiRequest';
import Guides from './Components/Guides';
import Tutorials from './Components/Tutorials';


class App extends Component{
  state = {
    quickState:false, 
    active:'home',
    themeValue:'light',
  }

  changeTheme = themeValue =>{
    this.setState({themeValue})
  }

  onclickhome = () =>{
    this.setState({active:'home'})
  }

  onclickplatform = () =>{
    this.setState({active:'platform'})
  }

  onclickquickstart = () =>{
    this.setState(prevState=>({quickState:!prevState.quickState,active:'quickStart'}))
  }

  onclickpython = () =>{
    this.setState({active:'python'})
  }
 
  onclickapi = () =>{
    this.setState({active:'api'})
  }
  onclicktutorials = () =>{
    this.setState({active:'tutorials'})
  }
  onclickguide = () =>{
    this.setState({active:'guide'})
  }

  getSideBar = () => {
    const {quickState,active,themeValue} = this.state
    return(
    <div className={themeValue === 'light' ?'side-bar-container-main-app':"side-bar-container-main-app side-bar-container-main-app-one"}>
    <Link 
      to='/' 
      onClick={this.onclickhome} 
      className={
        active ==='home'  ? 
        'active-tab side-menu-items' : 
        'side-menu-items'} >
          Home
    </Link>
    <Link 
      to='platform' 
      onClick={this.onclickplatform}  
      className={
        active=== 'platform' ?
        ' inside-quickstart-element active-tab-one':
        'link-element inside-quickstart-element'}>
          Platform overview
    </Link>
    <hr className='mid-line-side-bar'/>
    <ul className='ul-elements-app'>
      <li className='list-tpe'>
        <button  
            className={
              active ==='quickStart' || 
              active === 'python' || 
              active === 'swift' || 
              active === 'api' ?  
              'active-tab-one quickstart-main' : 
              'quickstart-main'
            } 
            onClick={this.onclickquickstart}>
              Quickstart 
              {quickState === true?
              <span style={{fontSize:'20px'}}><MdKeyboardArrowDown  className='app-arrow'/></span>:
              <MdKeyboardArrowRight style={{fontSize:'20px'}}  className='app-arrow'/>
              }</button>
        {quickState ? 
        <ul className='inside-quickstart-app ul-elements-app'>
          <li className={active ==='python'? 'active-tab-list':'list-element'}  onClick={this.onclickpython} >
          <Link 
            to='/python' 
            className={
              active === 'python' ?  
              'active-tab-one active-tab-list link-element inside-quickstart-element' : 
              'link-element inside-quickstart-element'
            }>
              Python
          </Link>
          </li>
          <li className={active ==='api'? 'active-tab-list':'list-element'} onClick={this.onclickapi}>
          <Link  
                to='/API-request' 
                className={
                  active === 'api' ?  
                  'active-tab-one active-tab-list link-element inside-quickstart-element' : 
                  'link-element inside-quickstart-element'
                }>
                  API requests
          </Link>
          </li>
        </ul> :null
      }
      </li>
      <li className={active ==='tutorials'? 'active-tab-list':'list-element'} onClick={this.onclicktutorials}>
        <Link 
          to='/tutorials' 
          className={
            active === 'tutorials' ?  
            'active-tab-one link-element ' : 
            'link-element'
            }>
            Tutorials
        </Link>
      </li>
      <li className={active ==='guide'? 'active-tab-list':'list-element'} onClick={this.onclickguide}>
        <Link 
            to='/guides' 
            className={
              active === 'guide' ?    
              'active-tab-one  link-element' : 
              'link-element'}>
                Guides
        </Link>
      </li>
    </ul>
    </div>
   ) 
  }

  getFooterSection = () =>(
    <footer className='footer-section'>
        <div>
            <h1 className='footer-header'>Docs</h1>
            <p className='footer-element'>Tutorials</p>
            <p className='footer-element'>Concepts</p>
            <p className='footer-element'>Studio guides</p>
            <p className='footer-element'>Resources</p>
        </div>
        <div>
            <h1 className='footer-header'>Quickstart</h1>
            <p className='footer-element'>Python</p>
            <p className='footer-element'>Swift</p>
            <p className='footer-element'>API requests</p>                                                          
        </div>
        <div>
            <h1 className='footer-header'>API reference</h1>
            <p className='footer-element'>Python</p>
            <p className='footer-element'>Swift</p>
        </div>
        <div>
            <h1 className='footer-header'>Community</h1>
            <p className='footer-element'>Discord<FaExternalLinkAlt className="icon-element-header"/></p>
            <p className='footer-element'>LinkedIn<FaExternalLinkAlt className="icon-element-header"/></p>
            <p className='footer-element'>Twitter<FaExternalLinkAlt className="icon-element-header"/></p>
            <p className='footer-element'>Youtube<FaExternalLinkAlt className="icon-element-header"/></p>
        </div>
        <div>
            <h1 className='footer-header'>More</h1>
            <p className='footer-element'>GitHub<FaExternalLinkAlt className="icon-element-header"/></p>
        </div>
    </footer>
  )

  render(){
    const {themeValue} = this.state
    return (
      <ReactContext.Provider
        value = {{themeValue , changeTheme:this.changeTheme}} >
    <div>
    <div style={{position:'sticky', top:'0',background:'grey'}}>
      <Header/>
      </div>
    <div className={themeValue === 'light'? 'app-main-container':'app-main-container-two'}>
      <div className='main-container-app'>
       {this.getSideBar()}
        <div className='sec-container-app'>
          <div className='home-nav-main-app'>
            <IoMdHome className={themeValue==='light'?'home-icon-home':'home-icon-home home-icon-home-one'}/>
            <p className={themeValue==='light'?'arrowlight':'arrowlight arrowlight-one'}>{' > '} <span className={themeValue==='light'?'nav-home-app-main':'nav-home-app-main nav-home-app-main-one'}>Home</span></p>
          </div>
          <div className='main-routing-contianer'>
          <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/platform' element={<Platfrom/>}/>
                <Route exact path='/python' element={<Python/>} />
                <Route exact path="/api-request" element={<ApiRequest/>}/>
                <Route exact path="/tutorials" element={<Tutorials/>}/>
                <Route exact path="/guides" element={<Guides/>}/>
          </Routes>
          </div>
        </div>
      </div>
      {this.getFooterSection()}
    </div>
    </div>
    </ReactContext.Provider>
  )
}
}
export default App;
