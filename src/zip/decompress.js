import stream from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const archivePath = path.resolve(__dirname, "files", "archive.gz");
  const filePath = path.resolve(__dirname, "files", "fileToCompress.txt");

  try {
    await fs.promises.access(archivePath);
    await stream.pipeline(
      fs.createReadStream(archivePath),
      zlib.createGunzip(),
      fs.createWriteStream(filePath)
    );
  } catch (error) {
    console.error(error);
  }
};

await decompress();
