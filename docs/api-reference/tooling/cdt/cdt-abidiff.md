# cdt-abidiff

The `cdt-abidiff` tool is used to check differences between two ABI files.
To report differences with `cdt-abidiff`, you only need to pass the two ABI file names as command line arguments.

Example:

```bash
cdt-abidiff hello.abi old_hello.abi
```

This will generate dump the report output to the console.

```sh
OVERVIEW: cdt-abidiff
USAGE: cdt-abidiff [options] <input file1> ... <input file2> ...

OPTIONS:

Generic Options:

  -help      - Display available options (-help-hidden for more)
  -help-list - Display list of available options (-help-list-hidden for more)
  -version   - Display the version of this program
```
