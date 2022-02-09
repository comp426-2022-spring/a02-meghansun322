import { coinFlips } from "./modules/coin.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
console.log(coinFlips(args["number"]));
