/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable padded-blocks */
import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const CardSwipe = ({ children }) => {

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <>
      <animated.div {...bind()} style={{ transform: interpolate([x, y], (x, y) => `translate(${x}px, 0)`) }}>
        {children}
      </animated.div>
    </>
  );
};

export default CardSwipe;
