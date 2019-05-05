import React from 'react';
import axios from 'axios';
import './FirstPage.css';

class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.addUser = this.addUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    addUser(e) {
        e.preventDefault();
        debugger;
        let firstName = document.getElementById('firstName').value;
        document.getElementById('firstName').value = '';
        let lastName = document.getElementById('lastName').value;
        document.getElementById('lastName').value = '';
        let userName = document.getElementById('userName').value;
        document.getElementById('userName').value = '';
        let password = document.getElementById('password').value;
        document.getElementById('password').value = '';

        if (!password || !userName) {
            alert('Please add credentials');
            return;
        }

        let url = 'http://127.0.0.1:8080/api/createUser';
        let postData = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
        };
        let postConfig = {};

        axios.post(url, postData, postConfig)
            .then( response => {
                if (response.data === 'SUCCESS') {
                    alert('User Successfully created');
                } else {
                    alert('Username already exists');
                }
            })
            .catch( () => {
                alert('error');
            });
    }

    loginUser(e) {

        e.preventDefault();

        let user = document.getElementById('user').value;
        document.getElementById('user').value = '';
        let pass = document.getElementById('pass').value;
        document.getElementById('pass').value = '';

        let url = 'http://127.0.0.1:8080/api/login';
        let getConfig = {
            params: {
                userName: user,
                password: pass
            }
        };

        axios.get(url, getConfig)
            .then( response => {
                if (response.data === 'SUCCESS') {
                    this.props.changePage(user);
                } else if (response.data === 'PASSWORD') {
                    alert('Wrong password');
                } else if (response.data === 'USERNAME') {
                    alert('User doesn\'t exist ');
                }
            })
            .catch( () => {
                alert('error');
            });
    }

    render() {
        return (
            <div className='pageContainer' id='body'>
                <div className='header'>
                    <form className='form'>
                        UserName: <input id="user" className='input' />
                        Password: <input id="pass" className='input' type='password' />
                        <button className='loginButton' onClick={this.loginUser}>Login</button>
                    </form>
                </div>
                <div className='title'>
                    Welcome to our password manager!
                </div>
                <div className='inscrie'>
                    <div className='inscrieTitle'>Not signed up yet?</div>

                    <form className='inscrieForm'>
                        <div className='inscrieInputDiv'> First Name*: <input id={'firstName'} className='inscrieInput' /></div>
                        <div className='inscrieInputDiv'> Last Name*: <input id={'lastName'} className='inscrieInput' /></div>
                        <div className='inscrieInputDiv'> User Name*: <input id={'userName'} className='inscrieInput' /></div>
                        <div className='inscrieInputDiv'> Password*: <input id={'password'} className='inscrieInput' type='password'/></div>
                        <button className='inscrieButton' onClick={this.addUser}>Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default FirstPage;