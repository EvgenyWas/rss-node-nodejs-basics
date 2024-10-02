import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  const __dirname = import.meta.dirname;
  const targetPath = path.resolve(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(targetPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.rm(targetPath);
  } catch (error) {
    console.error(error);
  }
};

await remove();
