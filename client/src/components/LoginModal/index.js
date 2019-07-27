import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

class ModalPage extends Component {
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
      <MDBBtn color="info" onClick={this.toggle}>Sign in</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Sign In</MDBModalHeader>
        <MDBModalBody>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                    <form>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                        Your email
                        </label>
                        <input
                        type="email"
                        id="defaultFormLoginEmailEx"
                        className="form-control"
                        />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                        Your password
                        </label>
                        <input
                        type="password"
                        id="defaultFormLoginPasswordEx"
                        className="form-control"
                        />
                        <div className="text-center mt-4">
                        <MDBBtn href="../user" color="info" type="submit" onClick={this.toggle}>Login</MDBBtn>
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

export default ModalPage;
