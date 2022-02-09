import React, { useEffect, useState } from "react";
import { useTrail, animated as a } from "react-spring";

const config = { mass: 5, tension: 2000, friction: 200, duration: 500, };

function Springs() {
  const [items, setItems] = useState(["Nesto niste dobro upisali"]);

  const [toggle, setToggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    // opacity: toggle ? 1 : 0,
    x: toggle ? 50 : -100,
    // height: toggle ? 80 : 0,
    from: { opacity: 1, x: -100 },
    // onRest: () => setItems([]),
  });

  useEffect(() => {

    setTimeout(() => {
      setToggle(!toggle);
    }, 2000);

  }, [toggle]);

  return (
    <div className="trails-main" >
      <div>
        {trail.map(({ x, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              width: 400,
              height: 50,
              position: "absolute",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#bbb",
              borderRadius: 10,
              ...rest,
              transform: x.to(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{}}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}
export default Springs