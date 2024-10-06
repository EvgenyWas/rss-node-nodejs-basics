import fs from "node:fs/promises";
import path from "node:path";

const create = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, "files", "fresh.txt");

  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "ax" });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    } else {
      console.error(error);
    }
  }
};

await create();
