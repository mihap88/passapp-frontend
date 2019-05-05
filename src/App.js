import React from 'react';
import './App.css';
import FirstPage from './FirstPage.js';
import UserPage from './UserPage.js';
import AddAccountPage from './AddAccountPage.js';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'firstPage',
            userName: ''
        };

        this.changePage = this.changePage.bind(this);
        this.changePage2 = this.changePage2.bind(this);
    }

    changePage(userName) {
        this.setState({
            userName: userName,
            page: 'userPage'
        });
    }

    changePage2() {
        this.setState({page: 'addAccountPage'});
    }


        render() {
            return (
                <div>
                    {this.state.page === 'firstPage' && <FirstPage changePage={this.changePage}/>}
                    {this.state.page === 'userPage' && <UserPage changePage={this.changePage2} userName={this.state.userName}/>}
                    {this.state.page === 'addAccountPage' && <AddAccountPage changePage={this.changePage} userName={this.state.userName}/>}
                </div>
            );
        }
}


export default App;
