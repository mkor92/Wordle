import { readFileSync } from "fs";

const path = "src/words/words.json";
const words = JSON.parse(readFileSync(path));

/*async function connect() {
  await

}*/

export default words;
