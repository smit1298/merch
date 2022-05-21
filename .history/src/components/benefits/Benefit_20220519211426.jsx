import React from 'react'
import Benefits from './Benefits';

function Benefit() {
  return (
    <div>
      <section className="trusted-brands container">
        {order.map((item) => {
          return <Benefits key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
}

export default Benefit