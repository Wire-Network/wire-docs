---
id: zsh
title: zsh
---

## Command

```sh
clio generate-completion zsh [OPTIONS]
```

## Description

Generate zsh completion script for clio commands.

## Synopsis

```sh
clio generate-completion zsh
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Generate and install zsh completion

```sh
clio generate-completion zsh > ~/.config/zsh/completions/_clio
```

This will generate the completion script and save it to the standard zsh completions directory.

### Generate to stdout

```sh
clio generate-completion zsh
```

This outputs the completion script to stdout, which you can redirect to any location.

## Requirements

- Install the currently supported version of `clio`.
- Zsh shell with completion support enabled.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::note
Ensure your `fpath` includes the completions directory. You may need to add `fpath=(~/.config/zsh/completions $fpath)` to your `.zshrc` before `compinit` is called.
:::
