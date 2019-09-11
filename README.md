# Skald

## Testing strategy

We will

- have at least 1 e2e test for any component using firebase
- have at least 1 unit test for any component that does rely on Vuex
- cover 80% of full functionality of a non-vuex using components with unit tests

### Run end-to-end tests

```bash
npm run test:e2e
```

### Run unit tests

```bash
npm run test:unit
```

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Deploy to firebase

```bash
firebase deploy
```

To make this work, you need a firebase project with settings file like this (not included in the repo)

```json
{
  "hosting": {
    "site": "mekanismi",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

See [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart) for more info.
