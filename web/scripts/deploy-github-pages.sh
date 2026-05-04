#!/usr/bin/env bash
# Exécuté UNIQUEMENT en local (ex. ton Mac) avant `gh-pages` envoie le dossier dist.
# GitHub Pages ne lance pas ce fichier : il ne sert que les fichiers poussés sur la branche gh-pages.
# Le source ~/.zshrc sert à charger nvm / PATH sur une session non-interactive (terminal IDE, etc.).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR/.."

if [[ -f "${HOME}/.zshrc" ]]; then
  # shellcheck disable=SC1090
  source "${HOME}/.zshrc" 2>/dev/null || true
fi

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  source "$NVM_DIR/nvm.sh"
fi

if command -v nvm &>/dev/null; then
  nvm use 2>/dev/null || true
fi

npm run build:github
npx --yes gh-pages@6 -d dist --dotfiles
