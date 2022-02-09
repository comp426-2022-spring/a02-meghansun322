import minimist from "minimist";
import { flipACoin } from "./modules/coin.js";

const args = minimist(process.argv.slice(2));
const call = args["call"];

if (call) {
  console.log(flipACoin(call));
} else {
  console.log("Error: no input");
  console.log("Usage: node guess-flip --call=[heads|tails]");
}
