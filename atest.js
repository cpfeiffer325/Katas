var current = "south";
var direction = "right";

if (current === "north") {
  if (direction === "left") {
    current = "west";
  } else if (direction === "right") {
    current = "east";
  }
}
else if (current === "east") {
  if (direction === "left") {
    current = "north";
  } else if (direction === "right") {
    current = "south";
  }
}
else if (current === "south") {
  if (direction === "left") {
    current = "east";
  } else if (direction === "right") {
    current = "west";
  }
}
else if (current === "west") {
  if (direction === "left") {
    current = "south";
  } else if (direction === "right") {
    current = "north";
  }
}

console.log(current);