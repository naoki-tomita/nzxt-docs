import { readFile } from "fs";
export function readFileAsync(path: string) {
  return new Promise<string>((ok, ng) => readFile(path, (e, d) => e ? ng(e) : ok(d.toString("utf-8"))));
}
