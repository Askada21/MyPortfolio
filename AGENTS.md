# Repository workflow

The user requires this workflow for every completed task in this repository:

1. Complete one requested task and run the relevant build, lint, and formatting checks.
2. Review `git status` and the diff. Preserve unrelated user changes.
3. Stage only files belonging to that task and create a descriptive commit.
4. Immediately push to the current tracked branch (`origin/main` when working on `main`).
5. Verify the push succeeded before starting the next task.

The user authorizes these commits and pushes within the requested scope; do not ask again for each task. Never force-push, rewrite history, or overwrite another person's work. If a commit or push fails, investigate safely; stop and explain if it cannot be resolved safely. Report every task's commit hash and push result at completion.
