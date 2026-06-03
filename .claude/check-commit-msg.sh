#!/bin/sh
# PreToolUse(Bash) guard: enforce the Dark-Dark-Forest commit convention.
# Convention (see CLAUDE.md): lowercase "area: what changed"
#   e.g.  voice: sharpen three-pillars opening
# Blocks (exit 2) a `git commit` whose inline message clearly breaks the
# format and tells Claude how to fix it. Lenient: anything it can't parse
# (editor commits, amends, heredoc bodies) is allowed through.

input=$(cat)
cmd=$(printf '%s' "$input" | jq -r '.tool_input.command // empty' 2>/dev/null)
[ -z "$cmd" ] && exit 0

echo "$cmd" | grep -q "git commit" || exit 0
echo "$cmd" | grep -Eq -- "-m([[:space:]]|=|'|\")" || exit 0
echo "$cmd" | grep -q -- "--no-edit" && exit 0

# Pass if a quoted 'area: ' style subject appears right after -m.
if echo "$cmd" | grep -Eq -- "-m[[:space:]=]*['\"][a-z0-9][a-z0-9-]*: "; then
  exit 0
fi

echo "Commit message doesn't match the convention 'area: what changed' (lowercase, e.g. voice: sharpen opening). See CLAUDE.md. Fix the -m message and retry." >&2
exit 2
