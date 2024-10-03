import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React from "react";

const FooterMessage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#303846",
    paddingTop: "30px",
  };

  return (
    <div style={containerStyle}>
      <p>
        <Translate
          id="footer.message"
          description="Message inviting users to email suggestions during development"
          values={{
            email: (
              <strong
                style={{ cursor: "pointer", textDecoration: "underline" }}>
                docs@wire.network
              </strong>
            ),
          }}>
          {
            "We welcome the community’s suggestions to help improve our documentation. Feel free to email your input to us at {email}."
          }
        </Translate>
      </p>
    </div>
  );
};

export default FooterMessage;
