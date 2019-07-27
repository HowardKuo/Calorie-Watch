import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

class RegisterForm extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
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
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Your email
                            </label>
                            <input
                            type="email"
                            id="defaultFormRegisterEmailEx"
                            className="form-control"
                            />
                            <br />
                            <label
                            htmlFor="defaultFormRegisterConfirmEx"
                            className="grey-text"
                            >
                            Confirm your email
                            </label>
                            <input
                            type="email"
                            id="defaultFormRegisterConfirmEx"
                            className="form-control"
                            />
                            <br />
                            <label
                            htmlFor="defaultFormRegisterPasswordEx"
                            className="grey-text"
                            >
                            Your password
                            </label>
                            <input
                            type="password"
                            id="defaultFormRegisterPasswordEx"
                            className="form-control"
                            />
                            <div className="text-center mt-4">
                            <MDBBtn color="info" type="submit" onClick={this.toggle}>
                                Register
                            </MDBBtn>
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

export default RegisterForm;
