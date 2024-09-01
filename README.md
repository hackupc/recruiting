[![NPM 10.2.5](https://img.shields.io/badge/npm-10.1.0-blue.svg)](https://www.npmjs.com/package/npm/v/10.1.0)
[![Node.js 20.9.0](https://img.shields.io/badge/node-20.9.0-green.svg)](https://nodejs.org/en/download/releases/)

> Welcome to Hackers@UPC recruiting landing page source code, made in [Next.js](https://nextjs.org/).

## How to set up the project

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/) (v20.9.0 or newer) in your computer.
- Have a text editor or IDE installed, like [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).


### Installation

1. Clone the repository

   ```bash
    git clone https://github.com/hackupc/recruiting.git
   ```

2. Install the dependencies

   ```bash
   npm install
   ```

### Run the project for development

1. Run the development server

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> The page auto-updates as you edit the file. If it's not working maybe you need to check your configurations, it's for sure working in Chrome (mac and windows) and mozilla (linux)


## Linting and formatting

We are using `eslint` and `prettier` to lint and format the code, you can run the following commands to check if the code is correctly formatted and linted:

```bash
npm run lint
```

```bash
npm run format
```

This commands will make changes in your code, if you simply want to check if the code is correctly formatted and linted, you can run the following commands:

```bash
npm run check-lint
```

```bash
npm run check-format
```

## Deployment

The app is being deployed in [Netlify](https://www.netlify.com/), the deployment is automatic when a new commit is pushed to the `master` branch. But it's generating previews for every pull request, so you can see the changes before merging.
