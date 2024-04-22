import tankPhoto from "./tank.png";
import cannonPhoto from "./cannon.png";
import mechPhoto from "./mech.png";

export const machines = [
    {
     name: "Tank",
     health: 3,
     move: 3,
     damage: 1,
     attack: "ground",
     push: [0],
     range: 7,
     image: {tankPhoto},
   },
   {
    name: "Cannon",
    health: 2,
    move: 3,
    damage: 1,
    attack: "air",
    push: [2,4,6,8],
    range: 7,
    image: {cannonPhoto},
  },
  {
    name: "Mech",
    health: 3,
    move: 3,
    damage: 2,
    attack: "ground",
    push: [0],
    range: 1,
    image: {mechPhoto},
  },
]