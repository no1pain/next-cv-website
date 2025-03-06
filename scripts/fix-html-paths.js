const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

// Function to fix paths in HTML files
async function fixHtmlPaths() {
  console.log("Fixing HTML paths...");

  // Find all HTML files in the out directory
  const htmlFiles = await glob("out/**/*.html");

  htmlFiles.forEach((filePath) => {
    console.log(`Processing ${filePath}...`);

    let content = fs.readFileSync(filePath, "utf8");

    // Fix duplicate basePath in script and link tags
    content = content.replace(
      /src="\/next-cv-website\/next-cv-website\//g,
      'src="/next-cv-website/'
    );
    content = content.replace(
      /href="\/next-cv-website\/next-cv-website\//g,
      'href="/next-cv-website/'
    );

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Fixed ${filePath}`);
  });

  console.log("All HTML files processed successfully!");
}

// Run the function
fixHtmlPaths();
