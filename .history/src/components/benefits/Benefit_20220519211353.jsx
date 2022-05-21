import React from 'react'

function Benefit() {
  return (
    <div>
      <section className="trusted-brands container">
        {data.map((item) => {
          return <Bene key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
}

export default Benefit