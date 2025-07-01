# Bazel Central Registry Web UI

This repository provides a web UI for the [Bazel Central Registry (BCR)](https://github.com/bazelbuild/bazel-central-registry).
It entirely consists of statically rendered pages, which are updated as soon as a new commit is pushed to the BCR.

## Contributing

We are happy about any contributions!

To get started you can take a look at our [Github issues](https://github.com/hobofan/bcr-web-ui/issues).

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be licensed as below, without any additional terms or
conditions.

### Getting Started

We use git submodules to include the data from bazelbuild/bazel-central-registry, so after cloning this repo you need to run:

```bash
git submodule update --init
```

To get a buildifier and buildozer on your PATH, you also need to run this before launching the app:

```bash
bazel run //bin:bazel_env
```

Packages are managed via [pnpm](https://pnpm.io/), so they can be installed via `npx pnpm install`

```
sudo apt install npm
sudo npm install -g pnpm
pnpm approve-builds
```

Then, run the development server:

```bash
npm run dev
```

Then to compile all static pages, run the following:

```bash
npm run build
```

Finally to server the pre-build module files

```bash
npx serve@latest out
```

### Learn More about Next.js

The page is built on top of Next.js.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

Licensed under Apache License, Version 2.0, ([LICENSE](LICENSE) or http://www.apache.org/licenses/LICENSE-2.0)
