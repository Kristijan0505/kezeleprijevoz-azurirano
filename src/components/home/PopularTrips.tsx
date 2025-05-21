import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
   {
      id: 14,
      title: 'Soča i Kobarid',
      description: '05:00 – Polazak iz Bjelovara-Čazma-Ivanić Grad-Zagreb- Buzin',
      imageUrl: 'https://i.postimg.cc/VvyhQZCh/Kezele-So-a-Kobarid.png',
      iconName: 'Soča i Kobarid',
      width: 800,
      height: 600,
      detailedDescription: '🏞 PUTOVANJE U SLOVENIJU: KOBARID & TOLMINSKA KORITA 
Datum: Subota, 28. svibnja 2025. 
 Polazak: 05:00 h – Bjelovar, 05:30 – Dolazak u Čazmu (moguć ukrcaj putnika), 05:50 – Križ, 06:00 – Dolazak u Ivanić Grad (putem prolazimo kroz Graberje), 06:40 – Ulazak u Zagreb (Buzin), nastavak prema Rugvici, 11:00 – Dolazak u Kobarid, Slovenija 
📌 PLAN I PROGRAM PUTOVANJA:  
📍 DESTINACIJE I AKTIVNOSTI 
🏘 Kobarid 
Smješten u srcu doline Soče, Kobarid je mjesto bogate povijesti i nevjerojatne prirode. Grad je poznat po Kobariškoj bitki iz Prvog svjetskog rata, ali i po svojoj jedinstvenoj mješavini prirodnih ljepota i kulturne baštine. 
🔹 Napoleonov most 
Jedan od najpoznatijih simbola Kobarida. Kameni most preko rijeke Soče datira iz doba Napoleona, a danas je omiljena lokacija za fotografiranje zbog pogleda na kristalno čistu rijeku i alpske pejzaže. 
💧 Slap Kozjak 
Nakon kraće šetnje kroz šumu i duž korita rijeke, dolazimo do jednog od najljepših slapova Slovenije – Slap Kozjak. Smješten unutar prirodnog kamenog amfiteatra, ovaj 15 metara visok slap djeluje bajkovito. 
 Trajanje šetnje: cca 45 minuta (u oba smjera, lagani uspon) 
 Napomena: Slap je dostupan isključivo pješice, staza je uređena. 
🌄 Tolminska korita 
Nakon obilaska Kozjaka, putovanje se nastavlja autobusom prema Tolminu, gdje nas očekuje jedna od najpoznatijih prirodnih atrakcija Julijskih Alpa. 
Tolminska korita su duboki klanci koje su izdubile rijeke Tolminka i Zadlaščica. 
Ovdje ćete vidjeti: 
Vražiji most – smješten 60 m iznad rijeke Tolminke 
Medvjeđa glava – ogromni kamen zaglavljen između stijena 
Termalni izvor – rijedak prirodni fenomen unutar korita 
Uređena staza duga cca 2 km nudi siguran i ugodan obilazak. 
Trajanje obilaska: cca 1,5 sat (umjeren tempo) 
🍽 Ručak (opcionalno) 
U prirodnom ambijentu neposredno uz korita, postoji mogućnost organiziranog ručka: 
Menu (18 EUR): 
Juha 
Pire krumpir 
Pohano pileće meso 
Pečena šnicla u umaku od gljiva 
Salata 
Desert 
👉 Ručak nije uključen u cijenu putovanja. Potrebna je najava prilikom prijave. 
🔁 Povratak 
18:00 – Polazak iz Tolmina 
Pauza za okrepu na povratku 
✅ CIJENA: 58,00 EUR 
✅ CIJENA UKLJUČUJE 
Prijevoz turističkim autobusom 
Pratitelj putovanja 
Organizacija i vodstvo od strane agencije 
Ulaznica za Slap Kozjak 
Ulaznica za Tolminska korita 
Osiguranje od odgovornosti 
❌ CIJENA NE UKLJUČUJE 
Organizirani ručak (18 EUR – uz prethodnu najavu) 
Osobna potrošnja 
⚠️ VAŽNE INFORMACIJE 
Putovanje uključuje hodanje po prirodnim terenima, usponima i klancima. 
Obavezna udobna i čvrsta obuća – sportska ili planinarska. 
Izlet nije preporučen osobama slabije pokretljivosti. 
Prelazak granice – ne zaboravite osobnu iskaznicu. ',
      price: ' 58 EUR po osobi',
      includes: [Prijevoz turističkim autobusom 
Pratitelj putovanja 
Organizacija i vodstvo od strane agencije 
Ulaznica za Slap Kozjak 
Ulaznica za Tolminska korita 
Osiguranje od odgovornosti 
    }
    {
      id: 12,
      title: 'Izlet u Krapinu i Trakošćan',
      description: '07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)',
      imageUrl: 'https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zsDyYEJI7IEQ7kNvwE2msN_&_nc_oc=Adkp4TH_XijfQNuaO6OEpGoAqkYAkbjxVDQP90iB2iTBUyoHoLR9vyc3g1j6WSRF0g0&_nc_zt=23&_nc_ht=scontent.fzag1-2.fna&_nc_gid=4lFJRdLBOPn9Cqg5KTK8cg&oh=00_AfJB2xGlcx9CQ6kQtoossa4xYswbCeiIrM1QWD4Jr_oPfg&oe=6824E20E',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: 'Doživite bogate povijesne i prirodne ljepote kontinentalne Hrvatske. Tijekom izleta posjetit ćemo Muzej krapinskih neandertalaca, jedan od najmodernijih muzeja u Hrvatskoj, i dvorac Trakošćan - romantičan dvorac iz 13. stoljeća smješten u prekrasnom prirodnom okruženju. Izlet uključuje stručno vođenje, ulaznice za muzej i dvorac, te slobodno vrijeme za osobno istraživanje i ručak.',
      duration: '1 dan',
      price: 'Od 45€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Stručno vodstvo tijekom putovanja',
        'Ulaznice za Muzej krapinskih neandertalaca',
        'Ulaznice za dvorac Trakošćan',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Ručak (mogućnost dogovora)',
        'Osobne troškove',
        'Dodatne sadržaje koji nisu navedeni u programu'
      ],
      startLocation: 'Čazma (07:30), moguć ukrcaj prema Zagrebu'
    }
    {
      id: 2,
      title: 'Plitvička Jezera',
      description: 'Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.',
      imageUrl: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Palmtree',
      width: 800,
      height: 534,
      detailedDescription: 'Plitvička jezera, najstariji i najveći nacionalni park u Hrvatskoj, pravi su biser prirode koji oduševljava posjetitelje kristalno čistim vodama i impresivnim vodopadima. Tijekom vođenog obilaska, upoznat ćete se s jedinstvenim ekosustavom jezera, fascinantnim procesom stvaranja sedre i raznolikim biljnim i životinjskim svijetom. Nakon organiziranog obilaska, imat ćete slobodno vrijeme za osobno istraživanje, fotografiranje ili odmor uz predivne vizure.',
      duration: '1 dan',
      price: 'Od 60€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Ulaznice za Nacionalni park',
        'Stručno vodstvo',
        'Vožnja elektrobrodom po jezeru',
        'Vožnja panoramskim vlakom',
        'Osiguranje putnika'
      ],
      excludes: [
        'Ručak (mogućnost dogovora)',
        'Osobne troškove',
        'Dodatne sadržaje koji nisu navedeni u programu'
      ],
      startLocation: 'Čazma (06:00), Bjelovar (06:30), Zagreb (07:30)'
    },
    {
      id: 3,
      title: 'Međugorje Hodočašće',
      description: 'Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.',
      imageUrl: 'https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Cross',
      width: 800,
      height: 533,
      detailedDescription: 'Međugorje je jedno od najpoznatijih katoličkih hodočasničkih mjesta u svijetu, poznato po ukazanjima Blažene Djevice Marije. Naš program hodočašća obuhvaća posjet svim značajnim mjestima, uključujući Brdo ukazanja, Križevac, Crkvu sv. Jakova, te sudjelovanje na molitvenim programima. Uz duhovni program, imat ćete priliku za osobnu molitvu i razmišljanje u mirnom okruženju ovog svetišta koje već desetljećima privlači milijune vjernika iz cijelog svijeta.',
      duration: '2-3 dana',
      price: 'Od 120€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u hotelu/pansionu s doručkom',
        'Duhovno vodstvo',
        'Posjet svim značajnim mjestima u Međugorju',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Obroke koji nisu navedeni u programu',
        'Osobne troškove',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Čazma, Bjelovar, Zagreb'
    },
    '
    ];

  return (
    <section className="bg-neutral-gray py-16 animate-[wave_15s_ease-in-out_infinite]" id="popular-trips">
      <SectionTitle 
        title="Najpopularnija Putovanja" 
        description="Otkrijte omiljene destinacije naših putnika, od prirodnih ljepota Hrvatske do duhovnih hodočašća i sunčanih obala."
        lightMode={true}
      />
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 mt-8">
        {trips.map((trip, index) => (
          <TripCard 
            key={trip.id}
            title={trip.title}
            description={trip.description}
            imageUrl={trip.imageUrl}
            iconName={trip.iconName}
            delay={index * 100}
            imageWidth={trip.width}
            imageHeight={trip.height}
            tripId={trip.id}
            detailedDescription={trip.detailedDescription}
            duration={trip.duration}
            price={trip.price}
            includes={trip.includes}
            excludes={trip.excludes}
            startLocation={trip.startLocation}
            endLocation={trip.endLocation}
          />
        ))}
      </div>

      {/* Structured data for trips */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "TouristTrip",
                "name": "Izlet u Krapinu i Trakošćan",
                "description": "07:30 – Polazak iz Čazme (moguć ukrcaj i na stajalištima prema Zagrebu uz prethodni dogovor)",
                "touristType": ["Cultural", "Historical"],
                "image": "https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/491592931_656896190432448_1123035946903958349_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "TouristTrip",
                "name": "Etno Selo",
                "description": "Nezaboravan Izlet od 21.06.-22.06",
                "touristType": ["Cultural", "Heritage"],
                "image": "https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "TouristTrip",
                "name": "Etno Selo Stanišić",
                "description": "Nezaboravan Izlet od 21.06.-22.06",
                "touristType": ["Cultural", "Heritage"],
                "image": "https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492538786_662984746490259_4430216144466043393_n.jpg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "TouristTrip",
                "name": "Plitvička Jezera",
                "description": "Jednodnevni izlet do UNESCO-ve svjetske baštine, s vođenim obilaskom i slobodnim vremenom.",
                "touristType": ["Nature", "UNESCO"],
                "image": "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "350.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "TouristTrip",
                "name": "Međugorje Hodočašće",
                "description": "Duhovno putovanje s molitvama, posjetima svetištima i stručnim vodičem.",
                "touristType": ["Religious", "Pilgrimage"],
                "image": "https://images.pexels.com/photos/273822/pexels-photo-273822.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "275.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "TouristTrip",
                "name": "Dubrovnik",
                "description": "Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.",
                "touristType": ["City", "Cultural", "Historical"],
                "image": "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg",
                "url": "https://kezeletaiprijevoz.hr#popular-trips",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "Kezele Prijevoz i Turistička Agencija",
                  "url": "https://kezeletaiprijevoz.hr"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "460.00",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock"
                }
              }
            }
          ]
        }
      `}} />
    </section>
  );
};

export default PopularTrips;
