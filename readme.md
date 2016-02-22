# wfirma.pl Enhancer

Rozszerzenie do przeglądarki Google Chrome dodające funkcjonalności do systemu [wfirma.pl](http://wfirma.pl/).

Aktualna funkcjonalność:

  * ładowanie plików metodą przenieś i upuść. Jeżeli rekordy w aktualnie wyświetlanej tabeli mogą mieć dołączane pliki
    dokumentów (tj. po wciśnięciu prawym przyciskiem myszy pokaże się menu kontekstowe z pozycją 'Dokumenty'), to można
    szybko załadować pliki z dysku lokalnego przeciągając je na dany wiersz tabeli. Skrypt wykonuje następujące operacje:

      * kliknij prawym przyciskiem myszy na wiersz, na który upuszczono plik,
      * wybierz pozycję 'Dokumenty' z menu kontekstowego,
      * wybierz akcję 'Dodaj dokument' w oknie 'Dokumenty powiązane z wierszem',
      * przejdź do zakładki 'Na podstawie pliku' w oknie 'Dodawanie dokumentu',
      * symuluj upuszczenie wcześniej upuszczonego pliku, co uruchomi jego ładowanie na serwer,
      * wciśnij przycisk 'Zapisz' (jeżeli podczas upuszczania pliku trzymano klawisz CTRL, ALT lub SHIFT, to przycisk
        'Zapisz' nie jest wciskany i można przed wysłaniem zmienić nazwę lub datę dokumentu).

## Instalacja

1. Sklonuj repozytorium lub [pobierz je](https://github.com/morkai/wfirma-enhancer/zipball/master) i rozpakuj.
2. W Google Chrome przejdź do Rozszerzeń ([chrome://extensions/](chrome://extensions/)).
3. Zaznacz opcję 'Tryb programisty'.
4. Wciśnij przycisk 'Wczytaj rozszerzenie bez pakietu...'.
5. Wybierz folder `wfirma-enhancer`.

lub zajrzyj do [oficjalnej instrukcji ładowania niespakowanych rozszerzeń](https://developer.chrome.com/extensions/getstarted.html#unpacked).

## Licencja

[MIT License](https://raw.github.com/morkai/wfirma-enhancer/master/license.md).
Copyright (c) 2016, Łukasz Walukiewicz (lukasz@miracle.systems)
