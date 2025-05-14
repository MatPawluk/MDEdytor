# Edytor Markdown

Intuicyjny edytor Markdown z podglądem na żywo, stworzony przy użyciu Vue 3, TypeScript i Vite.

![Screenshot edytora](/screenshot.png)

## Funkcje

- **Edycja i podgląd w czasie rzeczywistym** - natychmiastowy podgląd wprowadzanych zmian
- **Zarządzanie dokumentami**:
  - Tworzenie nowych dokumentów
  - Edycja nazw dokumentów
  - Zapisywanie zawartości dokumentów
  - Usuwanie dokumentów
- **Interfejs przyjazny użytkownikowi**:
  - Tryb jasny/ciemny
  - Responsywny design działający na urządzeniach mobilnych i desktopowych
  - Możliwość ukrycia/pokazania panelu bocznego
  - Tryb pełnoekranowego podglądu
- **Formatowanie Markdown**:
  - Nagłówki (poziomy 1-6)
  - Pogrubienie, kursywa, przekreślenie
  - Listy numerowane i nienumerowane
  - Linki i obrazy
  - Cytaty blokowe
  - Kod w linii i bloki kodu
  - Tabele
  - Poziome linie
  - Listy zadań
- **Eksport do PDF** - możliwość eksportowania dokumentów do formatu PDF
- **Ściągawka Markdown** - wbudowana ściągawka z najważniejszymi elementami składni Markdown
- **Automatyczne zapisywanie** - wszystkie zmiany są automatycznie zapisywane w localStorage przeglądarki


## Przechowywanie danych

Aplikacja wykorzystuje localStorage przeglądarki do przechowywania dokumentów. Oznacza to, że:
- Dokumenty są zapisywane lokalnie w Twojej przeglądarce
- Dane nie są synchronizowane między urządzeniami
- Wyczyszczenie danych przeglądarki spowoduje utratę dokumentów

## Skróty klawiaturowe

Edytor obsługuje podstawowe skróty klawiaturowe:

- **Ctrl+S** - Ręczne zapisanie dokumentu (choć zapis następuje automatycznie)
- **Tab** - Wstawienie wcięcia w edytorze

## Technologie

- [Vue 3](https://vuejs.org/) - framework JavaScript
- [TypeScript](https://www.typescriptlang.org/) - typowanie statyczne
- [Pinia](https://pinia.vuejs.org/) - zarządzanie stanem aplikacji
- [marked](https://marked.js.org/) - parsowanie Markdown do HTML
- [DOMPurify](https://github.com/cure53/DOMPurify) - sanityzacja HTML
- [Vite](https://vitejs.dev/) - środowisko deweloperskie

## Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Kompilacja do produkcji
npm run build

# Lint
npm run lint
```

## Konfiguracja

Zobacz [Dokumentację konfiguracji Vite](https://vitejs.dev/config/).

## Licencja

MIT