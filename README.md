# ROS Central Registry Web UI

This repository is a fork of the [Bazel Central Registry (BCR) UI](https://github.com/bazel-contrib/bcr-ui), with changes made to parse Bazel Modules from the [ROS Central Registry (RCR)](https://github.com/intrinsic-opensource/ros-central-registry) and use a different blue theme throughout the site.

# Regeneration instructions

You will need access to an Ubuntu 24.04 environment with Bazel. We recommend installing [bazelisk](https://github.com/bazelbuild/bazelisk) to ensure compatibility.

The ROS Central Registry is included as a submodule, so you must checkout this repo in this way

```bash
git clone https://github.com/intrinsic-opensource/rcr-ui.git
git submodule update --init
```

To get buildifier and buildozer, you must run this:

```bash
bazel run //bin:bazel_env
```

Packages are managed via [pnpm](https://pnpm.io), so you must install this tooling first.

```
sudo apt install npm
sudo npm install -g pnpm
```

Then to install all project dependencies.

```bash
pnpm install
```

Then to compile all static pages, run the following:

```bash
pnpm run build
```

## License

Licensed under Apache License, Version 2.0, ([LICENSE](LICENSE) or http://www.apache.org/licenses/LICENSE-2.0)
