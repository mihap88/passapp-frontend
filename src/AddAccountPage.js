import React from 'react';
import axios from 'axios';
import './AddAccountPage.css';

class AddAccountPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.addAccount = this.addAccount.bind(this);

    }

    addAccount(e) {
        e.preventDefault();

        let user = document.getElementById('user2').value;
        document.getElementById('user2').value = '';
        let passw = document.getElementById('passw2').value;
        document.getElementById('passw2').value = '';
        let srcName = document.getElementById('siteName').value;
        document.getElementById('siteName').value = '';

        let url = 'http://127.0.0.1:8080/api/addAccount';
        let postData = {
            user: user,
            passw: passw,
            srcName: srcName,
            userName: this.props.userName
        };
        let configData = {};

        axios.post(url, postData, configData)
            .then(response => {
                if (response.data === 'SUCCESS') {
                    this.props.changePage(this.props.userName);
                } else {
                    alert('Sorry, we encountered a problem. Please try again in few minutes');
                }
            })
            .catch( () => {
                alert('error');
            })
    }

    render() {
        return (
            <div className='pageContainer' id='body'>
                <div className='header'>
                </div>

                <div className='inscrie'>
                    <div className='inscrieTitle'>Add a new account</div>

                    <form className='inscrieForm'>
                        <div className='inscrieInputDiv'> User: <input id='user2' className='inscrieInput' /></div>
                        <div className='inscrieInputDiv'> Password: <input id='passw2' className='inscrieInput' /></div>
                        <div className='inscrieInputDiv'> Site Name: <input id='siteName' className='inscrieInput' /></div>
                        <button className='inscrieButton' onClick={this.addAccount}>Add account</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddAccountPage;