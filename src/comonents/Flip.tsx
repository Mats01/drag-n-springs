import React, { useEffect, useState } from "react";
import { animated as a, useSpring } from "react-spring";



function Flip() {

  const [toggle, setToggle] = useState(true);


  // all letters of the alphabet
  const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const [letter, setLetter] = useState(0);

  const { x } = useSpring({
    from: { x: 0 },
    x: toggle ? 0 : 180,
    config: { mass: 4, tension: 100, friction: 12, },
  })


  useEffect(() => {

    setTimeout(() => {
      setTimeout(() => {
        if (letter === letters.length - 1) {
          setLetter(0);
        } else {
          setLetter(letter + 1);
        }
      }, 200);
      setToggle(!toggle);
    }, 2000);

  }, [toggle]);

  return (
    <div className="trails-main" >
      <div style={{
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height: '100vh',
      }}>
        <div>
          <a.div
            className="trails-text"
            style={{
              width: 150,
              height: 150,
              backfaceVisibility: 'visible',
              border: '4px solid hsl(0,0%,55%)',
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "hsla(105, 90%, 50%, 1)",
              fontSize: "3rem",
              fontWeight: "bold",
              color: 'hsla(0,0%,35%,1)',
              boxShadow: x.to(v => `${v > 90 ? 20 : 0}px ${v > 90 ? 10 : 0}px ${v <= 90 ? 0 : Math.abs(v - 90) / 3}px hsla(0,0%,0%,0.5)`),
              transform: x.to((x) => `perspective(600px) scale(1,-1) rotateX(${-x}deg)`),
              // transform: x.to(x => `rotate3d(1, 0, 0, ${ x }deg)`)
            }}
          >
            {letters[letter]}
          </a.div>
          <a.div
            className="trails-text"
            style={{
              width: 150,
              height: 150,
              backfaceVisibility: 'hidden',
              border: '4px solid hsl(0,0%,55%)',
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "hsla(65, 90%, 50%, 1)",
              fontSize: "3rem",
              fontWeight: "bold",
              color: 'hsla(0,0%,35%,1)',
              boxShadow: x.to(v => `${v < 90 ? 20 : 0}px ${v < 90 ? 10 : 0}px ${v >= 90 ? 0 : Math.abs(v - 90) / 3}px hsla(0,0%,0%,0.5)`),
              transform: x.to((x) => `perspective(600px)  rotateX(${x}deg)`),
              marginTop: -158,
              // transform: x.to(x => `rotate3d(1, 0, 0, ${ x }deg)`)
            }}
          >
            {letters[letter]}
          </a.div>
        </div>
      </div>
    </div>
  );
}
export default Flip;