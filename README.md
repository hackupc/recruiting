[![NPM 10.2.5](https://img.shields.io/badge/npm-10.1.0-blue.svg)](https://www.npmjs.com/package/npm/v/10.1.0)
[![Node.js 20.9.0](https://img.shields.io/badge/node-20.9.0-green.svg)](https://nodejs.org/en/download/releases/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c3632907-0263-42e7-892e-a00568e0f729/deploy-status)](https://app.netlify.com/sites/recruiting-hackupc/deploys)
[![](https://github.com/hackupc/recruiting/actions/workflows/recruiting_ci.yml/badge.svg)](https://github.com/hackupc/recruiting/actions/workflows/recruiting_ci.yml)

> Welcome to Hackers@UPC recruiting landing page source code, made in [Next.js](https://nextjs.org/).

> This website is in Catalan due the main target audience is the UPC students.

## Procedure to open or close applications

### Open applications

Go to the file `src/app/data/hero_data.ts` and change two parameters:
- **applicationsLink** should be the link to the new typeform for the current edition.
- **applicationsOpen** should be **true**.

### Close applications

Go to the file `src/app/data/hero_data.ts` and change the parameter **applicationsOpen** to **false**.

## Change information in the landing page easily

This landing page have 4 sections apart from the hero and the footer. The sections are:

### Cards section

In this section you can find all the data in the `src/app/data/cards_data.ts` file, you can change the data in this file to change the information in the landing page.

Also in these sections there are videos and photos, that can be found in the `public` folder. It's necessary to add the photo if it's added as a photo or video in the data file. Photos should be added in the `public/photos` folder and in ratio 1:1, and videos in the `public/videos` folder.

### Departments section

In this section you can find all the data in the `src/app/data/departments_data.ts` file, you can change the data in this file to change the information in the landing page.

### Hackers@UPC section

In this section you can find all the data in the `src/app/data/hackers_data.ts` file, you can change the data in this file to change the information in the landing page.

### Socials section

In this section you can find all the data in the `src/app/data/socials_data.ts` file, you can change the data in this file to change the information in the landing page.

In this section you will see we are using the `font-awesome` icons, you can find all the icons in the [font-awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2) website.

---

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
