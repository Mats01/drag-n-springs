import React, { useEffect, useState } from "react";
import { useTrail, animated, useSpring } from "react-spring";
import { useDrag } from 'react-use-gesture'

const config = { mass: 5, tension: 2000, friction: 200, duration: 500, };

function Drag() {
  const [{ x, y }, set] = useSpring(() => ({ x: 100, y: 400 }))
  const [target, setTarget] = useState({ x: 100, y: 400 })
  const [oldTarget, setOldTarget] = useState({ x: 100, y: 400 })

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my], xy: [x, y] }) => {
    if (down && (x > 40 && x < 350) && (y > 40 && y < 140)) {
      setTarget({ x: 50, y: 50 })
    } else if (down && (x > 70 && x < 370) && (y > 180 && y < 280)) {
      setTarget({ x: 80, y: 195 })
    } else if (!down) {
      setOldTarget(target)
    }
    set({ x: down ? mx + oldTarget.x : target.x, y: down ? my + oldTarget.y : target.y, immediate: down })
  })

  // Bind it to a component
  return (<>

    <div
      style={{
        position: "fixed",
        top: 40,
        left: 40,
        width: 300,
        height: 100,
        border: '2px solid #555',
        borderRadius: 5,
      }}
    >
      target 1
    </div>

    <div
      style={{
        position: "fixed",
        top: 180,
        left: 70,
        width: 300,
        height: 100,
        border: '2px solid #555',
        borderRadius: 5,
      }}
    >
      target 2
    </div>

    <animated.div {...bind()} style={{
      width: 200,
      height: 50,
      display: "flex",
      position: "fixed",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#bbb",
      borderRadius: 10,
      left: x,
      top: y,
      touchAction: 'none'
    }} />
  </>)
}
export default Drag