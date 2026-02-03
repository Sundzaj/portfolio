# 🎭 Playwright Automation Tests (Web + API)

Projekt demonstracyjny **Automation Tester (Junior)** oparty o **Playwright + TypeScript**.  
Repozytorium pokazuje podstawy automatyzacji testów **UI (web)** oraz **API**, z zachowaniem czytelnej struktury i dobrych praktyk — bez overengineeringu.

---

## 🧪 Technologie
- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- npm

---

## 🎯 Zakres testów

### ✅ Testy UI (Web)
- logowanie użytkownika
- walidacja poprawnych / niepoprawnych danych
- podstawowe asercje widoczności i nawigacji
- Page Object Model w uproszczonej formie (BasePage)

### ✅ Testy API
- testy endpointów REST
- walidacja statusów odpowiedzi
- walidacja danych w response body

---

## ▶️ Jak uruchomić projekt lokalnie

### 1️⃣ Klonowanie repozytorium

git clone <URL_REPOZYTORIUM>
cd web-tests

Instalacja zależności
npm install

Instalacja przeglądarek Playwright
npx playwright install

Uruchamianie testów

npx playwright test
