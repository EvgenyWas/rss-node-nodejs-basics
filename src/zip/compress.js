import stream from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";

const compress = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, "files", "fileToCompress.txt");
  const archivePath = path.resolve(__dirname, "files", "archive.gz");
  try {
    await fs.promises.access(filePath);
    await stream.pipeline(
      fs.createReadStream(filePath),
      zlib.createGzip(),
      fs.createWriteStream(archivePath)
    );
  } catch (error) {
    console.error(error);
  }
};

await compress();
