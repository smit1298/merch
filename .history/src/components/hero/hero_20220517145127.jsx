import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './hero.css'

function hero() {
  return (
    <div className="container-hero">
      <div className="row">
        <section className="col get-started ">
          <span>
            <p>What’s new?</p>
            <p>Get 10% of your next Merch Buy</p>
          </span>

          <h2 >
            <span style={{ color: "#566BD9"}}>Produce</span> & &nbsp;
            <span style={{ color: "#DBA90F"}}>ship</span> your branded
            materials straight to you and your stakeholders.
          </h2>
          <p>
            We design and produce your company merchandise for your employees,
            customers, partners and events.
          </p>
        </section>
        <section className="col products">fjlbj</section>
      </div>
    </div>
  );
}

export default hero;
