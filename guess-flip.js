import minimist from "minimist";
import { flipACoin } from "./modules/coin.js";

const args = minimist(process.argv.slice(2));
const call = args["call"];

if (call == "heads" || call == "tails") {
  console.log(flipACoin(call));
} else if (!call) {
  console.log("Error: no input");
} else {
  console.log("Usage: node guess-flip --call=[heads|tails]");
}
