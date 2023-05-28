Sometimes the ElixirLS extension fails to automatically format one or all files.
This extension provides a command to format the current file, and a command to format all files.
It intentionally doesn't try to format on save because the ElixirLS extension normally does that correctly.

## Usage

To run Elixir Manual Formatter:

- Select the **Editor → Elixir Manual Formatter → Format this Elixir file** menu item; or
- Select the **Editor → Elixir Manual Formatter → Format all Elixir files in project** menu item; or
- Open the command palette and type `Elixir Manual Formatter`

## Nova extensions I’ve written

- **Document Sections** lets you jump around to various sections in a text document using a customizable marker
  (typically a code comment in a certain format).
  [GitHub](https://github.com/eahanson/document-sections.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.document-sections/)

- **Elixir Manual Formatter** lets you manually format an Elixir file or entire project, in case the LSP formatter
  starts failing.
  [GitHub](https://github.com/eahanson/elixir-manual-formatter.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.elixir-manual-formatter/)

- **Go To Tab** shows a list of open editors and lets you choose one to go to.
  [GitHub](https://github.com/eahanson/go-to-tab.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.go-to-tab/)

- **Open File At Path** opens a palette into which you can type a file path and optionally line number and column number.
  The palette will default to the first line of text from the clipboard.
  [GitHub](https://github.com/eahanson/open-file-at-path.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-file-at-path/)

- **Open Recent** shows a list of recently-used editors and lets you choose one to open.
  [GitHub](https://github.com/eahanson/open-recent.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.open-recent/)

- **Open Related File** opens a file related to the current file.
  [GitHub](https://github.com/synchronal/related-files.novaextension) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.related-files/)

- **Smart Sort Lines** sorts the selected lines of code with special support for comma-separated lists.
  [GitHub](https://github.com/eahanson/smart-sort-lines) /
  [website](https://extensions.panic.com/extensions/eahanson/eahanson.smart-sort-lines/)

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/eahanson/elixir-manual-formatter.novaextension/blob/main/LICENSE).
