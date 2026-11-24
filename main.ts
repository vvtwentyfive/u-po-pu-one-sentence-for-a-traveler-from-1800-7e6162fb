import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "Imagine one road joining the libraries, markets, and post offices of the world, so a letter you write here can be read in a far town before its ink dries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
