# sdk-ts
Typescript SDK for the Unified Boomtown API

# Overview

This repository contains the open source NPM package, sdk-ts that provides reusable functions used to interface with Boomtown APIs.

## Getting Started

In order to build the TypeScript compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

#### Clone a copy of the repo:

```bash
git clone https://github.com/goboomtown/sdk-ts.git
```

#### Change to the sdk directory:

```bash
cd sdk
```

#### Install dev dependencies:

```bash
npm install
```

## What's included
Within the download you'll find the following directories and files:

```
sdk-ts
├── sdk
|   ├── src
|   |   ├── api
|   │   |   ├── controllers
|   |   |   |   └── index.ts
|   │   |   └── models
|   |   |       └── index.ts
|   |   ├── configs
|   │   |   └── auth-config.ts
|   |   ├── core
|   │   |   ├── exceptions
|   |   |   |   └── index.ts
|   │   |   ├── helpers
|   |   |   |   └── index.ts
|   │   |   ├── request-transform
|   |   |   |   └── index.ts
|   │   |   ├── response-transform
|   |   |   |   └── index.ts
|   │   |   └── services
|   |   |       └── index.ts
|   |   ├── gateway
|   │   |   ├── auth
|   |   |   |   └── hmac-signature.ts
|   │   |   ├── client
|   |   |   |   └── axios-client.ts
|   │   |   ├── mapper
|   |   |   |   └── index.ts
|   │   |   └── request-handler
|   |   |       └── index.ts
|   │   └── index.ts
|   ├── .prettierrc 
|   ├── package-lock.json
|   ├── package.json
|   ├── README.md 
|   ├── tsconfig.json
|   └── tslint.json
├── docs
|   ├── decisions
|   |   ├── 0001-npm-package-for-sdk.md
|   |   ├── 0002-use-typescript-for-sdk.md
|   |   ├── 0003-typescript-style-guide.md
|   |   ├── 0004-use-dashes-in-filenames.md
|   |   ├── 0005-github-commit-message-guidelines.md
|   |   └── adr-template.md
|   └── index.md
└── README.md
```

## Documentation for ADR
For new ADRs, please use [adr-template.md](docs/decisions/adr-template.md) as 

- [ADR-0001](docs/decisions/0001-npm-package-for-sdk.md) - NPM Package for SDK
- [ADR-0002](docs/decisions/0002-typescript-for-sdk.md) - Use TypeScript for SDK
- [ADR-0003](docs/decisions/0003-typescript-style-guide.md) - Use TypeScript Code Style 
- [ADR-0004](docs/decisions/0004-use-dashes-in-filenames.md) - Use Dashes in file name 
- [ADR-0005](docs/decisions/0005-github-commit-message-guidelines.md) - Use GitHub Commit Standards
- [ADR-0006](docs/decisions/0006-github-release-branching-pattern.md) - GitHub Release Branching Pattern

- [ADR-0007](docs/decisions/0007-unit-test-framework.md) - Unit Test Framework
## Author
Boomtown Team <developers@goboomtown.com>
