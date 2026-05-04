const major = Number(process.version.slice(1).split('.')[0])
if (major < 20 || Number.isNaN(major)) {
  console.error(
    '\n[lanima-web] Node.js 20+ est requis (Vite 8). Version actuelle :',
    process.version,
    '\n\n→ Depuis ce dossier :  nvm use\n→ Puis :                 npm run pages:deploy\n',
  )
  process.exit(1)
}
