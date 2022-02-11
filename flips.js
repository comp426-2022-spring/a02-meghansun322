import { coinFlips, countFlips } from "./modules/coin.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const flip_count = args["number"] || 1;
const flip_list = coinFlips(flip_count);
console.log(flip_list);
console.log(countFlips(flip_list));
