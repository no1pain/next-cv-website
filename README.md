# Next.js CV Website

A modern, responsive CV/portfolio website built with Next.js 14, React, and Tailwind CSS. This project showcases a clean, dark-themed design with glassmorphism effects and a component-based architecture.

## 🌟 Features

- **Modern UI Design**: Dark theme with glassmorphism effects and gradient accents
- **Responsive Layout**: Optimized for all device sizes
- **Component-Based Architecture**: Well-organized and maintainable code structure
- **Projects Showcase**: Display your projects with technology tags and links
- **SEO Optimized**: Built with Next.js for better search engine visibility

## 🔗 Demo

View the live demo: [https://no1pain.github.io/next-cv-website/](https://no1pain.github.io/next-cv-website/)

> **Note**: If the demo link isn't working yet, it's likely because:
>
> 1. The GitHub Pages deployment is still in progress (can take up to 10 minutes)
> 2. The GitHub Pages settings need to be configured properly
> 3. The repository needs to be public for GitHub Pages to work with the free plan

## ❓ Why Can't I See the Demo Link in GitHub Pages Settings?

If you're looking at `https://github.com/no1pain/next-cv-website/settings/pages` and don't see a demo link, here are the common reasons:

1. **First Deployment Not Complete**: The first deployment can take 5-10 minutes to complete. After that, the link will appear.

2. **Branch Not Published**: Make sure your `gh-pages` branch exists and is selected as the source in GitHub Pages settings.

3. **Build Process Failed**: Check the Actions tab in your repository to see if there were any errors in the GitHub Actions workflow.

4. **Repository Visibility**: Ensure your repository is public if you're using the free GitHub plan.

5. **Missing Index.html**: The `out` directory must contain an `index.html` file at its root.

6. **Need to Refresh**: Sometimes you need to refresh the settings page after deployment completes to see the link.

To fix this, try:

- Pushing a small change to trigger a new deployment
- Manually selecting the `gh-pages` branch in the GitHub Pages settings
- Checking the Actions tab for any build errors
- Adding a README.md file to your repository (sometimes this triggers the GitHub Pages setup)

## 🛠️ Technologies Used

- **Next.js 14**: React framework with server-side rendering capabilities
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Pages**: For hosting the static site

## 📋 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/no1pain/next-cv-website.git
   cd next-cv-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🚀 Deployment

This project is configured for GitHub Pages deployment. To set up GitHub Pages:

1. Go to your repository settings: `https://github.com/no1pain/next-cv-website/settings/pages`
2. Under "Source", select "Deploy from a branch"
3. Select the "gh-pages" branch and "/ (root)" folder
4. Click "Save"

Alternatively, the project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

- Oleksandr Kazan - Frontend Developer
