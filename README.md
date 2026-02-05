# 🎭 Playwright Automation Tests (Web + API)

Projekt demonstracyjny **Automation Tester (Junior)** oparty o **Playwright + TypeScript**.  
Repozytorium pokazuje podstawy automatyzacji testów **UI (web)** oraz **API**, z zachowaniem czytelnej struktury i dobrych praktyk — bez overengineeringu.

---

## Technologie
- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- npm

---

## Zakres testów

### Testy UI (Web)
- logowanie użytkownika
- walidacja poprawnych / niepoprawnych danych
- podstawowe asercje widoczności i nawigacji
- Page Object Model w uproszczonej formie (BasePage)

### Testy API
- testy endpointów REST
- walidacja statusów odpowiedzi
- walidacja danych w response body

---

##  Jak uruchomić projekt lokalnie

### 1 Klonowanie repozytorium

git clone [<URL_REPOZYTORIUM>](https://github.com/Sundzaj/portfolio.git)

### 2 Instalacja zależności
npm install

### 3 Instalacja przeglądarek Playwright
npx playwright install

### 4 Uruchamianie testów

npx playwright test
