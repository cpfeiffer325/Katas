const blocksAway = function(directions) {
  var coordinates = {east: 0, north: 0};
  var start = "";
  if (directions[0] === "right") {
    start = "east";
  } else if (directions[0] === "left") {
    start = "north";
  }
  var current = start;

  for (var i = 1; i < directions.length; i++) {
    if (i % 2 === 0) {
      if (current === "north") {
        if (directions[i] === "left") {
          current = "west";
        } else if (directions[i] === "right") {
          current = "east";
        }
      }
      else if (current === "east") {
        if (directions[i] === "left") {
          current = "north";
        } else if (directions[i] === "right") {
          current = "south";
        }
      }
      else if (current === "south") {
        if (directions[i] === "left") {
          current = "east";
        } else if (directions[i] === "right") {
          current = "west";
        }
      }
      else if (current === "west") {
        if (directions[i] === "left") {
          current = "south";
        } else if (directions[i] === "right") {
          current = "north";
        }
      }

    } else if (i % 2 === 1) {
      if (current === "north") {
        coordinates.north = coordinates.north + directions[i];
      }
      else if (current === "east") {
        coordinates.east = coordinates.east + directions[i];
      }
      else if (current === "south") {
        coordinates.north = coordinates.north - directions[i];
      }
      else if (current === "west") {
        coordinates.east = coordinates.east - directions[i];
      }
    }
  }
  return coordinates;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));