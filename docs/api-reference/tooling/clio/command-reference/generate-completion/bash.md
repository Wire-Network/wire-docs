---
id: bash
title: bash
---

## Command

```sh
clio generate-completion bash [OPTIONS]
```

## Description

Generate bash completion script for clio commands.

## Synopsis

```sh
clio generate-completion bash
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Generate and install bash completion

```sh
clio generate-completion bash > ~/.local/share/bash-completion/completions/clio
```

This will generate the completion script and save it to the standard bash completions directory.

### Generate to stdout

```sh
clio generate-completion bash
```

This outputs the completion script to stdout, which you can redirect to any location.

## Requirements

- Install the currently supported version of `clio`.
- Bash shell with completion support enabled.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::note
After installing the completion script, you may need to restart your terminal or source your bashrc for the completions to take effect.
:::
