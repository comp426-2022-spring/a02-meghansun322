import { coinFlips } from "./modules/coin.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const flip_count = args["number"] || 1;
console.log(coinFlips(flip_count));
