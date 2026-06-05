# Project: Dark Dark Forest

A static curriculum site served by GitHub Pages from the **repository root**
on the `main` branch. `index.html` must stay at the root.

## Workflow rule (standing instruction from the owner)

**Always merge to `main` and push when work is done. Always.**

After completing any change on a feature branch, finish by:
1. `git checkout main`
2. `git pull origin main`
3. `git merge <feature-branch> --no-edit`
4. `git push -u origin main`

Do this automatically without being asked. The site only goes live once it's
on `main`, so unmerged work is not "done".
