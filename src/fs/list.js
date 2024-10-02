import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = path.resolve(__dirname, "files");

  try {
    await fs.access(targetPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await fs.readdir(targetPath);
    console.log(files);
  } catch (error) {
    console.error(error);
  }
};

await list();
