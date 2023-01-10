# QuickShop-Hikari Documents

This documents is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Help us translate / improve this document

For translate, please check here: https://crowdin.com/project/quickshop-hikari-documents  

If you want help us improve the page, please switch to `American English` and click `Edit this page` on the document bottom to open a Pull Request.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
