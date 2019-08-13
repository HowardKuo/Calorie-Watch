import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import { withFirebase } from '../Firebase';
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

  return (
    <MDBContainer>
      <MDBBtn outline color="dark" onClick={this.toggle}>Get Started</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Sign Up</MDBModalHeader>
        <MDBModalBody>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <form>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Your name
                            </label>
                            <input
                            name="username"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            placeholder="Full Name" 
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Your email
                            </label>
                            <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                            placeholder="Email Address"
                            />
                            <br />
                            <label
                            htmlFor="defaultFormRegisterConfirmEx"
                            className="grey-text"
                            >
                            Your Password
                            </label>
                            <input
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password"
                            id="defaultFormRegisterConfirmEx"
                            className="form-control"
                            placeholder="Password"
                            />
                            <br />
                            <label
                            htmlFor="defaultFormRegisterPasswordEx"
                            className="grey-text"
                            >
                            Confirm Password
                            </label>
                            <input
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            placeholder="Confirm Password"
                            />
                            <div className="text-center mt-4">
                            <MDBBtn disabled={isInvalid} color="info" type="submit" onClick={this.toggle}>
                                Register
                            </MDBBtn>
                            {error && <p>{error.message}</p>}
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        </MDBModalBody>
        
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default RegisterModal;
