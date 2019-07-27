import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <p>
              
            </p>
          </MDBCol>
          <MDBCol md="6">
            <br/>
            <br/>
          </MDBCol>
        </MDBRow>
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> CalorieCounter.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;