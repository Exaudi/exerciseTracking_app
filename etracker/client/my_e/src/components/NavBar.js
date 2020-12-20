import react, {Component} from 'react';
import "../styles/navBar.scss"
import {Link} from 'react-router-dom';

export default class navbar extends Component{

    render(){
        return(
            <div className='navbar'>
                <Link to="/">Exercise Tracker</Link>
                <div className='navbar__item'>
                   <Link to="/exercise"><li className='navbar__item--1'>Exercises</li></Link>
                   <Link to="/create"><li className='navbar__item--1'>Create Exercises</li></Link>
                   <Link to="/user"><li className='navbar__item--1'>Create User</li></Link>
                </div>

                
            </div>
        )
    }
}