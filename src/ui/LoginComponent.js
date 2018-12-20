import React, { Component } from "react";
import LabelTextBox from '../CustomComponents/LabelTextBox.js';
import { Stxtbox, Sbtn, Centerpanel, Wrapper } from '../StyledComponents/StyledCom.js';
class LoginComponent extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      result: ''
    }
    this.btnClickLogin = this.btnClickLogin.bind(this);
  }

  btnClickLogin() {
    console.log('working click');
    const DomainName = 'http://parthiban.somee.com/TestingService/api/Login';

    var withQuery = require('with-query').default;
    const loginServiceURL = withQuery(DomainName, {
      a: this.state.username,
      b: this.state.pwd
    });

    fetch(loginServiceURL)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({ result: data });
        console.log('data', this.state.result);
        //alert(this.state.result);
      })
  }

  getUserName(inputelement) {
    this.setState({
      username: inputelement.target.value
    });
    console.log(this.state.username);
  }

  getPwd(inputelement) {
    this.setState({
      pwd: inputelement.target.value
    });
    console.log(this.state.pwd);
  }

  Testlbltextbox(inputelement) {
    this.setState({
      pwd: inputelement.target.value
    });
    console.log(this.state.pwd);
  }

  render() {
    return (
      <Wrapper style={{ marginTop: 260 + 'px' }}>
        <Centerpanel>
          <div>
            User Name <Stxtbox onChange={this.getUserName.bind(this)} />
          </div>
          <LabelTextBox labeltextboxlabel={'Password'} handleChange={this.Testlbltextbox.bind(this)} />
          <div>
            <Sbtn onClick={this.btnClickLogin}> Click </Sbtn>
          </div>
        </Centerpanel>
      </Wrapper>

    );
  }
}

export default LoginComponent;
