// Las imágenes binarias se guardan en assets/bundles/*.txt como líneas "ruta<TAB>base64"
// (el repo se publica con una herramienta que solo admite texto). Este script las
// restaura antes del build.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const dir = "assets/bundles";
let count = 0;
if (existsSync(dir)) {
  // Orden alfabético: un bundle posterior (p. ej. images-5) sobrescribe una ruta repetida de uno anterior.
  for (const name of readdirSync(dir).sort()) {
    if (!name.endsWith(".txt")) continue;
    for (const line of readFileSync(join(dir, name), "utf8").split("\n")) {
      if (!line.trim()) continue;
      const [target, data] = line.split("\t");
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, Buffer.from(data, "base64"));
      count++;
    }
  }
}
console.log("decode-assets: restored", count, "files");
