import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const __dirname = import.meta.dirname;
  const srcPath = path.resolve(__dirname, "files");
  const destPath = path.resolve(__dirname, "files_copy");

  try {
    await fs.cp(srcPath, destPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    if (error.code === "EEXIST" || error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      console.error(error);
    }
  }
};

await copy();
