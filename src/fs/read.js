import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = path.resolve(__dirname, "files", "fileToRead.txt");

  try {
    await fs.access(targetPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    const content = await fs.readFile(targetPath, { encoding: "utf8" });
    console.log(content);
  } catch (error) {
    console.error(error);
  }
};

await read();
