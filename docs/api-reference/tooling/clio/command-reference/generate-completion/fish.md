---
id: fish
title: fish
---

## Command

```sh
clio generate-completion fish [OPTIONS]
```

## Description

Generate fish completion script for clio commands.

## Synopsis

```sh
clio generate-completion fish
  [-h | --help]                       # Print this help message and exit
  [--help-all]                        # Show all help
```

## Examples

### Generate and install fish completion

```sh
clio generate-completion fish > ~/.config/fish/completions/clio.fish
```

This will generate the completion script and save it to the standard fish completions directory.

### Generate to stdout

```sh
clio generate-completion fish
```

This outputs the completion script to stdout, which you can redirect to any location.

## Requirements

- Install the currently supported version of `clio`.
- Fish shell.

:::note
The `clio` tool is bundled with the Wire software. [Installing Wire core](/docs/getting-started/install-dependencies.md) will install the `clio` and `kiod` command line tools.
:::

:::note
Fish shell automatically loads completions from `~/.config/fish/completions/`. The completions should be available immediately after creating the file.
:::
