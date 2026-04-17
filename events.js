const EVENTS = [
  {
    name: "Busójárás",
    country: "Hungary",
    region: "Southern Transdanubia",
    city: "Mohács",
    month: 2,
    lat: 45.9927,
    lng: 18.6832,
    description: "UNESCO carnival in the town of Mohács where men in shaggy sheepskin costumes and wooden devil masks flood the streets to scare away winter. Rooted in both pagan and Ottoman-era traditions. Free, deeply local, no international tourism."
  },
  {
    name: "Festa da Lamprea",
    country: "Spain",
    region: "Galicia",
    city: "Arbo",
    month: 4,
    lat: 42.1166,
    lng: -8.1166,
    description: "Festival dedicated to the lamprey, a prehistoric fish caught in the Miño river and cooked in its own blood according to an ancient recipe. Declared festival of national tourist interest in 1965. Almost exclusively local and Galician."
  },
  {
    name: "Castagnades",
    country: "France",
    region: "Ardèche",
    city: "Désaignes",
    month: 10,
    lat: 45.0833,
    lng: 4.6333,
    description: "From October to mid-November, Ardèche villages take turns hosting chestnut festivals: hikes through chestnut groves, markets, concerts. The Ardèche produces 50% of French chestnuts with 65 varieties. Most authentic in Désaignes, Lamastre, Joyeuse."
  },
  {
    name: "Panigiri di Ikaria",
    country: "Greece",
    region: "North Aegean",
    city: "Ikaria",
    month: 8,
    lat: 37.6000,
    lng: 26.1667,
    description: "Ikaria is probably the most famous Greek island for its endless schedule of panigyria. Festivals last all night, the entire community participates until dawn. Wine served in ceramic cups, Ikarian dances (the oldest dance style in Greece). Check e-panigiria.gr for the full calendar."
  },
  {
    name: "Up Helly Aa",
    country: "United Kingdom",
    region: "Scotland",
    city: "Lerwick",
    month: 1,
    lat: 60.1547,
    lng: -1.1494,
    description: "For over 140 years, hundreds of Vikings march through Lerwick in the Shetland Islands before setting fire to a full-size wooden longship. Authentic community pride, not a tourist spectacle. Fly from Aberdeen or Edinburgh."
  },
  {
    name: "Feria de Abril",
    country: "Spain",
    region: "Andalusia",
    city: "Seville",
    month: 4,
    lat: 37.3891,
    lng: -5.9845,
    description: "One of Europe's largest festivals, yet deeply authentic. A week of flamenco, horses, traditional dress, casetas (private tents) with food and wine. Not a tourist event — Sevillians live it entirely. Logistically perfect: Seville airport 15 minutes away."
  },
  {
    name: "Festa da Lamprea",
    country: "Spain",
    region: "Galicia",
    city: "Arbo",
    month: 4,
    lat: 42.1166,
    lng: -8.1166,
    description: "Festival dedicated to the lamprey, a prehistoric fish caught in the Miño river and cooked in its own blood. Declared festival of national tourist interest in 1965. Almost exclusively local and Galician. From Vigo in 40 minutes."
  },
  {
    name: "Festa do Percebe",
    country: "Spain",
    region: "Galicia",
    city: "Corme",
    month: 8,
    lat: 43.2667,
    lng: -8.9333,
    description: "The oldest festival in Spain dedicated to percebes (barnacles), the most expensive seafood in Europe, hand-harvested from cliff rocks. Tastings, music, totally local."
  },
  {
    name: "Festa da Empanada",
    country: "Spain",
    region: "Galicia",
    city: "Bandeira",
    month: 8,
    lat: 42.6833,
    lng: -8.2333,
    description: "Five days dedicated to the Galician empanada. Competition between restaurants and private citizens, winning empanadas auctioned for charity. Village of a few thousand inhabitants."
  },
  {
    name: "Festa do Albariño",
    country: "Spain",
    region: "Galicia",
    city: "Cambados",
    month: 8,
    lat: 42.5167,
    lng: -8.8167,
    description: "Born in 1953 as a dinner with nine wines. Today a wine tunnel with 150 Albariño brands, open cellars, traditional music. Cambados is a UNESCO heritage town with a stunning historic center. Declared festival of international tourist interest in 2018."
  },
  {
    name: "Festa do Pulpo",
    country: "Spain",
    region: "Galicia",
    city: "O Carballiño",
    month: 8,
    lat: 42.3667,
    lng: -8.0833,
    description: "Born in 1964 from a group of friends with a copper cauldron. Octopus boiled at outdoor tables, Ribeiro wine, gaitas. Declared festival of international tourist interest in 2022."
  },
  {
    name: "Festival de la Sidra",
    country: "Spain",
    region: "Asturias",
    city: "Nava",
    month: 7,
    lat: 43.3575,
    lng: -5.5019,
    description: "45 editions. International competition of escanciadores — the art of pouring cider from height. Small town, everything revolves around artisan cider."
  },
  {
    name: "Festa del Queso Casín",
    country: "Spain",
    region: "Asturias",
    city: "Campo de Caso",
    month: 8,
    lat: 43.1833,
    lng: -5.5667,
    description: "Artisan raw milk cheese with a production technique some historians link to the Neolithic. DOP producers market, cooking competitions, Asturian folklore. Village in the Picos de Europa."
  },
  {
    name: "Batalla del Vino",
    country: "Spain",
    region: "La Rioja",
    city: "Haro",
    month: 6,
    lat: 42.5833,
    lng: -2.8500,
    description: "A wine battle in the streets of a small Rioja town of 12,000 inhabitants. Nobody escapes. Deeply local, then everyone visits the wineries."
  },
  {
    name: "Matanza Tradicional Hurdana",
    country: "Spain",
    region: "Extremadura",
    city: "Las Hurdes",
    month: 3,
    lat: 40.2333,
    lng: -6.3667,
    description: "Traditional pig slaughter ritual in villages of the Extremadura hinterland. Drummers, crafts, regional dances, everything from the pig cooked on site. Rotates to a different village each year. One of the wildest landscapes in Spain."
  },
  {
    name: "Feria Nacional del Queso",
    country: "Spain",
    region: "Extremadura",
    city: "Trujillo",
    month: 5,
    lat: 39.4597,
    lng: -5.8822,
    description: "Trujillo is a stunning medieval town with castle and Pizarro palace. The cheese fair includes goat and sheep competitions, equestrian shows. Not internationally mainstream."
  },
  {
    name: "Carnaval de Podence",
    country: "Portugal",
    region: "Trás-os-Montes",
    city: "Podence",
    month: 2,
    lat: 41.6167,
    lng: -6.8333,
    description: "UNESCO Heritage. Village of a few hundred souls. The Caretos — metallic masks with colorful fringe costumes — roam the village making noise and playing tricks. Pagan roots of winter purification. Almost no mass tourism, almost exclusively northern Portuguese."
  },
  {
    name: "Entrudo de Lazarim",
    country: "Portugal",
    region: "Beira Alta",
    city: "Lazarim",
    month: 2,
    lat: 41.0833,
    lng: -7.9333,
    description: "500 inhabitants. Hand-carved alder wood masks — no two alike — depicting demons, witches, animals. A centuries-old tradition that Salazar's regime tried to suppress without success."
  },
  {
    name: "Festa do Povo",
    country: "Portugal",
    region: "Alentejo",
    city: "Campo Maior",
    month: 8,
    lat: 39.0167,
    lng: -7.0667,
    description: "UNESCO Heritage 2021. The entire town is decorated overnight with hand-made paper flowers by residents, street by street with different motifs. Does not happen every year — only when the people decide. When it does, it happens in August-September."
  },
  {
    name: "Romaria de Nossa Senhora d'Agonia",
    country: "Portugal",
    region: "Minho",
    city: "Viana do Castelo",
    month: 8,
    lat: 41.6938,
    lng: -8.8333,
    description: "Historical-ethnographic procession with 3,000 participants, 400 women in traditional costume with gold jewelry. Beautiful city on the Lima river, easily accessible. Extraordinary level of authenticity and spectacle."
  }
];
