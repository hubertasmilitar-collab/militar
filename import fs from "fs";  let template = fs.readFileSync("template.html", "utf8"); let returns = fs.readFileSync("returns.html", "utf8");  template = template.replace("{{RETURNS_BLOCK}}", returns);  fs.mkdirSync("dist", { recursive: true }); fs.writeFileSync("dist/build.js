import fs from "fs";

let template = fs.readFileSync("template.html", "utf8");
let returns = fs.readFileSync("returns.html", "utf8");

template = template.replace("{{RETURNS_BLOCK}}", returns);

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/final-ebay.html", template);

console.log("✅ RETURNS test build complete");
