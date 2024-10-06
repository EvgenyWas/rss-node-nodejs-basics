import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const __dirname = import.meta.dirname;
  const oldPath = path.resolve(__dirname, "files", "wrongFilename.txt");
  const newPath = path.resolve(__dirname, "files", "properFilename.md");

  if (!existsSync(oldPath) || existsSync(newPath)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    console.error(error);
  }
};

await rename();
