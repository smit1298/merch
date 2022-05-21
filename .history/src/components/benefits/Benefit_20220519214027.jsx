import React from 'react'
import Benefits from './Benefits';
import order from './Order';

function Benefit(props) {
  return (
    <div>
      <section >
        {order.map((item) => {
          return <Benefits key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
}

export default Benefit