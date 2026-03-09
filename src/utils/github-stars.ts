import type { GitHubStars } from "@/@types/github-stars";

export async function fetchGitHubStars(): Promise<GitHubStars | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/lancher-dev/lancher",
      {
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (res.ok) {
      const data = await res.json();
      return data.stargazers_count ?? null;
    }
  } catch {
    // silently ignore — stars won't be shown
  }
  return null;
}
