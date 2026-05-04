const major = Number(process.version.slice(1).split('.')[0])
if (major < 20 || Number.isNaN(major)) {
  console.error(
    '\n[lanima-web] Node.js 20+ est requis (Vite 8). Version actuelle :',
    process.version,
    '\n\n→ Dans ton terminal macOS/zsh :\n',
    '   source ~/.zshrc\n',
    '   cd web\n',
    '   nvm use\n',
    '   npm run pages:deploy\n',
  )
  process.exit(1)
}
