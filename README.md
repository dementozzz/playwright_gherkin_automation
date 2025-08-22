# Playwright WEB Automation testing project

This repository contains WEB automation tests built with `Playwright`, `TypeScript`, and `Playwright-BDD`  using [Saucedemo website](https://www.saucedemo.com/).

## Pre-requisite
- [Node.Js](https://nodejs.org/en/download)

## Installation

**Clone the repository:**

```bash
git clone https://github.com/dementozzz/playwright_gherkin_automation.git
```

**Navigate to project directory:**

```bash
cd playwright_gherkin_automation
```

**Install dependencies:**

```bash
npm ci
```

## Execute Testing

If `.features-gen` folder didn't present on the project OR made any changes on .feature files in `tests/features/`, you must run command below:

```bash
npx bddgen
```

After that, the folder `features-gen/tests/features/` along with test file will be created, then you can start execute test by run command:

```bash
npx playwright test --headed
```

or with debug mode:

```bash
npx playwright test --debug
```
