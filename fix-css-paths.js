const fs = require("fs");
const path = require("path");

// Define the base path for GitHub Pages
const basePath = "/next-cv-website";

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === ".html") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix CSS paths in HTML files
function fixCssPaths(htmlFile) {
  console.log(`Processing: ${htmlFile}`);

  let content = fs.readFileSync(htmlFile, "utf8");

  // Fix CSS paths
  content = content.replace(
    /(href=["'])(\/_next\/static\/css\/[^"']+["'])/g,
    `$1${basePath}$2`
  );

  // Fix JS paths
  content = content.replace(
    /(src=["'])(\/_next\/static\/[^"']+["'])/g,
    `$1${basePath}$2`
  );

  // Fix other asset paths
  content = content.replace(/(src=["'])(\/[^"']+["'])/g, (match, p1, p2) => {
    // Don't replace if it's already an absolute URL
    if (p2.startsWith("//") || p2.startsWith("http")) {
      return match;
    }
    return `${p1}${basePath}${p2}`;
  });

  // Add base tag to head
  content = content.replace(
    /(<head[^>]*>)/i,
    `$1\n    <base href="${basePath}/">\n    <link rel="stylesheet" href="${basePath}/_next/static/css/app.css">`
  );

  fs.writeFileSync(htmlFile, content);
  console.log(`Fixed: ${htmlFile}`);
}

// Main function
function main() {
  console.log("Starting CSS path fix script...");

  const outDir = path.join(__dirname, "out");
  const htmlFiles = findHtmlFiles(outDir);

  console.log(`Found ${htmlFiles.length} HTML files to process`);

  htmlFiles.forEach(fixCssPaths);

  console.log("All HTML files processed successfully!");
}

main();
