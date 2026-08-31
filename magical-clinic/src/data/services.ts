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
      'Nowoczesne zabiegi nieoperacyjne i minimalnie inwazyjne, dopasowane indywidualnie do potrzeb skóry.',
    services: [
      {
        name: 'Osocze bogatopłytkowe (PRP)',
        description:
          'Naturalna biostymulacja z koncentratu płytek krwi pacjenta — uwalnia czynniki wzrostu stymulujące regenerację tkanek.',
        details: [
          'Działanie liftingujące i regenerujące',
          'Zwiększenie elastyczności i poprawa kolorytu skóry',
          'Wskazania: oznaki starzenia, łysienie, blizny, rozstępy',
        ],
        priceExample: '400–600 zł',
      },
      {
        name: 'Fibryna bogatopłytkowa (PRF)',
        description:
          'Koncentrat komórkowy z naturalną siecią 3D, wolniej uwalniający czynniki wzrostu niż PRP.',
        details: [
          'Redukcja zmarszczek i spłycenie bruzd nosowo-wargowych',
          'Zahamowanie wypadania i wzmocnienie włosów',
        ],
        priceExample: '450–650 zł',
      },
      {
        name: 'Mezoterapia igłowa',
        description:
          'Płytkie nakłucia z podaniem preparatów odżywczych bezpośrednio do skóry twarzy, szyi i dłoni.',
        details: ['Gładka skóra o jednolitym kolorze', 'Redukcja pierwszych oznak starzenia'],
        priceExample: '300–500 zł',
      },
      {
        name: 'Mezobotoks (Babybotoks)',
        description:
          'Połączenie mezoterapii i mikrodawek toksyny botulinowej z witaminami i aminokwasami.',
        details: ['Zmniejszenie drobnych zmarszczek bez paraliżu mięśni', 'Zabieg trwa ok. 30 minut'],
        priceExample: '500–700 zł',
      },
      {
        name: 'Lipoliza iniekcyjna',
        description: 'Mało inwazyjne modelowanie sylwetki poprzez rozpuszczanie komórek tłuszczowych.',
        details: ['3–6 sesji co 4 tygodnie', 'Podwójny podbródek, fałdy brzucha, ginekomastia'],
        priceExample: '400–600 zł / sesja',
      },
      {
        name: 'Leczenie nadpotliwości toksyną botulinową',
        description: 'Blokowanie impulsów nerwowych gruczołów potowych dłoni, pach i stóp.',
        details: ['Efekt widoczny po ok. 7 dniach', 'Utrzymuje się od 4 do 10 miesięcy'],
        priceExample: '1200–1800 zł',
      },
      {
        name: 'Leczenie bruksizmu toksyną botulinową',
        description: 'Wstrzyknięcia w mięśnie żwacza rozluźniające napięcie i ograniczające zgrzytanie zębami.',
        details: ['Zmniejszenie bólu i napięcia mięśni', 'Zabieg trwa ok. 15 minut'],
        priceExample: '800–1200 zł',
      },
      {
        name: 'Skleroterapia',
        description: 'Usuwanie naczynek i żylaków poprzez wstrzyknięcie środka obliterującego bezpośrednio w żyłę.',
        details: ['Gojenie: 4 tygodnie (naczynka), 4–6 miesięcy (żyły)', 'Zabieg trwa 20–30 minut'],
        priceExample: '300–500 zł / sesja',
      },
      {
        name: 'Stymulacja włosów i leczenie łysienia',
        description: 'Mezoterapia skóry głowy z podaniem specjalistycznych preparatów do mieszków włosowych.',
        priceExample: '350–500 zł',
      },
      {
        name: 'Zabieg plazmą',
        description:
          'Generator plazmy tworzy mikrowiązkę sublimującą naskórek i obkurczającą skórę — bezinwazyjny lifting powiek.',
        details: ['Zabieg trwa 20–30 minut', 'Bezpieczny dla osób z rozrusznikiem serca'],
        priceExample: '500–900 zł',
      },
      {
        name: 'Laserowe usuwanie naczynek i włókniaków',
        description: 'Precyzyjna wiązka lasera koaguluje erytrocyty i zamyka rozszerzone naczynia krwionośne.',
        priceExample: '250–450 zł',
      },
      {
        name: 'Usuwanie zmarszczek toksyną botulinową',
        description: 'Blokowanie impulsów nerwowych w mięśniach mimicznych — czoło, okolice brwi, kurze łapki.',
        details: ['Zabieg trwa kilkanaście minut'],
        priceExample: '600–900 zł',
      },
      {
        name: 'Wypełnienie zmarszczek kwasem hialuronowym',
        description: 'Wstrzyknięcie żelu kwasu hialuronowego w bruzdy i zmarszczki mimiczne.',
        details: ['Natychmiastowy efekt wygładzenia', 'Działanie utrzymuje się 7–9 miesięcy'],
        priceExample: '800–1200 zł',
      },
      {
        name: 'Powiększanie i modelowanie ust',
        description: 'Podanie kwasu hialuronowego w celu powiększenia i modelowania kształtu ust.',
        details: ['Zabieg ok. 15 minut, wizyta ok. 60 minut', 'Efekt utrzymuje się 7–9 miesięcy'],
        priceExample: '900–1300 zł',
      },
      {
        name: 'Wolumetria twarzy',
        description: 'Modelowanie konturów twarzy usieciowanym kwasem hialuronowym w głębokich warstwach skóry.',
        details: ['Efekt utrzymuje się 12–18 miesięcy'],
        priceExample: '1200–2000 zł',
      },
      {
        name: 'Korekta kształtu nosa i brody',
        description: 'Modelowanie nosa i podbródka kwasem hialuronowym, bez ingerencji chirurgicznej.',
        details: ['Efekt utrzymuje się 18–24 miesiące'],
        priceExample: '1000–1600 zł',
      },
      {
        name: 'Wypełnienie bruzd nosowo-wargowych',
        description: 'Iniekcja kwasu hialuronowego wzdłuż linii nosa w celu wygładzenia bruzd.',
        details: ['Efekt utrzymuje się 4–12 miesięcy'],
        priceExample: '900–1300 zł',
      },
    ],
  },
  {
    id: 'chirurgia-estetyczna',
    title: 'Chirurgia estetyczna',
    intro: 'Zabiegi chirurgiczne wykonywane w znieczuleniu miejscowym przez doświadczony zespół.',
    services: [
      {
        name: 'Blefaroplastyka (plastyka powiek)',
        description:
          'Chirurgiczna korekta nadmiaru skóry i tkanki tłuszczowej na powiekach górnych i dolnych.',
        details: ['Zabieg trwa ok. 1 godziny', 'Znieczulenie miejscowe'],
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
        name: 'Lipotransfer (przeszczep tkanki tłuszczowej)',
        description:
          'Pobranie własnego tłuszczu z jednego miejsca i przeszczepienie w inne — modelowanie piersi, pośladków, dłoni.',
        details: ['Długotrwały efekt'],
        priceExample: '5000–10 000 zł',
      },
      {
        name: 'Liposukcja',
        description: 'Odsysanie nadmiaru tkanki tłuszczowej z wybranych partii ciała.',
        details: ['Efekt natychmiastowy, ostateczny po kilku miesiącach'],
        priceExample: '4000–9000 zł',
      },
      {
        name: 'Modelowanie ciała kwasem hialuronowym',
        description: 'Powiększanie i modelowanie piersi, pośladków oraz niwelowanie asymetrii.',
        details: ['Efekt utrzymuje się 13–18 miesięcy'],
        priceExample: '3000–6000 zł',
      },
      {
        name: 'Modelowanie ciała kwasem polimlekowym (Lenisna)',
        description: 'Hybrydowy wypełniacz łączący kwas hialuronowy z polimlekowym, stymulujący produkcję kolagenu.',
        priceExample: '3500–6000 zł',
      },
      {
        name: 'Endolifting intradermalny (DAS)',
        description: 'Minimalnie inwazyjny lifting radiofrekwencją intradermalną podgrzewającą skórę.',
        details: ['Napięcie skóry nawet do 30%', 'Rekonwalescencja 2–3 dni'],
        priceExample: '800–1500 zł',
      },
    ],
  },
  {
    id: 'laseroterapia',
    title: 'Laseroterapia',
    intro: 'Zaawansowane technologie laserowe do odmładzania, usuwania przebarwień i regeneracji skóry.',
    services: [
      {
        name: 'Laser frakcyjny ablacyjny',
        description: 'Kontrolowane mikrouszkodzenia skóry stymulujące produkcję kolagenu.',
        details: ['Redukcja blizn, rozstępów i zmarszczek', 'Wyrównanie kolorytu skóry'],
        priceExample: '600–1000 zł',
      },
      {
        name: 'Laserowe leczenie chrapania (NightLase)',
        description: 'Laser Er:YAG ujędrnia tkanki miękkie jamy ustnej, redukując chrapanie i bezdech senny.',
        details: ['2–3 sesje', 'Zabieg ok. 15 minut, bez rekonwalescencji'],
        priceExample: '500–800 zł / sesja',
      },
      {
        name: 'Laserowe leczenie rumienia',
        description: 'Zamykanie rozszerzonych naczyń krwionośnych powodujących rumień.',
        details: ['Minimum 2 zabiegi po 15–30 minut'],
        priceExample: '300–500 zł / sesja',
      },
      {
        name: 'Laserowe usuwanie przebarwień',
        description: 'Laser Er:YAG rozkłada barwnik melaniny — plamy posłoneczne, melasma, piegi.',
        priceExample: '250–450 zł',
      },
      {
        name: 'Resurfacing laserowy (odmładzanie)',
        description: 'Frakcyjnie ablacyjny laser stymulujący kolagen i elastynę, lifting termiczny.',
        priceExample: '600–1000 zł',
      },
      {
        name: 'Peeling laserowy',
        description: 'Usunięcie górnych warstw skóry wiązką lasera w celu regeneracji.',
        priceExample: '400–700 zł',
      },
      {
        name: 'Laserowe usuwanie blizn',
        description: 'Stymulacja regeneracji tkanek w miejscu blizny.',
        priceExample: '400–700 zł',
      },
      {
        name: 'Relaksacja rozstępów',
        description: 'Laserowe łagodzenie widoczności rozstępów.',
        priceExample: '400–700 zł',
      },
      {
        name: 'Leczenie łysienia laserem',
        description: 'Laserowa stymulacja wzrostu włosów.',
        priceExample: '300–500 zł',
      },
    ],
  },
  {
    id: 'zabiegi-dodatkowe',
    title: 'Zabiegi dodatkowe',
    intro: 'Nici liftingujące i stymulatory tkankowe wspierające naturalną regenerację skóry.',
    services: [
      {
        name: 'Nici PDO stymulujące',
        description: 'Cieniutkie, bioodwracalne nici stymulujące produkcję kolagenu.',
        details: ['Naturalna biodegradacja', 'Napięcie i wygładzenie skóry'],
        priceExample: '600–1000 zł',
      },
      {
        name: 'Nici haczykowe',
        description: 'Dwukierunkowe bio-wchłanialne nici z haczykami do liftingu bez skalpela.',
        details: ['Zabieg trwa 30–60 minut', 'Opadające brwi, policzki, fałdy marionetki'],
        priceExample: '1500–3000 zł',
      },
      {
        name: 'Stymulatory tkankowe',
        description: 'Naturalne metody stymulacji kolagenu — polinukleotydy, kwas polimlekowy i inne.',
        details: ['Redukcja zmarszczek i blizn potrądzikowych', 'Regeneracja i odmłodzenie skóry'],
        priceExample: '500–900 zł',
      },
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
