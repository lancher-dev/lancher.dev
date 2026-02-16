# Ignore Patterns

Define which files and directories to exclude during template copy operations. Patterns use glob syntax and are case-sensitive, evaluated against each file's relative path within the template.

You should always exclude version control directories like `.git`, dependency folders like `node_modules`, and build output directories. Never include secrets, API keys, or credentials in templates. Platform-specific files (`.DS_Store`, `Thumbs.db`) and IDE configurations (`.vscode`, `.idea`) should typically be excluded as well.

## Configuration

Create a `.lancherignore` file in your template root directory. Each line represents a pattern:

```
node_modules
.git
*.log
dist/
build/
```

Lines starting with `#` are treated as comments and help document why specific patterns are excluded:

```
# Dependencies
node_modules
pnpm-lock.yaml

# Build output
dist/
build/

# Logs
*.log
```

Patterns match from the template root and are case-sensitive. An empty `.lancherignore` file will include all files in the template.

## Pattern Types

### Exact Match

```
node_modules
package-lock.json
.DS_Store
```

### Wildcards

Use `*` to match any characters:

```
*.log
*.tmp
test-*
```

### Directories

Trailing slash indicates a directory:

```
dist/
build/
.cache/
```

### Glob Patterns

Use `**` for recursive matching:

```
**/*.test.js
**/node_modules
```

## Common Patterns

### Node.js

```
node_modules
package-lock.json
pnpm-lock.yaml
yarn.lock
.next
.nuxt
dist
build
*.log
```

### Python

```
__pycache__
*.pyc
*.pyo
venv
.venv
.pytest_cache
dist
*.egg-info
```

### Go

```
vendor
*.exe
*.test
.bin
coverage.out
```

### Git & VCS

```
.git
.svn
.hg
```

### IDE & Editors

```
.vscode
.idea
*.swp
*.swo
.DS_Store
Thumbs.db
```

### Secrets & Environment

```
.env
.env.local
.env.*.local
*.key
*.pem
secrets.yaml
```

### Build Artifacts

```
dist
build
out
.next
.nuxt
target
*.o
*.so
```

## Deprecated Method

> [!WARNING]
> The `ignore` field in `.lancher.yaml` is deprecated and will be removed in a future version. Migrate to `.lancherignore`.

If using the old method, define patterns as an array in `.lancher.yaml`:

```yaml
ignore:
  - node_modules
  - "*.log"
```

If both files exist, `.lancherignore` takes precedence.
