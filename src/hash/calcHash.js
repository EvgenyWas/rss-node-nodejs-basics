import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import stream from "node:stream/promises";

const calculateHash = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  let hash;
  try {
    await stream.pipeline(
      fs.createReadStream(targetPath),
      crypto.createHash("sha256").setEncoding("hex"),
      async (source) => {
        hash = (await source.toArray())[0];
      }
    );
  } catch (error) {
    console.error(error);
  }

  console.log(hash);
};

await calculateHash();
