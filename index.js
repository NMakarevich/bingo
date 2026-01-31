import fs from "fs/promises";
import path from "path";

const pathDir = path.join(process.cwd(), "public");

async function getFiles(dir) {
  const files = await fs.readdir(dir);
  console.log(files);
}

getFiles(pathDir);
