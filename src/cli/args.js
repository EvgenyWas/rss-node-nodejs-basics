const parseArgs = () => {
  const argv = process.argv.slice(2);
  const args = [];
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i].replace("--", "");
    const value = argv[i + 1];
    args.push(`${key} is ${value}`);
  }
  console.log(args.join(", "));
};

parseArgs();
