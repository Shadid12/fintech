import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './css/home.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            disabled: true,
            loading: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.disabled = !(nextState.email && nextState.pass);
    }

    loginClick() {
        console.log(this.state.email, this.state.pass);
    }

    handleChange(e) {
        this.setState({email: e.target.value});
        if(this.state.email && this.state.pass) {
            this.setState({ disabled: false })
        }
    }

    handlePass(e) {
        this.setState({pass: e.target.value});
        if(this.state.email && this.state.pass) {
            this.setState({ disabled: false })
        }
    }

    render() {


        return (
            <div className='container'>
                <div className='top'></div>
                <div className='card'>
                    <MuiThemeProvider>
                        <Card >
                            <div className='wrapper'>
                                <TextField
                                    hintText="Email"
                                    value={this.state.email} onChange={this.handleChange}
                                /><br/>
                                <TextField
                                    hintText="Password"
                                    type="password"
                                    value={this.state.pass} onChange={this.handlePass}
                                /><br/>
                                <div className='login-btn'>
                                    <RaisedButton label="Login" primary={true}
                                                  disabled={this.state.disabled}
                                                  onClick={this.loginClick}/>
                                </div>
                            </div>
                        </Card>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default Home;