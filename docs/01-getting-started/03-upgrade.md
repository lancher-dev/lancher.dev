# Upgrade

Lancher provides a self-upgrade method.

Run:

```bash
lancher upgrade
```

It automatically checks for new versions and prompts to continue. Use `--force` to skip the prompt and download regardless of version.

```bash
lancher upgrade --force
```

> **Note:** In future versions, the `lancher upgrade` command will be **removed**. Upgrade management will be delegated to the package repositories of each supported OS distribution (APT, AUR, etc.), following the standard system update workflow.
>
> If you installed lancher via the install script and want to switch to a different version, you can re-run the script manually, pointing it to the desired release.
