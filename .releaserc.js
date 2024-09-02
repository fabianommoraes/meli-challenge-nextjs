module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: "docs: ${nextRelease.version}",
      },
    ],
  ],
  prepareCmd: "npm version ${nextRelease.version} -m 'docs: %s'",
  verifyConditions: ["@semantic-release/github"],
  publish: ["@semantic-release/github"],
  repositoryUrl: "https://github.com/fabianommoraes/meli-challenge-nextjs",
  githubToken:
    "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",
};
