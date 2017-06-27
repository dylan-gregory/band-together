import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserLogin extends Component {
  render() {
    return (
      <div>
        <form>
          <TextField hintText="josh@gmail.com" floatingLabelText="Email" />
          <br />
          <TextField hintText="Anything BUT 'password'" floatingLabelText="Password" />
          <br />
          <RaisedButton label="Sign In" secondary={true} />
        </form>

        <div>
          First time here?
        </div>
        <form>
          <TextField hintText="josh@gmail.com" floatingLabelText="Email" />
          <br />
          <TextField hintText="Anything BUT 'password'" floatingLabelText="Password" />
          <br />
          <RaisedButton label="Sign In" secondary={true} />
        </form>
      </div>
    );
  }
}

export default UserLogin;
