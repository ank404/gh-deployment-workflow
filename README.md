# GitHub Actions CI/CD Deployment Workflow

This project demonstrates the setup of a continuous integration and continuous deployment (CI/CD) pipeline using GitHub Actions to deploy a static website to GitHub Pages. This workflow automatically deploys any changes made to the `index.html` file on the `main` branch to GitHub Pages, allowing for seamless updates to the website.

## Project Overview

This repository contains:
- A simple, static HTML website with basic styling and JavaScript to document the steps for setting up GitHub Actions for CI/CD.
- A GitHub Actions workflow (`deploy.yml`) that automates the deployment of this static site to GitHub Pages whenever changes are made to `index.html`.

## Project Structure

```plaintext
.
├── .github
│   └── workflows
│       └── deploy.yml      # GitHub Actions workflow file for CI/CD
├── index.html              # Main HTML file of the static website
├── style.css               # CSS file for styling the website
├── script.js               # JavaScript file for interactivity
└── README.md               # Project documentation (this file)
```

## Steps to Set Up the CI/CD Workflow

### 1. Create a New GitHub Repository

Start by creating a new repository on GitHub called `gh-deployment-workflow`. Add essential files such as `index.html`, `style.css`, `script.js`, and this `README.md`.

### 2. Create the GitHub Actions Workflow

Inside your repository, create a `.github/workflows` directory. Add a file named `deploy.yml` in this directory to define the deployment workflow.

### 3. Configure Workflow Triggers

The workflow is triggered on every push to the `main` branch, but only if the `index.html` file is modified. This reduces unnecessary deployments.

### 4. Define the Deployment Steps

The `deploy.yml` file uses GitHub's built-in `GITHUB_TOKEN` to authenticate and push changes to the `gh-pages` branch. This branch is used by GitHub Pages to serve the website.

### 5. Deploy and Verify

After setting up the workflow, push your changes to GitHub. The workflow will automatically deploy the website to GitHub Pages, and it should be accessible at:

```
https://<username>.github.io/gh-deployment-workflow/
```

## Files Included in the Project

- **`index.html`**: The main HTML file that serves as the static website's homepage.
- **`style.css`**: Styles for the website, giving it a clean, professional look.
- **`script.js`**: JavaScript to add simple interactivity to the documentation website.
- **`deploy.yml`**: GitHub Actions workflow configuration file that defines the CI/CD pipeline.

## Workflow File - `deploy.yml`

Below is the configuration for the workflow file used to deploy to GitHub Pages:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - 'index.html'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Setup Node.js (required for GitHub Pages Action)
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Explanation of `deploy.yml` Steps

- **Checkout Repository**: Checks out the repository so that files can be accessed in later steps.
- **Setup Node.js**: Some GitHub Pages deployment actions require Node.js. Here we set it to version 16.
- **Deploy to GitHub Pages**: Deploys the site to GitHub Pages using the `peaceiris/actions-gh-pages@v3` action and pushes changes to the `gh-pages` branch.

## Technologies Used

- **GitHub Actions**: For setting up CI/CD to automate the deployment.
- **GitHub Pages**: For hosting the static website.
- **HTML, CSS, and JavaScript**: To create a simple, visually appealing documentation site.

## Future Improvements

- Add more complex styling and animations.
- Use a static site generator (e.g., Jekyll or Hugo) to enhance the website's structure and appearance.

## Conclusion

This project showcases how to use GitHub Actions for CI/CD with GitHub Pages. The setup is simple yet powerful, making it easy to automate the deployment of static sites. Feel free to fork this repository and try it out on your own projects!

---
