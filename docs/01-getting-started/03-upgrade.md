# Upgrade

lancher provides a self-upgrade method, so you don't have to restart the installation process each time.

Just run:

```bash
lancher upgrade
```

And it will automatically check for a new version. You will be prompted to decide whether to continue with the upgrade or not.

If you want to avoid running the command in interactive mode or if you want to download the latest version regardless, you can use the `--force` flag, which will download it.

```bash
lancher upgrade --force
```
