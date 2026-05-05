Project Context & Guidelines
                                                                                                                                              Overview
                                                                                                                                            
  This is a web application with a focus on visual customization (categories, icons, logo). The repository is hosted on local development
  environment (Windows 11).

  Development Guidelines

  - Branching: Use main as the primary branch for PRs.
  - Git Identity: Commits are made under user mar1fatih.
  - Testing: Run tests before merging (command: npm test or equivalent).
  - Documentation: Update relevant documentation when making breaking changes.

  Technical Notes

  - Framework: Determine which framework the application uses (likely React/Vue/Nuxt based on structure).
  - Dependencies: Review package.json for core dependencies and version pinning.
  - API Integration: If applicable, document any external services the project connects to.

  Memory & Documentation Practices

  - Memory: Use memory for facts that persist across conversations (compliance requirements, team policies, external resource locations).   
  - Not Save to Memory: Code patterns, architecture decisions, file paths, or git history — these should be derivable from current state.   
  - Documentation: Store architectural decisions, team policies, and project guidelines in CLAUDE.md.

  External Systems

  - Linear: Track bug tickets and feature requests (if applicable).
  - Slack: Team communication and feedback channels.
  - CI/CD: GitHub Actions or GitLab CI for deployment pipelines.

  Common Tasks

  ┌───────────────────────────┬───────────────────────────────────────┐
  │           Task            │            Command / Step             │
  ├───────────────────────────┼───────────────────────────────────────┤
  │ Run tests                 │ npm test                              │
  ├───────────────────────────┼───────────────────────────────────────┤
  │ Start development server  │ npm run dev or similar                │
  ├───────────────────────────┼───────────────────────────────────────┤
  │ Build for production      │ npm run build                         │
  ├───────────────────────────┼───────────────────────────────────────┤
  │ Format code               │ npm run format (if applicable)        │
  ├───────────────────────────┼───────────────────────────────────────┤
  │ Check for security issues │ Review dependencies and use npm audit │
  └───────────────────────────┴───────────────────────────────────────┘

  Contact & Escalation

  - Primary Developer: mar1fatih (git user)
  - Team Slack Channel: [Insert Slack channel name]
  - Sprint/Planning: [Insert sprint management tool]