const fs = require("fs");
const path = require("path");

// Use separate folder names
const parentFolder = "drexel";
const projectName = "idmi399";

const src = path.resolve("build");
const dest = path.resolve(src, parentFolder, projectName);

// Make sure destination exists
if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
}

// Move everything from build/* → build/drexel/idmi399/*
for (const file of fs.readdirSync(src)) {
    // Skip the destination folders themselves
    if (file === parentFolder) continue;

    fs.renameSync(
        path.join(src, file),
        path.join(dest, file)
    );
}

console.log(`✅ Build moved to ${dest}`);
