import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import Button from "@mui/material/Button";
import first from "../../images/fr"

function hero() {
  return (
    <div className="container-hero">
      <div className="row w-100">
        <section className="col get-started w-50 ">
          <p className="inline">
            <span className="what">What’s new?</span>
            <span className="get ms-2">Get 10% of your next Merch Buy</span>
          </p>

          <h2 className="produce">
            <span style={{ color: "#566BD9" }}>Produce</span> & &nbsp;
            <span style={{ color: "#DBA90F" }}>ship</span> your branded
            materials straight to you and your stakeholders.
          </h2>

          <p>
            We design and produce your company merchandise for your employees,
            customers, partners and events.
          </p>

          <Button className="btn-started" href="#text-buttons">
            Get Started
          </Button>
        </section>

        <section className="col products w-50">
          <div className="row">trh</div>
          <div className="row">nhfm</div>
        </section>
      </div>
    </div>
  );
}

export default hero;
