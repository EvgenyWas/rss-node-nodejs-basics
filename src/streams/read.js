import fs from "node:fs";
import path from "node:path";

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, "files", "fileToRead.txt");
  const stream = fs.createReadStream(filePath);
  let data = "";

  return new Promise((resolve, reject) => {
    stream.on("data", (value) => (data += value));
    stream.on("end", () => {
      process.stdout.write(`${data}\n`);
      resolve(data);
    });
    stream.on("error", reject);
  });
};

await read();
