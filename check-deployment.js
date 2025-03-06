/**
 * GitHub Pages Deployment Checker
 *
 * This script helps check if your GitHub Pages deployment is working.
 * Run it with: node check-deployment.js
 */

const https = require("https");

const REPO_NAME = "next-cv-website";
const USERNAME = "no1pain";
const SITE_URL = `https://${USERNAME}.github.io/${REPO_NAME}/`;

console.log(`Checking GitHub Pages deployment for: ${SITE_URL}`);

https
  .get(SITE_URL, (res) => {
    const { statusCode } = res;

    console.log(`Status Code: ${statusCode}`);

    if (statusCode === 200) {
      console.log("✅ Success! Your GitHub Pages site is up and running.");
      console.log(`Visit your site at: ${SITE_URL}`);
    } else if (statusCode === 404) {
      console.log("❌ Error: Your GitHub Pages site returned a 404 Not Found.");
      console.log("\nPossible reasons:");
      console.log("1. The deployment is still in progress (wait 5-10 minutes)");
      console.log(
        "2. The gh-pages branch does not exist or is not set as the source"
      );
      console.log(
        "3. The repository is not public (required for GitHub Pages on free plan)"
      );
      console.log("4. The build process failed (check GitHub Actions)");
      console.log("\nTry these fixes:");
      console.log("- Push a small change to trigger a new deployment");
      console.log(
        "- Go to Settings > Pages and select the gh-pages branch as the source"
      );
      console.log("- Check the Actions tab for any build errors");
    } else {
      console.log(`❓ Unexpected status code: ${statusCode}`);
      console.log(
        "Check your GitHub repository settings and deployment status."
      );
    }
  })
  .on("error", (e) => {
    console.error(`❌ Error: ${e.message}`);
  });
