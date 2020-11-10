import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import View from './view';
import Insert from './insert';
import Edit from './edit';
// import Home from './home';

export default class Navbar extends Component {

  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
      // const { activeItem } = this.state
        return (
            <div style={{marginTop:20,marginLeft:8,marginRight:8}}>
            <Router>
              <Menu >
                <Container>
                {/* <Menu.Item 
                  //  name='home'
                  //  active={activeItem === 'home'}
                  //  onClick={this.handleItemClick}
                >
                     <Link to={'/'}  className="nav-link">Home</Link>
                </Menu.Item> */}
                <Menu.Item
                 
                //  name='view'
                //  active={activeItem === 'view'}
                //  onClick={this.handleItemClick}

                >
                     <Link to={'/view'} className="nav-link">View</Link>
                </Menu.Item>
                <Menu.Item
                   
                  //  name='insert'
                  //  active={activeItem === 'insert'}
                  //  onClick={this.handleItemClick}

                >
                     <Link to={'/insert'} className="nav-link">Insert</Link>
                </Menu.Item>
                 
             
                    {/* <Menu.Menu position="right">
                    <Menu.Item>
                     <Link to={'/login'} className="nav-link">Login</Link>
                    </Menu.Item>
                    <Menu.Item>
                     <Link to={'/signup'} className="nav-link">Signup</Link>
                    </Menu.Item>
                   
                  </Menu.Menu> */}
                </Container>
              </Menu>
              <Switch>
              {/* <Route exact path='/' component={Home} /> */}
              {/* <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} /> */}
              <Route exact path='/view' component={View} />
              <Route exact path='/insert' component={Insert} />
              <Route exact path='/edit/:id' component={Edit} />
             
              </Switch>
              </Router>
              </div>
        )
    }
}
