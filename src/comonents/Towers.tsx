import React, { useEffect, useState } from "react";
import { animated, useSpring, useSprings } from "react-spring";
import { useDrag } from 'react-use-gesture'

const config = { mass: 5, tension: 2000, friction: 200, duration: 500, };




function Towers() {

  const colors = ["#f00", "#0f0", "#00f"];
  const [{ x, y }, set] = useSpring(() => ({ x: 100, y: 400 }))
  const [target, setTarget] = useState({ x: 100, y: 400 })
  const [oldTarget, setOldTarget] = useState({ x: 100, y: 400 })

  const [items, setItems] = useState(new Array(3).fill(0).map((_, i) => ({ size: i + 1, x: 30, y: i * 10 })));
  const [towers, setTowers] = useState<{ [key: number]: number[] }>({
    0: [],
    1: [],
    2: []
  });

  const [springs, setSprings] = useSprings(3, i => ({ x, y }))

  // Set the drag hook and define component movement based on gesture data



  const binds = useDrag(({ args: [index], down, movement: [mx, my], xy: [x, y] }) => {

    for (const tower of Object.values(towers)) {

      if (tower.includes(index + 1) && index + 1 !== tower[tower.length - 1]) {
        return
      }
    }
    if (down && (x < window.innerWidth / 3 - 20)) {
      setTarget({ x: 30, y: window.innerHeight - 100 - towers[0].length * 60 })
    } else if (down && (x < window.innerWidth * 2 / 3 - 20)) {
      setTarget({ x: 30 + window.innerWidth / 3, y: window.innerHeight - 100 - towers[1].length * 60 })
    } else if (down) {
      setTarget({ x: 30 + window.innerWidth * 2 / 3, y: window.innerHeight - 100 - towers[2].length * 60 })
    }

    if (!down) {

      let tower: number = 2;
      if (x < window.innerWidth / 3 - 20) {
        tower = 0;
      } else if (x < window.innerWidth * 2 / 3 - 20) {
        tower = 1;
      }
      console.log(towers);
      if (towers[tower].length > 0 && towers[tower][towers[tower].length - 1] < items[index].size) {
        setSprings(i => i === index ? { x: items[i].x, y: items[i].y } : { x: items[i].x, y: items[i].y })


        return;
      }
      if (towers[tower].includes(items[index].size)) {
        setSprings(i => i === index ? { x: items[i].x, y: items[i].y } : { x: items[i].x, y: items[i].y })

        return;
      }
      const newTowers = { 0: towers[0].filter(i => i !== items[index].size), 1: towers[1].filter(i => i !== items[index].size), 2: towers[2].filter(i => i !== items[index].size) }

      setTowers({ ...newTowers, [tower]: [...towers[tower], items[index].size] })

      setItems(items.map((item, i) => i !== index ? item : { ...item, x: down ? mx + item.x : target.x, y: down ? my + item.y : target.y }))

    }
    setSprings(i => i === index ? { x: down ? mx + items[index].x : target.x, y: down ? my + items[index].y : target.y, immediate: down } : { x: items[i].x, y: items[i].y })
  })
  // Bind it to a component
  return (<>

    <div
      style={{
        position: "fixed",
        top: 40,
        left: 20,
        width: window.innerWidth / 3 - 40,
        height: window.innerHeight - 80,
        border: '2px solid #555',
        borderRadius: 5,
      }}
    >
    </div>

    <div
      style={{
        position: "fixed",
        top: 40,
        left: 20 + window.innerWidth / 3,
        width: window.innerWidth / 3 - 40,
        height: window.innerHeight - 80,

        border: '2px solid #555',
        borderRadius: 5,
      }}
    >
    </div>

    <div
      style={{
        position: "fixed",
        top: 40,
        left: 20 + window.innerWidth * 2 / 3,
        width: window.innerWidth / 3 - 40,
        height: window.innerHeight - 80,

        border: '2px solid #555',
        borderRadius: 5,
      }}
    >
    </div>

    {springs.map(({ x, y }, i) => (
      <animated.div {...binds(i)} style={{
        width: window.innerWidth / 3 - 60 - (3 - items[i].size) * 100,
        marginLeft: (3 - items[i].size) * 50,
        height: 50,
        display: "flex",
        position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors[i],
        borderRadius: 10,
        left: x,
        top: y,
        touchAction: 'none'
      }} />
    ))}


  </>)
}
export default Towers;