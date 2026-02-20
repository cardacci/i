# Memory

- TSX component structure and conventions: @docs/TSX_components.md
- JSX component structure and conventions: @docs/JSX_components.md

# Claude Code Local Permissions

The file `.claude/settings.local.json` (git-ignored) stores per-machine permission
rules that let Claude Code run specific shell commands without prompting each time.

| Pattern | What it allows |
|---|---|
| `Bash(git mv:*)` | Run `git mv` with any arguments (rename/move tracked files) |
| `Bash(npm run build:*)` | Run `npm run build` with any arguments (production builds) |

These follow the format `Bash(command prefix:*)` where `*` is a wildcard for
arguments. Each developer can configure their own permissions locally without
affecting the repository.
