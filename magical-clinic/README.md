# Magical Clinic — strona internetowa

Strona magicalclinic.pl zbudowana w Vite + React + TypeScript + Tailwind CSS. Wdrażana automatycznie
na Vercel po każdym pushu do gałęzi `main` na GitHubie.

## Jak uruchomić stronę lokalnie

Wymagany [Node.js](https://nodejs.org) (LTS).

```bash
cd magical-clinic
npm install       # tylko za pierwszym razem / po zmianie zależności
npm run dev
```

Otwórz **http://localhost:5173** w przeglądarce. Zmiany w plikach `.tsx`/`.ts`/`.css` odświeżają się
automatycznie (hot reload) — nie trzeba restartować serwera.

## Gdzie edytować treść

| Co chcesz zmienić | Plik |
| --- | --- |
| Teksty, zabiegi, ceny, dane kontaktowe, opinie | `src/data/services.ts` |
| Kolory, fonty | `src/index.css` |
| Menu górne | `src/components/Navbar.tsx` |
| Stopka | `src/components/Footer.tsx` |
| Strona główna | `src/pages/Home.tsx` |
| O nas | `src/pages/About.tsx` |
| Oferta (katalog zabiegów) | `src/pages/Offer.tsx` |
| Cennik | `src/pages/Pricing.tsx` |
| Nasz zespół | `src/pages/Team.tsx` |
| Kontakt | `src/pages/Contact.tsx` |

## Jak wprowadzić zmianę i wysłać ją na żywą stronę

1. Edytuj pliki, sprawdź efekt na `npm run dev`
2. Upewnij się, że build przechodzi bez błędów: `npm run build`
3. Wypchnij zmiany na GitHub:

   ```bash
   git add -A
   git commit -m "Opis zmiany"
   git push origin main
   ```

4. Vercel automatycznie wykrywa push, buduje i wdraża nową wersję — zwykle w ciągu ~1 minuty,
   bez żadnej dodatkowej akcji. Po chwili zmiana jest widoczna na **magicalclinic.pl**.

## Zrzuty ekranu (Playwright)

Do szybkiego podglądu wszystkich podstron bez otwierania przeglądarki:

```bash
npm run screenshot
```

Zapisuje pliki PNG do folderu `screenshots/` (wymaga uruchomionego `npm run dev` w tle oraz
zainstalowanego Playwrighta: `npx playwright install chromium`).
