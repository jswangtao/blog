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
isTimeLine: true
date: 2025-05-01
tags:
  - leetcode
categories:
  - leetcode
---

<<< ./${file}
`;

    fs.writeFileSync(path.join(leetcodeDir, mdFileName), mdContent);
    console.log(`Created ${mdFileName}`);
  }
});
