## Deploy til Netlify

Siden ligger på https://colorpalette-project.netlify.app og er uploadet med træk og slip.

1. Kør `npm run build`
2. Netlify → Projects → colorpalette-project → Project overview
3. Træk `dist`-mappen ind i feltet "Already built it?"

### API

Colormind-API'et kører kun over http, så kaldet går gennem `/api/`:

- Lokalt sender proxyen i `vite.config.ts` kaldet videre
- På Netlify sender `public/_redirects` kaldet videre

Ingen af de to filer må slettes.
