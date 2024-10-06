import { Transform } from "node:stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, cb) {
      cb(null, [...String(chunk)].reverse().join("") + "\n");
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
