#!/usr/bin/env bash
# Stops the stale Turbopack dev singleton for THIS repo, then starts Next on a fixed port
# so you always open the same URL and never fight ux-clarity on :3000.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PORT="${RECAPLY_DEV_PORT:-3333}"
LOCK="$ROOT/.next/dev/lock"

if [[ -f "$LOCK" ]]; then
  PID="$(node -e "try { console.log(JSON.parse(require('fs').readFileSync(process.argv[1])).pid) } catch (e) {}" "$LOCK" 2>/dev/null || true)"
  if [[ -n "${PID:-}" ]] && [[ "$PID" =~ ^[0-9]+$ ]]; then
    kill "$PID" 2>/dev/null || true
    sleep 0.4
    kill -9 "$PID" 2>/dev/null || true
  fi
  rm -f "$LOCK"
fi

exec npx next dev --port "$PORT" --hostname 127.0.0.1
