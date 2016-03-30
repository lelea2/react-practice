import React from "react";

export default class Footer extends React.Component {
  render() {
    //style
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Khanh</p>
          </div>
        </div>
      </footer>
    );
  }
}
