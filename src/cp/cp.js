import path from "node:path";
import cp from "child_process";

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const childPath = path.resolve(__dirname, "files", "script.js");
  const child = cp.fork(childPath, args, { stdio: "pipe" });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(["it", "is", "child", "process"]);
