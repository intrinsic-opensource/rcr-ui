# ROS Central Registry Web UI

This repository is a fork of the [Bazel Central Registry (BCR) UI](https://github.com/bazel-contrib/bcr-ui), with changes made to parse Bazel modules from the [ROS Central Registry (RCR)](https://github.com/intrinsic-opensource/ros-central-registry). The theme has also been modified to reflect the [Robot Operating System](https://ros.org) branding colors.

# Instructions

You will need access to an Ubuntu 24.04 environment with [Bazel 8.4.0](https://bazel.build). We recommend installing the [bazelisk](https://github.com/bazelbuild/bazelisk) to get this version automatically.

Packages are managed via [pnpm](https://pnpm.io), so you must install this tooling first.

```
sudo apt install npm
sudo npm install -g pnpm
```

This project uses `direnv` to make bazel build products available on the shell `PATH`. Setup:

```
sudo apt install direnv
echo "eval '$(direnv hook bash)'" >> ~/.bashrc
source ~/.bashrc
```

The ROS Central Registry is included as a submodule, so you must checkout and pull these submodules:

```bash
git clone https://github.com/intrinsic-opensource/rcr-ui.git
git submodule update --init
```

Before you can build you must get buildifier and buildozer first, which can be done this way:

```bash
direnv allow .
bazel run //bin:bazel_env
```

Then to install all project dependencies prior to building, run this.

```bash
pnpm install
```

Finally, to compile all static pages run the following:

```bash
pnpm run build
```

## License

Licensed under Apache License, Version 2.0, ([LICENSE](LICENSE) or http://www.apache.org/licenses/LICENSE-2.0)
