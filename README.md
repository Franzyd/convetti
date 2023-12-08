# Convetti

## Mała aplikacja dla konwentów

**Funkcje:**

* Lista programu z aktualizacjami czasowymi
* Wyświetlacz filmików YouTube
* Wyświetlacz obrazków

## Użyte narzędzia i oprogramowanie

* React i Next.js
* react-player

# Instalacja

**Wymagania:** Node.js

1. Pobranie repozytorium
2. W rozpakowanym folderze, wywołanie komendy `npm run build`
3. Wywołanie komendy `npm run start`
4. Wejście na http://localhost:3000/

# Zmiana treści
## Lista wydarzeń

W folderze `app/json/` znajduje się plik `eventList.json`, którego należy zedytować:

```json
{
    "events": [
        {
        "startTime": 1000, # Godzina napisana w formacie 24h
        "endTime": 1100,
        "title": "Tytuł",
        "host": "Host", # Opcjonalne
        "description": "Opis" # Opcjonalne
        },
        {...} # następne eventy
    ]
}
```

Po tym stronę należy odświeżyć.

# Lista filmików

W folderze `app/json/` znajduje się plik `videoList.json`, w którym można dodawać linki do filmików na YouTubie:
``` json
[
    "https://youtu.be/1pDM6fQUfJs",
    "https://youtu.be/GNeyqFfXf7k",
    "...",...
]
```

Po tym stronę należy odświeżyć.

# Lista obrazków

Do folderu `public/slideshow/` należy wrzucić odpowiednie obrazki w formacie .png lub .jpg. Kolejność zdjęć jest alfabetyczna po nazwie pliku.

---
Prosty diagram strony znajduje się w folderze `projekt/`