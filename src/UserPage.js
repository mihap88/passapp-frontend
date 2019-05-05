import React from 'react';
import axios from 'axios';
import './UserPage.css';
import facebook from './facebook.jpg';
import youtube from './youtube.jpg';


class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataVec : [
                {
                    user: 'mihaela.popescu1610@gmail.com',
                    passw: 'mamaMare',
                    srcName: 'facebook'
                },
                {
                    user: 'mihaela.popescu1610@gmail.com',
                    passw: 'mamaMare',
                    srcName: 'youtube'
                }
            ]
        };
        this.imgMap = {
          'facebook': facebook,
          'youtube' : youtube
        };
    }

    componentDidMount() {

        let url = 'http://127.0.0.1:8080/api/getAccounts';
        let getConfig = {
            params: {
                userName: this.props.userName
            }
        };

        axios.get(url, getConfig)
            .then(response => {
                this.setState({
                    dataVec: response.data
                });
            })
            .catch( () => {
                alert('error');
            });
    }

    render() {
        return (
            <div className='pageContainer' id='body'>
                <div className='header'>
                    <button className='addButton' onClick={this.props.changePage}>Add new account</button>
                </div>

                {
                    this.state.dataVec.map( (elem, key) => {
                        return (
                            <div className='element'>
                                <img src={this.imgMap[elem.srcName] ? this.imgMap[elem.srcName] : 'https://bibliotekeroglabyrinter.files.wordpress.com/2011/03/error.png'}  key={key} alt={""} />
                                <div>
                                    <p>{elem.user}</p>
                                    <p>{elem.passw}</p>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        );
    }
}

export default UserPage;