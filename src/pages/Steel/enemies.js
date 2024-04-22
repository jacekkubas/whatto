import tankPhoto from "./tank.png";
import cannonPhoto from "./cannon.png";
import mechPhoto from "./mech.png";

export const enemies = [
    {
     name: "Godzilla",
     health: 3,
     move: 3,
     damage: 1,
     attack: "ground",
     push: [],
     range: 3,
     image: {tankPhoto},
   },
   {
    name: "Kong",
    health: 3,
    move: 2,
    damage: 3,
    attack: "ground",
    push: [0],
    range: 1,
    image: {cannonPhoto},
  },
  {
    name: "Rex",
    health: 4,
    move: 4,
    damage: 2,
    attack: "ground",
    push: [0],
    range: 2,
    image: {mechPhoto},
  },
]