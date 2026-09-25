import adrianaPhoto from '../assets/team/adriana-lukomska.jpg'
import rafalPhoto from '../assets/team/rafal-berner.jpg'

export interface Service {
  name: string
  description: string
  details?: string[]
  priceExample?: string
}

export interface ServiceCategory {
  id: string
  title: string
  intro: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'medycyna-estetyczna',
    title: 'Medycyna estetyczna',
    intro:
      'Spektrum nowoczesnych i innowacyjnych zabiegów poprawiających wygląd i samopoczucie pacjentów.',
    services: [
      {
        name: 'Osocze bogatopłytkowe (PRP)',
        description:
          'Naturalny zabieg biostymulacji polegający na wstrzyknięciu osocza bogatopłytkowego z własnej krwi pacjenta.',
        details: [
          'Efekty: działanie liftingujące, stymulacja regeneracji, zwiększenie elastyczności, poprawa ukrwienia, wygładzenie zmarszczek',
          'Wskazania: oznaki starzenia, skóra wymagająca regeneracji, skóra wrażliwa, trądzik różowaty, przyspieszenie gojenia',
          'Przebieg: 3 etapy — pobranie krwi, separacja, podanie preparatu',
          'Przeciwwskazania: choroby krwi, nowotwory, choroby autoimmunologiczne, ciąża',
        ],
        priceExample: '400–600 zł',
      },
      {
        name: 'Fibryna bogatopłytkowa (PRF)',
        description: 'Naturalny koncentrat komórkowy pozyskiwany z krwi pacjenta do rewitalizacji skóry.',
        details: [
          'Efekty: redukcja zmarszczek, spłycenie bruzd, redukcja cieni pod oczami, poprawa napięcia, zahamowanie wypadania włosów',
          'Wskazania: zmarszczki, bruzdy nosowo-wargowe, cienie pod oczami, utrata jędrności, nadmierne wypadanie włosów',
          'Przeciwwskazania: choroby krwi, nowotwory, cukrzyca, choroby autoimmunologiczne, ciąża, opryszczka',
        ],
        priceExample: '450–650 zł',
      },
      {
        name: 'Mezoterapia igłowa',
        description: 'Zabiegi polegające na płytkich nakłuciach i podaniu odżywczych preparatów.',
        details: [
          'Efekty: nawilżenie skóry, wygładzenie, redukcja pierwszych oznak starzenia',
          'Wskazania: sucha skóra, pierwsze oznaki starzenia, zmarszczki na szyi i dekolcie, bruzdy nosowo-wargowe',
          'Czas trwania: ok. 20 minut, seria min. 3 zabiegi w odstępach 2–4 tygodni',
          'Przeciwwskazania: ciąża, opryszczka, stany zapalne',
        ],
        priceExample: '300–500 zł',
      },
      {
        name: 'Mezobotoks / Babybotoks',
        description: 'Połączenie mezoterapii z bardzo małymi dawkami toksyny botulinowej.',
        details: [
          'Efekty: naturalne odmłodzenie, zmniejszenie fałd, delikatne usunięcie defektów',
          'Wskazania: drobne zmarszczki, zmęczona skóra, okolice delikatne',
          'Czas trwania: ok. 30 minut — efekt tymczasowy, wymaga powtarzania',
        ],
        priceExample: '500–700 zł',
      },
      {
        name: 'Lipoliza iniekcyjna',
        description: 'Zabiegi polegające na wstrzyknięciu preparatu rozpuszczającego komórki tłuszczowe.',
        details: [
          'Efekty: modelowanie sylwetki, redukcja niewielkich nadmiarów tkanki tłuszczowej',
          'Wskazania: fałdy tłuszczu na brzuchu, podwójny podbródek, poduszeczki tłuszczowe, byczy kark',
          'Seria zabiegów: 3–6 zabiegów co 4 tygodnie, do 30 minut, natychmiastowy powrót do aktywności',
        ],
        priceExample: '400–600 zł / sesja',
      },
      {
        name: 'Leczenie nadpotliwości',
        description: 'Wstrzyknięcia toksyny botulinowej blokujące wydzielanie acetylocholiny.',
        details: [
          'Efekty: zmniejszenie pocenia się na 6–10 miesięcy (pachy/stopy), 4–6 miesięcy (dłonie)',
          'Wskazania: nadmierne pocenie się dłoni, pach, stóp',
          'Diagnostyka: test Minora (jodowo-skrobiowy), zabieg trwa kilkanaście minut do godziny',
          'Przeciwwskazania: zaburzenia przewodnictwa nerwowo-mięśniowego, ciąża',
        ],
        priceExample: '1200–1800 zł',
      },
      {
        name: 'Leczenie bruksizmu',
        description: 'Wstrzyknięcia toksyny botulinowej w mięśnie żwacza.',
        details: [
          'Efekty: zmniejszenie zgrzytania zębami, redukcja bólów mięśni',
          'Wskazania: szczękościsk, zgrzytanie zębami podczas snu',
          'Czas trwania: ok. 15 minut, efekt utrzymuje się 6 miesięcy — bezbolesne, bez rekonwalescencji',
        ],
        priceExample: '800–1200 zł',
      },
      {
        name: 'Skleroterapia',
        description: 'Nieinwazyjna metoda leczenia żylaków poprzez wstrzyknięcie środka obliterującego.',
        details: [
          'Efekty: zamknięcie i zarośnięcie żył',
          'Wskazania: żylaki kończyn dolnych, naczynka, rozszerzenia żylne',
          'Czas trwania: 20–30 minut, gojenie 4 tygodnie (naczynka) / 4–6 miesięcy (duże żyły)',
          'Po zabiegu: 30 min spaceru, opatrunek uciskowy 7–14 dni',
          'Przeciwwskazania: niedokrwienie kończyn, ciąża, przebyte zmiany zakrzepowe',
        ],
        priceExample: '300–500 zł / sesja',
      },
      {
        name: 'Stymulacja włosów, leczenie łysienia',
        description: 'Mezoterapia skóry głowy z podaniem specjalistycznych preparatów.',
        details: [
          'Efekty: zahamowanie wypadania włosów, wzmocnienie, zwiększenie grubości',
          'Wskazania: wypadanie włosów, łysienie androgenetyczne',
          'Znieczulenie opcjonalne (spray/krem), masaż po zabiegu, działanie preparatów przez miesiąc',
        ],
        priceExample: '350–500 zł',
      },
      {
        name: 'Zabieg plazmą',
        description: 'Bezinwazyjny lifting powiek za pomocą mikrowiązek plazmy.',
        details: [
          'Efekty: wygładzenie zmarszczek, lifting powiek, odmłodzenie spojrzenia',
          'Wskazania: opadające powieki, zmarszczki, oznaki starzenia wokół oczu, zmarszczki nad górną wargą, rozstępy, blizny',
          'Czas trwania: 20–30 minut, znieczulenie kremem miejscowym, pełny remodeling po 4–5 tygodniach',
        ],
        priceExample: '500–900 zł',
      },
      {
        name: 'Laserowe usuwanie naczynek i włókniaków',
        description: 'Precyzyjna wiązka światła lasera wypala zmianę skórną.',
        details: [
          'Wskazania: zmiany naczyniowe, naczyniaki, włókniaki, rumień',
          'Efekt widoczny natychmiast, brak blizn, krótka rekonwalescencja — jednorazowy, szybki zabieg',
        ],
        priceExample: '250–450 zł',
      },
      {
        name: 'Usuwanie zmarszczek toksyną botulinową',
        description: 'Blokowanie impulsów nerwowych w mięśniach mimicznych.',
        details: [
          'Efekty: wygładzenie zmarszczek, napięcie skóry',
          'Wskazania: zmarszczki horyzontalne czoła, zmarszczki między brwiami, kurze łapki',
          'Czas trwania: kilkanaście minut, bez znieczulenia',
          'Przeciwwskazania: ciąża, przeziębienie, zaburzenia nerwowo-mięśniowe',
        ],
        priceExample: '600–900 zł',
      },
      {
        name: 'Wypełnienie zmarszczek kwasem hialuronowym',
        description: 'Wstrzyknięcie kwasu hialuronowego w głąb naskórka.',
        details: [
          'Efekty: wygładzenie zmarszczek, nawilżenie, odmłodzenie wyglądu',
          'Wskazania: bruzdy nosowo-wargowe, zmarszczki w różnych rejonach twarzy',
          'Efekt natychmiastowy, utrzymuje się 7–9 miesięcy',
          'Przeciwwskazania: ciąża, opryszczka, choroby autoimmunologiczne',
        ],
        priceExample: '800–1200 zł',
      },
      {
        name: 'Powiększanie i modelowanie ust',
        description: 'Wstrzyknięcie kwasu hialuronowego do modelowania ust.',
        details: [
          'Efekty: powiększenie, poprawa kształtu, nawilżenie, elastyczność',
          'Wskazania: małe usta, asymetria, efekty starzenia',
          'Czas trwania: ok. 15 minut (wizyta 60 minut), znieczulenie miejscowe, efekt 7–9 miesięcy',
          'Przeciwwskazania: ciąża, stany zapalne, choroby autoimmunologiczne',
        ],
        priceExample: '900–1300 zł',
      },
      {
        name: 'Wolumetria twarzy (poprawa owalu)',
        description: 'Modelowanie konturów twarzy za pomocą kwasu hialuronowego.',
        details: [
          'Efekty: podniesienie opadających policzków, uwydatnienie kości policzkowych, poprawa owalu',
          'Materiał: gęstszy kwas hialuronowy w głębokie warstwy skóry',
          'Czas trwania: ok. 20 minut, efekt natychmiastowy, utrzymuje się 12–18 miesięcy',
        ],
        priceExample: '1200–2000 zł',
      },
      {
        name: 'Lipotransfer twarzy',
        description: 'Przeszczep własnej tkanki tłuszczowej do twarzy.',
        details: [
          'Efekty: naturalne wypełnienie, odmłodzenie, rewitalizacja',
          'Wskazania: bruzdy nosowo-wargowe, dolina łez, modelowanie twarzy',
          'Zalety: naturalne wyniki, brak ryzyka alergii — strata objętości ok. 30–40% przeszczepionego materiału',
          'Przeciwwskazania: choroby nowotworowe, zaburzenia metaboliczne',
        ],
        priceExample: '3500–6000 zł',
      },
      {
        name: 'Korekta kształtu nosa i brody',
        description: 'Modelowanie nosa i brody za pomocą kwasu hialuronowego.',
        details: [
          'Wskazania: dysproporcje nosa, kształt brody, nierówności',
          'Materiał: gęsty kwas hialuronowy — naturalna korekta bez chirurgii, efekt 18–24 miesiące',
        ],
        priceExample: '1000–1600 zł',
      },
      {
        name: 'Wypełnienie bruzd nosowo-wargowych',
        description: 'Zastrzyki kwasu hialuronowego wzdłuż linii nosa.',
        details: [
          'Efekty: wygładzenie zmarszczek, poprawa owalu twarzy — widoczne natychmiast, utrzymuje się 4–12 miesięcy',
          'Wskazania: widoczne bruzdy od nosa do ust',
          'Przeciwwskazania: trądzik, opryszczka, niedawne zabiegi',
        ],
        priceExample: '900–1300 zł',
      },
      {
        name: 'Endolifting twarzy (lifting intradermalny)',
        description: 'Bezinwazyjny lifting za pomocą radiofrekwencji intradermalnej.',
        details: [
          'Efekty: napięcie skóry do 30%, remodeling owalu, eliminacja zmarszczek',
          'Wskazania: zwiotczenie skóry twarzy i szyi, łokci, kolan, ramion, brzucha',
          'Czas trwania: 15–60 minut, temperatura 40–57°C, rekonwalescencja 2–3 dni',
          'Zwykle zabieg jednorazowy, opcjonalnie 1–3 sesje co 3 miesiące',
        ],
        priceExample: '800–1500 zł',
      },
      {
        name: 'Nici PDO stymulujące',
        description: 'Wprowadzenie cienkich, biorozpuszczalnych nici (polidioksan) pod skórę do stymulacji kolagenu.',
        details: [
          'Efekty: poprawa napięcia, wygładzenie zmarszczek, rozjaśnienie skóry',
          'Wskazania: zmarszczki, utrata elastyczności, poprawa napięcia',
          'Efekt pełny po 2–3 miesiącach',
        ],
        priceExample: '600–1000 zł',
      },
      {
        name: 'Nici haczykowe (lifting bez skalpela)',
        description: 'Grubsze nici z haczykami (polikaprolakton) do podniesienia zwiotczałej skóry.',
        details: [
          'Efekty: zmniejszenie linii i zmarszczek, poprawa owalu, zwiększenie napięcia',
          'Wskazania: opadające brwi, wiotka tkanka, opadające policzki, fałdy nosowo-wargowe',
          'Czas trwania: 30–60 minut, znieczulenie miejscowe',
          'Zalecenie: spanie na plecach przez 2 tygodnie po zabiegu',
        ],
        priceExample: '1500–3000 zł',
      },
      {
        name: 'Stymulatory tkankowe',
        description: 'Naturalne metody stymulacji regeneracji tkanek skórnych.',
        details: [
          'Rodzaje: polinukleotydy, kolagen, kwas polimlekowy, hydroksyapatyt',
          'Efekty: redukcja zmarszczek, eliminacja blizn, poprawa kondycji skóry',
          'Wskazania: zmarszczki, blizny potrądzikowe, przebarwienia, rewitalizacja',
          'Przeciwwskazania: ciąża, aktywne infekcje, choroby autoimmunologiczne',
        ],
        priceExample: '500–900 zł',
      },
    ],
  },
  {
    id: 'chirurgia-estetyczna',
    title: 'Chirurgia estetyczna',
    intro: 'Zabiegi chirurgiczne wykonywane w znieczuleniu miejscowym przez doświadczony zespół.',
    services: [
      {
        name: 'Plastyka powiek górnych (blefaroplastyka)',
        description: 'Chirurgiczna korekta nadmiaru skóry na górnych powiekach.',
        details: [
          'Efekty: przywrócenie napięcia, młodzieńczy wygląd, prawidłowy kontur powiek',
          'Wskazania: nadmiar skóry, rozciągnięcie powiek, obniżone powieki, ograniczenie pola widzenia',
          'Czas trwania: ok. godziny, znieczulenie miejscowe',
          'Efekty estetyczne i funkcjonalne: poprawa widzenia, eliminacja wrażenia zmęczenia',
        ],
        priceExample: '4000–7000 zł',
      },
    ],
  },
  {
    id: 'modelowanie-sylwetki',
    title: 'Modelowanie sylwetki',
    intro: 'Zabiegi wyszczuplające i modelujące ciało z wykorzystaniem najnowszych technologii.',
    services: [
      {
        name: 'Lipotransfer ciała',
        description: 'Przeszczep własnej tkanki tłuszczowej z jednego obszaru w inny.',
        details: [
          'Efekty: wyszczuplenie i modelowanie, naturalne kształty, rewitalizacja',
          'Wskazania: wyszczuplenie sylwetki, modelowanie piersi, pośladków, dłoni, łydek',
          'Źródła tkanki: brzuch, uda, pośladki, biodra — strata objętości ok. 30–40%',
          'Czas trwania: kilkadziesiąt minut do 2 godzin, znieczulenie miejscowe',
        ],
        priceExample: '5000–10 000 zł',
      },
      {
        name: 'Liposukcja',
        description: 'Usunięcie nadmiaru tkanki tłuszczowej z wybranych miejsc na ciele.',
        details: [
          'Wskazania: lokalne nagromadzenia tłuszczu na biodrach, udach, brzuchu, piersiach (mężczyźni), plecach, kolanach, pachach, ramionach',
          'Po zabiegu: ubranko uciskowe, endermologia, lekka aktywność',
          'Efekt widoczny od razu, ostateczny po kilku miesiącach',
        ],
        priceExample: '4000–9000 zł',
      },
      {
        name: 'Modelowanie ciała kwasem hialuronowym',
        description: 'Modelowanie ciała za pomocą wstrzyknięć kwasu hialuronowego.',
        details: [
          'Wskazania: powiększanie piersi, modelowanie pośladków, bryczesy, kolana, łydki',
          'Zalety: bezinwazyjne, brak blizn, możliwość szybkiego powrotu do aktywności',
          'Efekt utrzymuje się 13–18 miesięcy, wymaga powtarzania',
        ],
        priceExample: '3000–6000 zł',
      },
      {
        name: 'Modelowanie ciała kwasem polimlekowym',
        description: 'Modelowanie za pomocą kwasu polimlekowego (PDLLA) połączonego z kwasem hialuronowym.',
        details: [
          'Produkt: Lenisna — 170 mg PDLLA + 30 mg kwasu hialuronowego',
          'Wskazania: powiększanie piersi, modelowanie pośladków, eliminacja ubytków tkankowych',
          'Zalety: hybrydowy preparat łączący natychmiastowy efekt i długotrwałą stymulację kolagenu',
        ],
        priceExample: '3500–6000 zł',
      },
      {
        name: 'Endolifting intradermalny ciała',
        description: 'Bezinwazyjny lifting za pomocą radiofrekwencji intradermalnej.',
        details: [
          'Efekty: napięcie skóry, eliminacja zmarszczek, redukcja tkanki tłuszczowej',
          'Wskazania: zwiotczenie skóry twarzy, szyi, łokci, kolan, ramion, brzucha',
          'Temperatura 40–57°C, czas trwania 15–60 minut',
          'Efekt trwały do kilku lat, rekonwalescencja 2–3 dni, opaska uciskowa do 3 tygodni',
        ],
        priceExample: '1200–2000 zł',
      },
    ],
  },
  {
    id: 'laseroterapia',
    title: 'Laseroterapia',
    intro: 'Zaawansowane technologie laserowe do odmładzania, usuwania przebarwień i regeneracji skóry.',
    services: [
      {
        name: 'Laser frakcyjny (regeneracja i przebudowa skóry)',
        description: 'Zaawansowany laser ablacyjny Er:YAG (2940 nm) do intensywnego odmłodzenia.',
        details: [
          'Efekty: redukcja blizn, rozstępów, wygładzenie zmarszczek, poprawa napięcia',
          'Wskazania: blizny potrądzikowe/pourazowe, wiotkość skóry, fotostarzenie, przebarwienia',
          'Efekty dodatkowe: zwężenie porów, wyrównanie kolorytu, rozjaśnienie',
        ],
        priceExample: '600–1000 zł',
      },
      {
        name: 'Laserowe leczenie chrapania (NightLase)',
        description: 'Procedura NightLase™ z laserem Er:YAG do usztywnienia tkanek gardła.',
        details: [
          'Efekty: zmniejszenie chrapania, poprawa jakości snu, eliminacja bezdechów',
          'Wskazania: chrapanie spowodowane wiotkością tkanek, zaburzenia snu',
          'Czas trwania: ok. 15 minut, bez znieczulenia, zwykle 2–3 zabiegi',
          'Zalety: bezoperacyjne, bezpieczne, bez rekonwalescencji',
        ],
        priceExample: '500–800 zł / sesja',
      },
      {
        name: 'Laserowe leczenie rumienia',
        description: 'Leczenie rozszerzonych naczyń krwionośnych laserem.',
        details: [
          'Wskazania: rumień, rozszerzone naczynka, trądzik różowaty',
          'Czas trwania: 15–30 minut, bezbolesne, min. 2 zabiegi',
          'Po zabiegu: krem regenerujący, zakaz sauny i solarium — możliwe czasowe pociemnienie skóry',
        ],
        priceExample: '300–500 zł / sesja',
      },
      {
        name: 'Laserowe zamykanie naczynek',
        description: 'Precyzyjna wiązka lasera Nd:YAG (1064 nm) do zamykania teleangiektazji.',
        details: [
          'Wskazania: pajączki naczyniowe, teleangiektazje, naczyniaki (rubinowe, gwiaździste, płaskie)',
          'Czas trwania: 15–45 minut',
          'Gojenie: małe naczynka — jeden zabieg, większe — seria zabiegów co 6 tygodni',
        ],
        priceExample: '300–500 zł',
      },
      {
        name: 'Laserowe usuwanie przebarwień skóry',
        description: 'Usuwanie zmian barwnikowych za pomocą lasera Er:YAG.',
        details: [
          'Wskazania: przebarwienia różne, melasma, piegi, plamy posłoneczne',
          'Mechanizm: rozkład barwnika na mniejsze cząsteczki usuwane przez system immunologiczny',
          'Bezpieczeństwo wysokie — fala pochłaniana tylko przez melaninę',
        ],
        priceExample: '250–450 zł',
      },
      {
        name: 'Laserowy peeling (resurfacing)',
        description: 'Kontrolowane uszkodzenie skóry laserem Er:YAG do regeneracji.',
        details: [
          'Efekty: odkrycie świeżej skóry, wyrównanie tekstury',
          'Technologia: frakcjonowanie — mikrokanały otoczone zdrową tkanką, działanie ablacyjne i termiczne',
          'Stymulacja syntezy kolagenu i elastyny, szybki powrót do codzienności',
        ],
        priceExample: '500–900 zł',
      },
      {
        name: 'Laserowe usuwanie blizn',
        description: 'Eliminacja blizn przy użyciu technologii laserowej.',
        details: [
          'Efekty: spłycenie blizn, poprawa tekstury, wyrównanie z otaczającą skórą',
          'Wskazania: blizny potrądzikowe, pourazowe, pooperacyjne',
        ],
        priceExample: '400–700 zł',
      },
      {
        name: 'Relaksacja rozstępów',
        description: 'Leczenie rozstępów techniką laserową.',
        details: ['Efekty: zmniejszenie widoczności, poprawa tekstury skóry'],
        priceExample: '400–700 zł',
      },
      {
        name: 'Leczenie łysienia laserem',
        description: 'Wykorzystanie światła lasera do stymulacji wzrostu włosów.',
        details: ['Efekty: przyspieszenie wzrostu, wzmocnienie włosów'],
        priceExample: '300–500 zł',
      },
    ],
  },
  {
    id: 'ginekologia-estetyczna',
    title: 'Ginekologia estetyczna',
    intro:
      'Zabiegi laserowe i iniekcyjne poprawiające komfort, zdrowie i estetykę stref intymnych kobiet.',
    services: [
      {
        name: 'Rewitalizacja pochwy',
        description:
          'Zabieg wykonywany laserem Erbowo-Yagowym, przeznaczonym do pracy z najdelikatniejszymi partiami ciała. Polega na ogrzaniu tkanki i zawartego w niej kolagenu, który kurczy się i przebudowuje.',
        details: [
          'Efekty: zwiększenie napięcia i elastyczności pochwy, znaczna poprawa jędrności oraz wzrost satysfakcji seksualnej',
          'Przebieg: do pochwy wprowadzana jest dedykowana głowica, przez którą wiązka lasera naświetla błonę śluzową oraz okolicę przedsionka pochwy',
          'Wskazania: spadek napięcia i rozluźnienie pochwy spowodowane porodami lub procesem starzenia się',
          'Zabiegi wykonywane są w pierwszej połowie cyklu, po menstruacji. Zabieg bezbolesny i bezpieczny, nie wymaga dodatkowych procedur przedzabiegowych',
          'Przeciwwskazania: ciąża, karmienie piersią, choroba nowotworowa, infekcja pochwy, nieprawidłowy wynik cytologii, padaczka, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '1500–2500 zł',
      },
      {
        name: 'Leczenie nietrzymania moczu',
        description:
          'Laseroterapia polegająca na fototermicznym, nieablacyjnym obkurczeniu pochwy laserem Er:YAG z dedykowaną głowicą, wzmacniającym obszar ujścia cewki moczowej, ścianek pochwy oraz powięzi wewnątrzmiednicznej.',
        details: [
          'Efekty: obkurczenie tkanek, zmniejszenie kąta nachylenia cewki moczowej i przywrócenie jej normalnej funkcjonalności',
          'Wskazania: nietrzymanie moczu podczas kichnięcia czy kaszlu, po naturalnym porodzie lub po menopauzie, osłabienie mięśni dna miednicy (mięśni Kegla)',
          'Metoda bezbolesna i mało inwazyjna, nie wymaga znieczulenia',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, padaczka, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '1800–3000 zł',
      },
      {
        name: 'Orgasm Shot (O-shot)',
        description:
          'Nowoczesny zabieg dla kobiet z wykorzystaniem osocza bogatopłytkowego pozyskanego z krwi własnej pacjentki, wstrzykiwanego w okolice łechtaczki i przednią ścianę pochwy.',
        details: [
          'Wskazania: problemy z osiągnięciem orgazmu, ból podczas współżycia, zaburzenia libido',
          'Pomaga w osiągnięciu orgazmu pochwowego, a także łechtaczkowego',
          'Zalety: brak ryzyka immunologicznego, powikłań czy uczuleń, wysoka skuteczność i bezpieczeństwo, zabieg bez skalpela, brak okresu rekonwalescencji',
          'Zabieg wykonywany w znieczuleniu, trwa około 60 minut — po nim pacjentka wraca do codziennych czynności',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '1500–2500 zł',
      },
      {
        name: 'Powiększenie punktu G',
        description:
          'Zabieg wykonywany preparatem kwasu hialuronowego przeznaczonego do wypełnienia okolic intymnych. Wysokie stężenie i lepkość preparatu pozwalają osiągnąć trwały efekt objętościowy.',
        details: [
          'Efekty: poprawa jakości życia intymnego, zwiększenie intensywności doznań podczas stosunku',
          'Wskazania: brak satysfakcji ze stosunku, problem z osiągnięciem orgazmu, zmniejszenie punktu G wraz z upływem czasu',
          'Zabieg bezbolesny, nie wymaga okresu rekonwalescencji',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '1200–2000 zł',
      },
      {
        name: 'Modelowanie warg sromowych',
        description:
          'Zabieg wykonywany preparatem kwasu hialuronowego przeznaczonego do okolic intymnych, umożliwiającym korekcję lipoatrofii oraz wypełnienie tkanek.',
        details: [
          'Wskazania: wiotka i sucha skóra łechtaczki oraz warg sromowych, częste urazy i otarcia, ból w okolicy sromu, uporczywy świąd okolic intymnych',
          'Wskazania c.d.: utrata satysfakcji z pożycia seksualnego, oznaki starzenia się okolic intymnych, plastyka i korekta tkanek, korekta asymetrii, lipoatrofia',
          'Dyskomfort przy jeździe konnej, rowerze, fitnessie i codziennych czynnościach',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '1500–2500 zł',
      },
      {
        name: 'Nawilżanie stref intymnych (PRP i PRF)',
        description:
          'Rewitalizacja pochwy osoczem bogatopłytkowym i fibryną bogatopłytkową — wzmacnia efekt laserowego obkurczania pochwy i laserowego leczenia nietrzymania moczu.',
        details: [
          'Wskazania: suchość pochwy powodująca dyskomfort podczas aktywności seksualnej, wiotka i sucha skóra okolic intymnych, uszkodzenia pochwy po stanach zapalnych lub zabiegach chirurgicznych',
          'Działanie: naturalne wzmocnienie tkanek, przyspieszenie regeneracji, przywrócenie prawidłowego ukrwienia, nawilżenia i napięcia',
          'Zalecane 2–3 zabiegi w miesięcznych odstępach; plan ustalany indywidualnie z lekarzem',
          'Przy laserowym obkurczaniu pochwy: pierwszy zabieg PRP 7 dni przed laseroterapią, drugi w dniu laseroterapii, trzeci 7–10 dni później',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '800–1500 zł',
      },
      {
        name: 'Usuwanie blizn poporodowych — laser',
        description:
          'Zabieg przeprowadzany z użyciem lasera z głowicą Er:YAG. Energia urządzenia redukuje blizny poprzez precyzyjne, stopniowe odparowanie tkanki narosłej w miejscu blizny, bez naruszania zdrowej skóry.',
        details: [
          'Efekty: blizna staje się mniej wypukła i coraz mniej wyróżnia się na tle zdrowej skóry',
          'Skuteczna i mało inwazyjna metoda — podczas każdego z serii zabiegów usuwane jest możliwie najwięcej warstw tkanki bliznowatej',
          'Normalną reakcją jest miejscowe krwawienie lub wysięk, które stopniowo ustępują',
          'Przeciwwskazania: ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '600–1200 zł',
      },
      {
        name: 'Wybielanie stref intymnych — laser',
        description:
          'Zabieg laserowy rozjaśniający okolice intymne, których ciemniejszy kolor związany jest z nadmiernym nagromadzeniem melaniny w skórze. Dodatkowo ujędrnia i nawilża tkanki.',
        details: [
          'Działanie: światło lasera działa bezpośrednio na melaninę, uszkadzając ją, oraz biostymulująco na melanocyty, normując produkcję barwnika',
          'Efekty widoczne po około dwóch tygodniach',
          'Procedura w znieczuleniu miejscowym, trwa kilkanaście minut, wykonuje ją lekarz',
          'Podstawą do wykonania zabiegu jest posiadanie aktualnych wyników cytologii',
          'Przez kilka dni po wizycie możliwy lekki dyskomfort — pieczenie, zaczerwienienie i obrzęk',
          'Przeciwwskazania: infekcje pochwy, ciąża, połóg, karmienie piersią, choroba nowotworowa, nieprawidłowy wynik cytologii, padaczka, choroby autoimmunologiczne, nieuregulowana cukrzyca',
        ],
        priceExample: '800–1500 zł',
      },
    ],
  },
  {
    id: 'urologia-estetyczna',
    title: 'Urologia estetyczna',
    intro:
      'Zabiegi poprawiające estetykę, komfort i jakość życia intymnego mężczyzn, wykonywane przez lekarza medycyny estetycznej.',
    services: [
      {
        name: 'Powiększanie penisa kwasem hialuronowym',
        description:
          'Mało inwazyjna alternatywa dla zabiegów chirurgicznych, pozwalająca na realne zwiększenie rozmiarów prącia. Zabieg bezbolesny i bezpieczny, bez ryzyka powikłań chirurgicznych.',
        details: [
          'Efekty: zwiększenie długości średnio o 2–4 cm oraz pogrubienie o 3–5 cm — efekt zależy od pierwotnej wielkości penisa',
          'Efekty natychmiastowe i w pełni przewidywalne, utrzymują się od jednego do dwóch lat; zalecane powtórzenie po ok. 9 miesiącach',
          'Przebieg: znieczulenie miejscowe, zabieg trwa około 40 minut, preparat wprowadzany pod skórę specjalną igłą',
          'Po zabiegu możliwe niewielkie zasinienia, zaczerwienienie, obrzęk lub swędzenie; brak blizn pozabiegowych',
          'Zalecana rezygnacja z aktywności seksualnej i intensywnego wysiłku fizycznego do 4 tygodni',
          'Przeciwwskazania: choroby zapalne i nowotworowe układu moczowo-płciowego, choroby przewlekłe tkanki łącznej i układu krzepnięcia, niektóre leki, zmiany zapalne i ropne w pachwinach, stulejka, uczulenie na preparat, problemy z potencją',
        ],
        priceExample: '4000–7000 zł',
      },
      {
        name: 'Powiększanie penisa własnym tłuszczem',
        description:
          'Zabieg mający na celu zwiększenie rozmiaru penisa w dwóch wymiarach — wydłużenie i pogrubienie — z wykorzystaniem tkanki tłuszczowej pacjenta wzbogaconej osoczem bogatopłytkowym i komórkami macierzystymi.',
        details: [
          'Przebieg: tłuszcz pobierany zwykle z okolicy brzucha, wzbogacany PRP oraz komórkami macierzystymi, dzięki czemu przyjmuje się znacznie więcej przeszczepionej tkanki',
          'Komórki macierzyste dogłębnie rewitalizują ciało jamiste i gąbczaste prącia — w okresie do 3 miesięcy zwiększa się skuteczność wzwodów',
          'Przeszczepiony tłuszcz wchłania się częściowo do ok. 6 tygodni, pozostaje około 60% przeszczepionej ilości; zabieg można powtórzyć',
          'Znieczulenie miejscowe, zabieg nie pozostawia blizn',
          'Po zabiegu powrót do codziennych czynności od razu; zalecana abstynencja seksualna 3–4 tygodnie',
          'Dla optycznego uwydatnienia zalecane zabiegi dodatkowe: liposukcja wzgórka łonowego lub podbrzusza',
        ],
        priceExample: '6000–10 000 zł',
      },
      {
        name: 'Powiększanie penisa kwasem polimlekowym (Lenisna)',
        description:
          'LENISNA to wypełniacz hybrydowy łączący natychmiastowy efekt wypełnienia kwasem hialuronowym (HA) z długotrwałą stymulacją produkcji kolagenu dzięki kwasowi polimlekowemu (PDLLA).',
        details: [
          'Efekt widoczny od razu po zabiegu; wypełnienie utrzymuje się do momentu, gdy zaczyna dominować produkcja nowego kolagenu i elastyny',
          'Cechy: jedyna na świecie formuła hybrydy Poly D,L Lactyd + HA o wielkości cząsteczek 50–60 mikrometrów, skuteczność potwierdzona badaniami klinicznymi, certyfikaty FDA i CE',
          'Wskazania: niezadowolenie z grubości i obwodu prącia, brak satysfakcji seksualnej partnerki',
          'Przebieg: znieczulenie miejscowe, zabieg trwa około 40 minut',
          'Zalecana rezygnacja z aktywności seksualnej i intensywnego wysiłku fizycznego do 3–4 tygodni',
          'Przeciwwskazania: choroby zapalne i nowotworowe układu moczowo-płciowego, choroby przewlekłe tkanki łącznej i układu krzepnięcia, niektóre leki, zmiany zapalne i ropne w pachwinach, stulejka, uczulenie na preparat, problemy z potencją',
        ],
        priceExample: '5000–8000 zł',
      },
      {
        name: 'Scrotoks — relaksacja moszny',
        description:
          'Podanie toksyny botulinowej w skórę moszny w celu zrelaksowania jej mięśni. Pomaga przy przypadłościach bólowych w rejonach krocza, a także odmładza skórę i przywraca jej jędrność.',
        details: [
          'Efekty: rozluźnienie i wygładzenie skóry moszny, powiększenie i wydłużenie moszny, niższe zawieszenie jąder, większa mobilność jąder, zmniejszenie potliwości, nowe doznania podczas stosunku',
          'Wskazania: wiotka, pomarszczona skóra moszny, nawracające stany zapalne, dolegliwości bólowe (także mimo leczenia operacyjnego), zwiększona potliwość skóry w okolicy krocza, ograniczone doznania w trakcie stosunku',
          'Sprawdza się przy schorzeniach mięśni moszny, gdy leczenie chirurgiczne nie przynosi rezultatów, np. przy żylakach powrózka nasiennego',
          'Zabieg małoinwazyjny, nie wymaga okresu rekonwalescencji',
          'Przeciwwskazania: opryszczka w miejscu wykonywania zabiegu, przeciwwskazania wskazane przez lekarza',
        ],
        priceExample: '1500–2500 zł',
      },
      {
        name: 'P-shot — wzmocnienie doznań',
        description:
          'Zabieg wzmagający erekcję oraz wspierający leczenie przedwczesnego wytrysku. Pobrane od pacjenta osocze bogatopłytkowe wstrzykiwane jest do ciał jamistych i okolicy główki penisa.',
        details: [
          'Zabieg w znieczuleniu miejscowym',
          'Nie jest wymagane wcześniejsze przygotowanie pacjenta',
        ],
        priceExample: '1500–2500 zł',
      },
      {
        name: 'Rewitalizacja skóry miejsc intymnych',
        description:
          'Zabieg oparty na wysokiej koncentracji płytek krwi, które uwalniają w miejscu podania liczne czynniki wzrostu, doprowadzając do intensywnej reakcji regeneracji tkanek.',
        details: [
          'Efekty: poprawa stanu skóry — odzyskuje młody, zdrowy wygląd',
          'Skóra staje się bardziej napięta, jędrna, odżywiona i nawilżona',
          'Wyrównanie kolorytu skóry oraz jej przebudowa',
        ],
        priceExample: '800–1500 zł',
      },
    ],
  },
]

export interface TeamMember {
  name: string
  title: string
  bio: string[]
  photo: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Adriana Łukomska',
    photo: adrianaPhoto,
    title: 'Ekspertka Zarządzania Kliniką i Kosmetologii Estetycznej',
    bio: [
      'Adriana Łukomska to niezastąpiona specjalistka w zarządzaniu Kliniką, zapewniająca najwyższy standard obsługi pacjentów oraz wyjątkowe umiejętności w zakresie zaawansowanej kosmetologii estetycznej.',
      'Jej wszechstronna wiedza i doświadczenie sprawiają, że Klinika działa sprawnie i profesjonalnie, a pacjenci mogą liczyć na pełne wsparcie i komfort.',
      'Dzięki swojemu zaangażowaniu i pasji do kosmetologii estetycznej, Adriana Łukomska wykonuje szereg zaawansowanych zabiegów, które poprawiają wygląd i samopoczucie pacjentów.',
      'Jej precyzja i dbałość o każdy detal gwarantują satysfakcję i naturalne efekty.',
      'Stale doskonali swoje umiejętności, uczestnicząc w licznych szkoleniach i konferencjach branżowych.',
      'Adriana Łukomska z troską i profesjonalizmem podchodzi do każdego pacjenta, zapewniając indywidualne podejście i najwyższą jakość usług.',
      'Jej umiejętności w zakresie zarządzania oraz kosmetologii estetycznej sprawiają, że Klinika jest miejscem, gdzie każdy pacjent czuje się wyjątkowo i bezpiecznie.',
    ],
  },
  {
    name: 'Dr Rafał Berner',
    photo: rafalPhoto,
    title: 'Ekspert w Medycynie Estetycznej i Modelowaniu Sylwetki',
    bio: [
      'Dr Rafał Berner to ceniony lekarz medycyny estetycznej, specjalizujący się w zabiegach estetycznych oraz modelowaniu sylwetki zarówno u kobiet, jak i u mężczyzn.',
      'Jego zaawansowane umiejętności i wszechstronna wiedza czynią go jednym z liderów w tej dziedzinie.',
      'Dr Berner jest absolwentem Wydziału Lekarskiego Uniwersytetu Medycznego w Łodzi, gdzie w 2019 roku ukończył studia doktoranckie.',
      'Jest aktywnym członkiem wielu prestiżowych organizacji, takich jak Polskie Towarzystwo Medycyny Estetycznej i Anti-Aging, Międzynarodowe Stowarzyszenie Trychologii Klinicznej i Estetycznej ICATA oraz International Federation for Adipose Therapeutics and Science (IFATS) — największego światowego towarzystwa naukowego zajmującego się wykorzystaniem tłuszczowych komórek macierzystych w medycynie regeneracyjnej.',
      'W ramach Centrum Szkoleniowego OLLIE dr Berner prowadzi zaawansowane szkolenia dla lekarzy z zakresu medycyny estetycznej.',
      'Specjalizuje się w takich procedurach jak liposukcja z przeszczepem tkanki tłuszczowej do twarzy, piersi i pośladków, urologia estetyczna, skleroterapia, modelowanie twarzy (wolumetria i nici) oraz medycyna regeneracyjna.',
      'Jego kursy cieszą się ogromnym uznaniem, a wiedza przekazywana przez niego jest nieoceniona dla uczestników.',
      'Dr Berner od lat rozwija swoje zainteresowania zawodowe w zakresie procedur medycznych z wykorzystaniem autologicznej tkanki tłuszczowej w medycynie estetycznej, regeneracyjnej i onkologii naprawczej.',
      'Jego zaangażowanie i pasja do medycyny regeneracyjnej sprawiają, że jest liderem w tej dziedzinie, a jego pacjenci mogą liczyć na najnowocześniejsze i najskuteczniejsze metody leczenia.',
      'W Klinice dr Rafał Berner wykonuje szeroki zakres zabiegów medycyny estetycznej, w tym działania przeciwstarzeniowe, nieoperacyjny lifting twarzy, ginekologię i urologię estetyczną oraz modelowanie sylwetki.',
      'Pacjenci doceniają go za profesjonalizm, precyzję oraz indywidualne podejście do każdego przypadku.',
      'Jego doświadczenie w zakresie klasycznych procedur estetycznych, takich jak stosowanie kwasu hialuronowego, toksyny botulinowej, nici i stymulatorów tkankowych, w połączeniu z zaawansowanymi technikami z wykorzystaniem tkanki tłuszczowej, gwarantuje satysfakcjonujące efekty.',
      'Dr Berner podkreśla, że tkanka tłuszczowa to najbardziej naturalny i bezpieczny wypełniacz, a także nieocenione źródło komórek macierzystych, które przyczyniają się do regeneracji i pięknego wyglądu.',
      'Dzięki jego umiejętnościom i podejściu pacjenci mogą cieszyć się naturalnymi, harmonijnymi efektami zabiegów.',
    ],
  },
]

export const clinicInfo = {
  name: 'Magical Clinic',
  slogan: 'Piękno i Zaufanie',
  motto: 'Odkryj magię piękna i odmłodzenia dzięki naszym zabiegom medycyny estetycznej',
  addressLabel: 'Eternus Medica',
  address: 'Armii Krajowej 43a, 94-046 Łódź',
  phone: '+48 536 941 864',
  phoneHref: '+48536941864',
  social: {
    facebook: 'https://facebook.com/people/Magical-Clinic/100086344225678/',
    instagram: 'https://instagram.com/webwavecms/',
    tiktok: 'https://tiktok.com/@magicalclinic2',
  },
}

export const whyUs = [
  {
    title: 'Doświadczony zespół specjalistów',
    description: 'Zabiegi wykonywane przez wykwalifikowany personel medyczny z wieloletnią praktyką.',
  },
  {
    title: 'Nowoczesne technologie i produkty',
    description: 'Wykorzystujemy najnowsze urządzenia i preparaty najwyższej jakości.',
  },
  {
    title: 'Indywidualne podejście i konsultacje',
    description: 'Każdy plan zabiegowy dopasowujemy do potrzeb i oczekiwań pacjenta.',
  },
  {
    title: 'Przyjazna atmosfera i profesjonalna obsługa',
    description: 'Dbamy o komfort i bezpieczeństwo na każdym etapie wizyty.',
  },
]

export const testimonials = [
  {
    author: 'Robert Kowalski',
    text: 'Profesjonalne podejście i widoczne efekty już po pierwszym zabiegu. Polecam każdemu, kto szuka sprawdzonego miejsca.',
  },
  {
    author: 'Angela Nowak',
    text: 'Wspaniała atmosfera i indywidualne podejście do pacjenta. Czuć, że zespół naprawdę zna się na swojej pracy.',
  },
  {
    author: 'Adam Tomczyk',
    text: 'Bardzo zadowolony z efektów oraz miłej i fachowej obsługi. Na pewno wrócę na kolejne zabiegi.',
  },
]

export const navLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/o-nas', label: 'O nas' },
  { to: '/oferta', label: 'Oferta' },
  { to: '/nasz-zespol', label: 'Nasz zespół' },
  { to: '/cennik', label: 'Cennik' },
  { to: '/kontakt', label: 'Kontakt' },
]
