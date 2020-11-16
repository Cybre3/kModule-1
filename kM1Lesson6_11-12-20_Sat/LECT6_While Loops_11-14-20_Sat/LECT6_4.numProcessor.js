function main(num, listCommands) {
  let command = listCommands.shift();

  while (command !== "End" && command !== undefined) {
    switch (command) {
      case "Dec":
        num--;
        break;
      case "Inc":
        num++;
        break;
    }
    command = listCommands.shift();
  }
  console.log(num);
}

main(5, ["Inc", "End"]);
main(5, ["Dec", "End"]);
