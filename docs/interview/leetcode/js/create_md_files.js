const fs = require("fs");
const path = require("path");

const leetcodeDir = __dirname;
const files = fs.readdirSync(leetcodeDir);

files.forEach((file) => {
  if (file.endsWith(".js") && !file.startsWith("create_md_files")) {
    const baseName = path.basename(file, ".js");
    const mdFileName = `${baseName}.md`;
    const mdContent = `---
title: ${baseName}


tags:
  - leetcode
categories:
  - leetcode
---

<<< ./js/${file}
`;

    fs.writeFileSync(path.join(leetcodeDir, mdFileName), mdContent);
    console.log(`Created ${mdFileName}`);
  }
});
