# Installation

Install lancher via shell script or build from source.

## Quick Installation

```bash
curl -sS https://lancher.dev/install.sh | sh
```

The installer will install `lancher` in `~/.local/bin`.

## Manual Installation

For manual installation you need Go 1.22+ and git. Proceed with repo clone and command installation.

```bash
git clone https://github.com/lancher-dev/lancher.git
cd lancher
make install
```

### Build from Source

```bash
# Clone and build
git clone https://github.com/lancher-dev/lancher.git
cd lancher
go build -o lancher ./cmd/lancher

# Install manually
sudo mv lancher /usr/local/bin/
```

## Third party repositories

lancher is also distributed in other repositories, for easier installation.

[![Packaging status](https://repology.org/badge/vertical-allrepos/lancher.svg)](https://repology.org/project/lancher/versions)
