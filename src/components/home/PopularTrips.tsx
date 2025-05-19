import React from 'react';
import TripCard from '../ui/TripCard';
import SectionTitle from '../ui/SectionTitle';

const PopularTrips: React.FC = () => {
  const trips = [
    {
      id: 13,
      title: '13 izlet u Krapinu i Trakošćan',
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
        'Osiguranje putnika i organizacije putovanja',
        'afnkljasfljlasjlfja'
      ],
      excludes: [
        'Ručak (mogućnost dogovora)',
        'Osobne troškove',
        'Dodatne sadržaje koji nisu navedeni u programu'
      ],
      startLocation: 'Čazma (07:30), Bjelovar, Osijek'
    },
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
    },
    {
      id: 11,
      title: 'Etno Selo',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492364208_662115276577206_6878523898477944732_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tFfZi9pIic8Q7kNvwHIsd8L&_nc_oc=AdkHKBYegjTbtoVmOLEHXq0ceRlxewkhbhMIAqegnwFY64RcJlRvl2floKjd-bDuVCE&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=6syF7cDYThbbOUcg2nafkA&oh=00_AfFSHp-hTlESh49Cmm8ru86OD5kpL5rcXh_mWAEqXqW2FA&oe=681D8113',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: 'Doživite autentično iskustvo u tradicionalnom etno selu gdje se prošlost susreće sa sadašnjošću. Ovaj dvodnevni izlet nudi jedinstvenu priliku za upoznavanje s tradicijskim običajima, arhitekturom i gastronomijom. Posjetit ćete autohtone seoske kuće, sudjelovati u radionicama starih zanata i uživati u tradicionalnoj hrani pripremljenoj po receptima naših baka.',
      duration: '2 dana (21.06.-22.06.)',
      price: 'Od 95€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u tradicionalnim kućama (1 noćenje)',
        'Puni pansion (doručak, ručak, večera)',
        'Sudjelovanje u svim radionicama',
        'Stručno vodstvo',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Osobne troškove',
        'Dodatne aktivnosti izvan programa',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Čazma, Bjelovar (po dogovoru)'
    },
    {
      id: 1,
      title: 'Etno Selo Stanišić',
      description: 'Nezaboravan Izlet od 21.06.-22.06',
      imageUrl: 'https://scontent.fzag4-1.fna.fbcdn.net/v/t39.30808-6/492538786_662984746490259_4430216144466043393_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tNXPjiBhKG4Q7kNvwGl9SAX&_nc_oc=AdncCX7QA7dGl5O6-XObuQ3Awd2TJDEOesJs5UGdKS0-4TPLu3IJRE6krCoPacmBFSM&_nc_zt=23&_nc_ht=scontent.fzag4-1.fna&_nc_gid=bOwpOWcAq_fOzqp110W5xQ&oh=00_AfHYr5P9PWOp8leh3lk7bkVR5h9dth4_00jyg8ZS1shedw&oe=681DADC4',
      iconName: 'Palmtree',
      width: 800,
      height: 600,
      detailedDescription: 'Etno selo Stanišić jedinstveno je mjesto gdje možete doživjeti autentičnu atmosferu sela iz prošlosti. Tijekom ovog dvodnevnog putovanja, upoznat ćete se s bogatom kulturnom baštinom i tradicijom, uživati u domaćoj hrani i pićima, te sudjelovati u zanimljivim aktivnostima. Selo se sastoji od više od 50 autentičnih kuća, crkava i drugih objekata koji su doneseni iz raznih krajeva i vjerno predstavljaju tradicionalnu arhitekturu.',
      duration: '2 dana (21.06.-22.06.)',
      price: 'Od 120€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u etno selu (1 noćenje)',
        'Puni pansion s tradicionalnom kuhinjom',
        'Obilazak sela uz stručno vodstvo',
        'Sudjelovanje u tradicionalnim običajima',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Osobne troškove',
        'Dodatne aktivnosti po želji',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Čazma, Bjelovar (po dogovoru)'
    },
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
    {
      id: 4,
      title: 'Dubrovnik',
      description: 'Višednevni izlet do bisera Jadrana, s obilaskom povijesnih znamenitosti.',
      imageUrl: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
      iconName: 'Castle',
      width: 800,
      height: 533,
      detailedDescription: 'Dubrovnik, poznat kao "Biser Jadrana", jedna je od najljepših destinacija na Mediteranu. Tijekom ovog višednevnog putovanja, imat ćete priliku istražiti bogatu povijest i kulturu ovog UNESCO-m zaštićenog grada. Program uključuje obilazak gradskih zidina, Straduna, Onofrijeve fontane, Crkve sv. Vlaha, Kneževog dvora i drugih znamenitosti. Uz organizirane razglede, imat ćete dovoljno slobodnog vremena za samostalno istraživanje skrivenih kutaka grada, kupanje na predivnim plažama ili uživanje u lokalnoj gastronomiji.',
      duration: '3-4 dana',
      price: 'Od 240€ po osobi',
      includes: [
        'Autobusni prijevoz turističkim autobusom',
        'Smještaj u hotelu s 3-4* (2-3 noćenja)',
        'Polupansion (doručak i večera)',
        'Stručno vodstvo tijekom putovanja',
        'Razgled Dubrovnika s lokalnim vodičem',
        'Osiguranje putnika i organizacije putovanja'
      ],
      excludes: [
        'Ulaznice za znamenitosti (gradske zidine i sl.)',
        'Ručkove i piće uz obroke',
        'Osobne troškove',
        'Putno zdravstveno osiguranje'
      ],
      startLocation: 'Čazma, Bjelovar, Zagreb'
    }
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
