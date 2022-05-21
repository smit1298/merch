import React from 'react'
import Benefits from './Benefits';

function Benefit() {
  return (
    <div>
      <section className="trusted-brands container">
        {data.map((item) => {
          return <Benefits key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
}

export default Benefit