import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends React.Component {
  state = {
    fields: {
      username: '',
      email: '',
      password: '',
    },
  };

  onChange = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = () => {
    console.log(this.state.fields);
  };

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          floatingLabelFixed
          value={this.state.fields.username}
          onChange={e => this.onChange(e)}
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          floatingLabelFixed
          value={this.state.fields.email}
          onChange={e => this.onChange(e)}
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelFixed
          value={this.state.fields.password}
          onChange={e => this.onChange(e)}
        />
        <br />
        <RaisedButton
          label="Submit"
          onClick={() => {
            this.onSubmit();
          }}
          primary
        />
        <br />
      </form>
    );
  }
}

export default Register;
