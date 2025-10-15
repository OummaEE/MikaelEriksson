import { Hono } from 'hono'
import { renderer } from './renderer'
import { Navigation, Footer, TimelineItem, ExhibitionCard, ArtworkCard } from './components'

const app = new Hono()

app.use(renderer)

// Hemsida - Elegant design inspirerad av Moooi
app.get('/', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle text-subheading">Konstnär från Flen</p>
            <h1 className="hero-title text-hero">Mikael Eriksson</h1>
            <p className="hero-description text-body">
              En konstnärlig resa från Stockholm via Berlin till Flen. Utforska verken från en av Sveriges mest 
              internationellt erfarna konstnärer som skapar parallella världar genom måleri och filosofi.
            </p>
            <a href="/konst" className="hero-cta">Utforska konstverken</a>
          </div>
        </section>

        {/* Featured Artworks Section */}
        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Aktuella verk
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
              Från UNFUCK THE WORLD!!! utställningen på Jakobsbergs konsthall - 
              stora färgglada målningar som utforskar urbana teman och filosofiska frågor.
            </p>
            
            <div className="gallery">
              <div className="gallery-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/93a484a63df63d082eb451818a383a1b" 
                     alt="Route 66 Angel Statue" className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="text-heading" style={{ color: 'white', marginBottom: '1rem' }}>
                    Stop Asking for Permission
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Angel staty möter Route 66 graffiti - en kraftfull kritik av auktoritet genom urbana symboler.
                  </p>
                </div>
              </div>
              
              <div className="gallery-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/524d2411d3798d3dbfeecbf4b53c24c6" 
                     alt="Psychedelic Urban Scene" className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="text-heading" style={{ color: 'white', marginBottom: '1rem' }}>
                    Urban Psychedelia
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Svampar och fjärilar i graffiti-landskap - naturens psykedeliska möte med urban decay.
                  </p>
                </div>
              </div>
              
              <div className="gallery-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/42988cb94da96d8eb238456ce286ac71" 
                     alt="Industrial Dystopia" className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="text-heading" style={{ color: 'white', marginBottom: '1rem' }}>
                    With Great Power
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Industriell dystopi med filosofiska budskap - Spider-Man citat möter urban verklighet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Highlights */}
        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Konstnärlig utbildning</h3>
                  <p className="card-description text-body">
                    Utbildning på Vancouver School of Art 1974 och filosofistudier vid Stockholms universitet 1976. 
                    En unik kombination av praktisk konstträning och teoretisk reflektion.
                  </p>
                  <a href="/biografi" className="card-link">Läs mer</a>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Berlin-perioden</h3>
                  <p className="card-description text-body">
                    1988-1990 i Östberlin under pseudonymen Matthias Elsmann. Upplevde Berlinmurens fall och 
                    blev en del av den alternativa konstscenen.
                  </p>
                  <a href="/berlin" className="card-link">Upptäck Berlin</a>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Internationell närvaro</h3>
                  <p className="card-description text-body">
                    Sedan 1975 regelbundna utställningar i Amsterdam, Berlin, Köpenhamn, Stockholm, Vancouver 
                    och andra städer världen över.
                  </p>
                  <a href="/utstallningar" className="card-link">Se utställningar</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Quote */}
        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              "Jag ville inte måla bilder; jag ville bygga en parallell värld. 
              Den måste fungera så länge målningen använder samma informationsbyggstenar som den yttre världen."
            </blockquote>
            <cite className="quote-author">Mikael Eriksson</cite>
          </div>
        </section>

        {/* Current Work CTA */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title text-display">Sätt färg på Flen</h2>
            <p className="cta-description text-body">
              Ett levande konstprojekt som färgsätter och levandegör staden. 
              Varje torsdag kl. 14-18 på Amazon leder Eriksson verksamheten och inspirerar andra deltagare.
            </p>
            <a href="/kontakt" className="cta-button">Kom och delta</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Mikael Eriksson - Konstnär från Flen' }
  )
})

// Biografisida
app.get('/biografi', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <p className="hero-subtitle text-subheading">En konstnärlig resa</p>
            <h1 className="hero-title text-hero">Biografi</h1>
            <p className="hero-description text-body">
              Från Stockholm via Vancouver och Berlin till Flen - fem decennier av konstnärlig utveckling 
              och internationellt kulturutbyte som format en unik konstnärlig röst.
            </p>
          </div>
        </section>

        <div className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Konstnärlig resa genom fem decennier
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              Mikael Eriksson föddes 1955 i Stockholm och har utvecklats till en av Sveriges mest 
              internationellt erfarna konstnärer. Hans resa från Stockholm via Vancouver och Berlin 
              till dagens Flen speglar en ständig strävan efter konstnärlig förnyelse och kulturellt utbyte.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="timeline-elegant">
              <div className="timeline-item">
                <div className="timeline-year">1955</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Född i Stockholm</h3>
                  <p className="text-body">
                    Mikael Eriksson föds i Stockholm och växer upp i en miljö som kommer att forma hans framtida konstnärliga vision.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1974</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Vancouver School of Art</h3>
                  <p className="timeline-location">Vancouver, Kanada</p>
                  <p className="text-body">
                    Påbörjar sina formella konststudier på Vancouver School of Art, där han får en internationell grund för sitt konstnärskap och exponeras för nordamerikansk konstscen.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1975</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Första internationella utställningar</h3>
                  <p className="text-body">
                    Börjar ställa ut internationellt. Regelbundna utställningar i Amsterdam, Berlin, Köpenhamn, Stockholm, Vancouver och andra städer blir en stadig del av verksamheten.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1976</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Filosofistudier</h3>
                  <p className="timeline-location">Stockholms universitet</p>
                  <p className="text-body">
                    Kompletterar sin konstnärliga utbildning med filosofistudier vid Stockholms universitet, vilket ger teoretisk fördjupning till det praktiska konstnärskapet.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1988</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Östberlin-kontakt</h3>
                  <p className="timeline-location">Östberlin, DDR</p>
                  <p className="text-body">
                    Söker kontakt med den unga konstscenen i Östberlin av intresse för samtidskonst. Tillbringar flera månader i Östberlin och knyter viktiga kontakter med lokala konstnärer.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1989</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Matthias Elsmann-perioden börjar</h3>
                  <p className="timeline-location">Kollwitzstrasse 53, Östberlin</p>
                  <p className="text-body">
                    Första utställning under pseudonymen Matthias Elsmann på Kollwitzstrasse 53. Denna identitet blir central för hans Berlin-period och konstscenens acceptans.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1989</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Berlinmurens fall</h3>
                  <p className="timeline-location">Berlin</p>
                  <p className="text-body">
                    Upplever den historiska händelsen Berlinmurens fall. Denna dramatiska förändring påverkar djupt hans konstnärliga världsbild och framtida skapande.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1990</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Haus der Jungen Talente</h3>
                  <p className="timeline-location">Berlin</p>
                  <p className="text-body">
                    Utställning på Haus der Jungen Talente som Matthias Elsmann i januari. Befäster sin position i Berlins alternativa konstscen.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1990-tal</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Knaackstraße 90</h3>
                  <p className="timeline-location">Berlin</p>
                  <p className="text-body">
                    Bor i det ockuperade huset Knaackstraße 90 och engagerar sig aktivt i det eponyma galleriet Galerie Knaack 90. Organiserar kulturutbyten mellan Berlin och Stockholm.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2000-tal</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Återvändande till Sverige</h3>
                  <p className="text-body">
                    Etablerar sig i Flen, Sörmland, där han fortsätter sin konstnärliga verksamhet med internationella influenser integrerade i svensk kontext.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3 className="text-heading">UNFUCK THE WORLD!!!</h3>
                  <p className="timeline-location">Jakobsbergs konsthall</p>
                  <p className="text-body">
                    Stor utställning på Jakobsbergs konsthall (30 november 2024 - 18 januari 2025). Stora färgglada målningar blandas med svartvita tryck i tusch.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Lilla Sörmlandssalongen</h3>
                  <p className="text-body">
                    Antagen till den jurybedömda Lilla Sörmlandssalongen 2025 (14 juni - 23 augusti). Arrangerad av föreningen Konst i Sörmlands hjärta tillsammans med Flens kommun.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Sätt färg på Flen</h3>
                  <p className="timeline-location">Amazon, Flen</p>
                  <p className="text-body">
                    Driver aktivt projektet 'Sätt färg på Flen' - ett konstprojekt som syftar till att färgsätta och levandegöra staden. Verksamhet torsdagar 14-18.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Geografisk konstnärlig resa
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
              Fyra städer som format en konstnär - varje plats har bidragit med unika perspektiv och influenser.
            </p>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Stockholm</h3>
                  <p className="card-subtitle">1955-1980-tal</p>
                  <p className="card-description text-body">
                    Uppväxt och grundläggande konstnärlig utveckling. Filosofistudier vid Stockholms universitet ger teoretisk grund för framtida skapande.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Vancouver</h3>
                  <p className="card-subtitle">1974</p>
                  <p className="card-description text-body">
                    Vancouver School of Art ger internationell konstnärlig utbildning och nordamerikansk perspektiv som breddade konstsynen.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Berlin</h3>
                  <p className="card-subtitle">1988-1990-tal</p>
                  <p className="card-description text-body">
                    Transformativ period i Östberlin. Pseudonymen Matthias Elsmann, Knaackstraße 90 och upplevelsen av Berlinmurens fall.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Flen</h3>
                  <p className="card-subtitle">2000-tal - idag</p>
                  <p className="card-description text-body">
                    Nuvarande hemvist i Sörmland. Projektet "Sätt färg på Flen" och aktiv medverkan i regionala konstsammanhang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Biografi - Mikael Eriksson' }
  )
})

// Berlin-perioden
app.get('/berlin', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <p className="hero-subtitle text-subheading">1988-1990</p>
            <h1 className="hero-title text-hero">Berlin-perioden</h1>
            <p className="hero-description text-body">
              En transformativ period i Östberlin som formade både konstnärlig identitet och förståelse av konstens roll. 
              Under pseudonymen Matthias Elsmann blev Mikael Eriksson en del av den alternativa konstscenen i en stad i dramatisk förändring.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Matthias Elsmann i Östberlin
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              Erikssons tid i Östberlin blev en transformativ period som formade både hans konstnärliga identitet 
              och hans förståelse av konstens roll i samhället. Under pseudonymen Matthias Elsmann blev han en 
              del av den alternativa konstscenen i en stad i dramatisk förändring.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Kronologi av Berlin-perioden
            </h2>
            <div className="timeline-elegant">
              <div className="timeline-item">
                <div className="timeline-year">1988</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Första kontakt med Östberlin</h3>
                  <p className="text-body">
                    Söker kontakt med den unga konstscenen i Östberlin av intresse för samtidskonst. Tillbringar flera månader i Östberlin och knyter viktiga kontakter med lokala konstnärer.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1989</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Kollwitzstrasse 53-utställning</h3>
                  <p className="text-body">
                    Första utställning under pseudonymen Matthias Elsmann på Kollwitzstrasse 53. Detta markerar början på hans etablering i Östberlins konstscen.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Nov 1989</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Berlinmurens fall</h3>
                  <p className="text-body">
                    Upplever denna historiska händelse på nära håll. Murens fall blir inte bara en politisk utan också en djupt konstnärlig upplevelse som påverkar hans framtida verk.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Jan 1990</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Haus der Jungen Talente</h3>
                  <p className="text-body">
                    Utställning på Haus der Jungen Talente som Matthias Elsmann. Befäster sin position som en erkänd konstnär inom Berlins alternativa konstscen.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">1990-tal</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Knaackstraße 90</h3>
                  <p className="text-body">
                    Bor i det ockuperade huset Knaackstraße 90 och blir aktivt engagerad i det eponyma galleriet Galerie Knaack 90. Organiserar kulturutbyten mellan Berlin och Stockholm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Pseudonymen Matthias Elsmann
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
              En artistisk identitet som möjliggjorde djupare integration med Östberlins konstscen.
            </p>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Varför en pseudonym?</h3>
                  <p className="card-description text-body">
                    Användningen av pseudonymen Matthias Elsmann var inte bara praktisk utan också konstnärligt motiverad. 
                    Den möjliggjorde en djupare integration med den lokala konstscenen och skapade en artistisk identitet 
                    som kunde navigera i Östberlins komplexa kulturella landskap.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Konstnärlig identitet</h3>
                  <p className="card-description text-body">
                    Som Matthias Elsmann kunde Eriksson utforska nya konstnärliga uttryck och teman som var specifikt 
                    kopplade till Berlins unika situation. Denna dubbla identitet berikade hans konstnärliga utveckling 
                    och gav honom tillgång till nya perspektiv.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Knaackstraße 90 - Det ockuperade huset
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              Knaackstraße 90 var mer än bara en bostadsadress - det var centrum för en alternativ kulturell rörelse. 
              Här bodde konstnärer, aktivister och kreativa individer som tillsammans skapade en unik miljö för 
              konstnärlig experimentation och kulturell förnyelse.
            </p>
            
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Galerie Knaack 90</h3>
                  <p className="card-description text-body">
                    Det eponyma galleriet blev en plattform för alternativ konst och kulturella aktiviteter. 
                    Eriksson var aktivt engagerad i galleriet och bidrog till dess roll som mötesplats för 
                    konstnärer från olika bakgrunder.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Kulturutbyten</h3>
                  <p className="card-description text-body">
                    Eriksson organiserade utbyten mellan Berlin och Stockholm, vilket skapade broar mellan 
                    de två städernas konstscenar. Dessa utbyten bidrog till en bredare internationell dialog 
                    inom konstvärlden.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Wilfriede Maaß verkstad</h3>
                  <p className="card-description text-body">
                    Använde keramikern Wilfriede Maaß verkstad som mötesplats med andra bildkonstnärer. 
                    Dessa personliga nätverk blev avgörande för Erikssons förståelse och upplevelse av Östberlin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              Personliga nätverk präglade tydligt konstnären Mikael Eriksson och hans uppfattning om Östberlin.
            </blockquote>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Konstnärliga influenser från Berlin
            </h2>
            
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Berlin-perioden lämnade outplånliga spår i Erikssons konst. Upplevelsen av en stad i dramatisk 
              förändring, mötet med alternativa kulturer och den intensiva kreativa atmosfären i Knaackstraße 90 
              blev grundstenar i hans fortsatta konstnärliga utveckling.
            </p>
            
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Även idag, decennier senare, kan man se ekon från Berlin-tiden i hans verk. Graffititags som 
              "UNFUCK THE WORLD!!!" och referenser till den östtyska bilen Trabant vittnar om en period som 
              fortsätter att inspirera och forma hans konstnärliga uttryck.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Berlin-perioden - Mikael Eriksson' }
  )
})

// Utställningar
app.get('/utstallningar', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <p className="hero-subtitle text-subheading">Fem decennier av utställningar</p>
            <h1 className="hero-title text-hero">Utställningar</h1>
            <p className="hero-description text-body">
              Från Östberlin till Jakobsbergs konsthall - en kronologi av internationella och nationella utställningar 
              som spänner över fem decennier av konstnärligt skapande.
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Aktuella utställningar
            </h2>
            <div className="card-grid">
              <div className="card exhibition-active">
                <div className="card-content">
                  <div className="exhibition-status">Pågående</div>
                  <h3 className="card-title text-heading">UNFUCK THE WORLD!!!</h3>
                  <p className="card-subtitle">Jakobsbergs konsthall</p>
                  <p className="exhibition-date">30 november 2024 - 18 januari 2025</p>
                  <p className="card-description text-body">
                    Den senaste stora utställningen med stora färgglada målningar som blandas med mindre svartvita tryck i tusch. 
                    Vernissage lördag 30 november 2024 kl. 12-15.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Kommande utställningar 2025
            </h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <div className="exhibition-status upcoming">Kommande</div>
                  <h3 className="card-title text-heading">Lilla Sörmlandssalongen 2025</h3>
                  <p className="card-subtitle">Flens kommun (utställningslokal)</p>
                  <p className="exhibition-date">14 juni - 23 augusti 2025</p>
                  <p className="card-description text-body">
                    Jurybedömd utställning arrangerad för första gången i en mindre utställningslokal. 
                    Arrangeras av föreningen Konst i Sörmlands hjärta i samarbete med Flens kommun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Historiska utställningar
            </h2>
            
            <h3 className="text-subheading" style={{ marginBottom: '2rem' }}>Berlin-perioden (1988-1990)</h3>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h4 className="card-title text-heading">Matthias Elsmann-utställning</h4>
                  <p className="card-subtitle">Kollwitzstrasse 53, Östberlin</p>
                  <p className="exhibition-date">1989</p>
                  <p className="card-description text-body">
                    Första utställning under pseudonymen Matthias Elsmann. Markerade början på Erikssons etablering i Östberlins konstscen.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h4 className="card-title text-heading">Matthias Elsmann-utställning</h4>
                  <p className="card-subtitle">Haus der Jungen Talente, Berlin</p>
                  <p className="exhibition-date">Januari 1990</p>
                  <p className="card-description text-body">
                    Utställning som befäste Erikssons position som en erkänd konstnär inom Berlins alternativa konstscen.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-subheading" style={{ margin: '4rem 0 2rem' }}>Internationella utställningar (1975-)</h3>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h4 className="card-title text-heading">Regelbundna utställningar sedan 1975</h4>
                  <p className="text-body"><strong>Städer:</strong></p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Amsterdam, Nederländerna</li>
                    <li>Berlin, Tyskland</li>
                    <li>Köpenhamn, Danmark</li>
                    <li>Stockholm, Sverige</li>
                    <li>Vancouver, Kanada</li>
                    <li>Andra internationella städer</li>
                  </ul>
                  <p className="text-body" style={{ marginTop: '1rem' }}>
                    Över fem decennier av kontinuerliga internationella utställningar har etablerat 
                    Eriksson som en konstnär med verkligt internationell räckvidd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              Titeln kommer från en graffittagg som Eriksson såg på en husvägg i Berlin, som han först tyckte var ett coolt citat 
              men som blev till "en bön för att världen någon gång ska bli fri från oroligheter".
            </blockquote>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              "UNFUCK THE WORLD!!!" - Fördjupning
            </h2>
            
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Konstverken</h3>
                  <p className="text-body"><strong>Stora färgglada målningar:</strong></p>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Inklippta graffititags som "There is no planet B"</li>
                    <li>Populärkulturella referenser från nutid och det förgångna</li>
                    <li>Den östtyska bilen Trabant förekommer återkommande</li>
                    <li>Karl från Snobben går mot en skylt som säger "HOPE"</li>
                  </ul>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Mindre svartvita tryck</h3>
                  <p className="card-description text-body">
                    Kontrasterar mot de färgglada målningarna med tuschbaserade tryck. 
                    Denna kontrast skapar en dynamisk dialog mellan färg och monokrom, 
                    mellan stort och litet format.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Konstnärens reflektion</h3>
                  <p className="card-description text-body">
                    "En slags blandning av allt jag har varit med om" - Eriksson beskriver sina verk som 
                    en syntes av livserfarenheter. "Det är roligt att måla någonting som tar tid att ta sig in i, 
                    det är som att man ockuperar tid av betraktaren."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Utställningsfilosofi
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Erikssons utställningar karakteriseras av en djup reflektion över tiden och dess påverkan på konst. 
              Hans verk kräver tid från betraktaren - de är inte avsedda för snabba intryck utan för djup kontemplation. 
              Denna "ockupation av betraktarens tid" är en medveten konstnärlig strategi som speglar hans filosofiska bakgrund.
            </p>
            
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Från Berlin-periodens alternativa gallerier till dagens etablerade konsthallar har Eriksson behållit 
              sin experimentella approach och sin vilja att utmana både sig själv och sin publik.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Utställningar - Mikael Eriksson' }
  )
})

// Konstgalleri och konstnärlig filosofi
app.get('/konst', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <p className="hero-subtitle text-subheading">Parallella världar</p>
            <h1 className="hero-title text-hero">Konst & Filosofi</h1>
            <p className="hero-description text-body">
              Utforska Mikael Erikssons konstnärliga vision - från filosofiska grundstenar till färgglada 
              verk som bygger parallella världar med samma informationsbyggstenar som verkligheten.
            </p>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              "Jag ville inte måla bilder; jag ville bygga en parallell värld. 
              Den måste fungera så länge målningen använder samma informationsbyggstenar som den yttre världen..."
            </blockquote>
            <cite className="quote-author">Mikael Eriksson</cite>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Konstnärlig vision
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Mikael Erikssons konst karakteriseras av en unik ambition att skapa parallella världar snarare än 
              traditionella representationer. Hans verk fungerar som komplexa informationssystem som speglar 
              och kommenterar vår yttre verklighet genom konstnärliga medel.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Stilistisk utveckling
            </h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Tidiga influenser</h3>
                  <p className="card-subtitle">1974-1980</p>
                  <p className="card-description text-body">
                    <strong>Vancouver School of Art:</strong> Grundläggande teknisk träning i måleri och grafik.<br />
                    <strong>Filosofistudier:</strong> Teoretisk fördjupning som format den konceptuella grunden.<br />
                    <strong>Första internationella kontakter:</strong> Exponering för olika konstnärliga traditioner.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Berlin-perioden</h3>
                  <p className="card-subtitle">1988-1990</p>
                  <p className="card-description text-body">
                    <strong>Alternativ konstscen:</strong> Exponering för experimentell och politiskt medveten konst.<br />
                    <strong>Graffiti-influenser:</strong> Integration av gaturummet i fine art-kontexten.<br />
                    <strong>Historiska upplevelser:</strong> Berlinmurens fall som konstnärlig katalysator.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Färgperioden</h3>
                  <p className="card-subtitle">2020-tal</p>
                  <p className="card-description text-body">
                    <strong>"Ovanligt mycket färg":</strong> Kontrast mot tidigare perioder.<br />
                    <strong>Populärkultur-integration:</strong> Referenser till nutid och det förgångna.<br />
                    <strong>Komplex narrativ:</strong> "En slags blandning av allt jag har varit med om."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Tekniker och medier
            </h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Måleri</h3>
                  <p className="card-description text-body">
                    Stora färgglada målningar som kombinerar traditionella tekniker med moderna tematik. 
                    Användning av inklippta element som graffititags och populärkulturella referenser 
                    skapar lager av betydelse och temporal komplexitet.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Grafik och tryck</h3>
                  <p className="card-description text-body">
                    Mindre svartvita tryck i tusch som kontrasterar mot de stora målningarna. 
                    Denna teknik-kombination skapar en dialog mellan olika uttryckssätt och 
                    format inom samma konstnärliga vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-section">
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
              <i className="fas fa-images"></i> VERKGALLERI - AUTENTISKA KONSTVERK
            </h2>
            
            <div className="artwork-gallery">
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/93a484a63df63d082eb451818a383a1b" 
                     alt="Route 66 Angel Statue" />
                <div className="artwork-overlay">
                  <h4>STOP ASKING FOR PERMISSION</h4>
                  <p>2024 - Akryl på duk - Angel staty möter Route 66 graffiti kultur</p>
                </div>
              </div>
              
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/524d2411d3798d3dbfeecbf4b53c24c6" 
                     alt="Psychedelic Urban Night Scene" />
                <div className="artwork-overlay">
                  <h4>URBAN PSYCHEDELIA</h4>
                  <p>2024 - Blandat media - Svampar och fjärilar i graffiti-landskap</p>
                </div>
              </div>
              
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/42988cb94da96d8eb238456ce286ac71" 
                     alt="Industrial Dystopia with Caution Signs" />
                <div className="artwork-overlay">
                  <h4>WITH GREAT POWER...</h4>
                  <p>2024 - Akryl - Industriell dystopi med filosofiska budskap</p>
                </div>
              </div>
              
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/bdf9068e4d0cd8ac382a98ff804f64ea" 
                     alt="Portrait Behind Chain Link Fence" />
                <div className="artwork-overlay">
                  <h4>24 GIANT SIZE PKGS</h4>
                  <p>2024 - Akryl och tusch - Identitet bakom industriella metaforer</p>
                </div>
              </div>
              
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/459c1a11b046d3015219f2f9e52e6324" 
                     alt="Blue Portrait Fragment" />
                <div className="artwork-overlay">
                  <h4>BLUE FRAGMENTS</h4>
                  <p>2024 - Tusch - Fragmentariska porträtt i blå toner</p>
                </div>
              </div>
              
              <div className="artwork-item">
                <img src="https://page.gensparksite.com/v1/base64_upload/ec1ecf4678e67c0f6e2c7ffe16a809d9" 
                     alt="Swedish Rural Homestead" />
                <div className="artwork-overlay">
                  <h4>SVENSKA RÖTTER</h4>
                  <p>2020-tal - Akvarell - Nostalgisk reflektion över svensk landsbygd</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              "Det är roligt att måla någonting som tar tid att ta sig in i, det är som att man ockuperar tid av betraktaren."
            </blockquote>
            <cite className="quote-author">Mikael Eriksson</cite>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Tid som konstnärligt element
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              En central aspekt av Erikssons konst är hans medvetna relation till tid. Hans verk är inte designade 
              för snabba intryck utan kräver engagemang och tid från betraktaren. Denna "ockupation av tid" är både 
              en estetisk strategi och en filosofisk hållning om konstens roll i ett allt snabbare samhälle.
            </p>
            
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Lager av betydelse</h3>
                  <p className="card-description text-body">
                    Verken innehåller multipla referensnivåer - från personliga minnen till historiska händelser, 
                    från populärkultur till djup filosofisk reflektion. Varje lager kräver tid att upptäcka och förstå.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Informationsbyggstenar</h3>
                  <p className="card-description text-body">
                    Erikssons koncept om "samma informationsbyggstenar som den yttre världen" innebär att konsten 
                    använder verklighetens element för att skapa nya sammanhang och betydelser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Internationell kontext
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Erikssons konst måste förstås i en internationell kontext. Från Vancouver till Berlin, från Amsterdam 
              till Stockholm - hans verk bär influenser från olika kulturer och konsttraditioner. Denna kosmopolitiska 
              bakgrund gör hans konst relevant både lokalt i Flen och internationellt.
            </p>
            
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              Samtidigt förblir han rotad i svenska traditioner och svensk populärkultur, vilket skapar en unik 
              syntes mellan det lokala och det globala, mellan det personliga och det universella.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Konst - Mikael Eriksson' }
  )
})

// Kontakt och nuvarande verksamhet
app.get('/kontakt', (c) => {
  return c.render(
    <div>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <p className="hero-subtitle text-subheading">Kom och delta</p>
            <h1 className="hero-title text-hero">Kontakt</h1>
            <p className="hero-description text-body">
              Träffa Mikael Eriksson i Flen och bli en del av det levande konstprojektet "Sätt färg på Flen". 
              Varje torsdag välkomnas alla som vill bidra till stadens konstnärliga utveckling.
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              "Sätt färg på Flen"
            </h2>
            <p className="text-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
              Ett levande konstprojekt som syftar till att färgsätta och levandegöra staden Flen. 
              Mikael Eriksson leder personligen verksamheten och visar vägen för andra deltagare.
            </p>
            
            <div className="contact-schedule">
              <div style={{ textAlign: 'center', background: 'var(--soft-gray)', padding: '3rem 2rem', borderRadius: '8px' }}>
                <h3 className="text-heading" style={{ marginBottom: '2rem' }}>Öppettider och plats</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <p className="text-body"><strong>Torsdagar kl. 14-18</strong></p>
                  <p className="text-body"><strong>Amazon, Flen</strong></p>
                  <p className="text-body" style={{ fontStyle: 'italic' }}>Eriksson leder verksamheten och visar vägen för andra deltagare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Bosatt i Flen, Sörmland
            </h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Geografisk placering</h3>
                  <p className="card-description text-body">
                    Flen ligger i Sörmland och har blivit Erikssons hem och konstnärliga bas efter decennier 
                    av internationella erfarenheter. Här kombinerar han sina världsomspännande influenser 
                    med djup lokal förankring.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Lokalt engagemang</h3>
                  <p className="card-description text-body">
                    Projektet "Sätt färg på Flen" visar Erikssons commitment till sin nya hemstad. 
                    Som konstnär tar han aktivt ansvar för att bidra till stadens kulturella utveckling 
                    och skapa möjligheter för andra att engagera sig i kreativt arbete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Digital närvaro
            </h2>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Instagram</h3>
                  <p className="card-subtitle">@kompactlivingspace</p>
                  <p className="card-description text-body">
                    Eriksson dokumenterar sitt konstnärliga arbete och vardagsliv mellan Berlin, Flen och andra platser. 
                    Här kan man följa hans pågående projekt och få inblick i den kreativa processen.
                  </p>
                  <a href="https://www.instagram.com/kompactlivingspace" target="_blank" 
                     className="card-link" style={{ display: 'inline-block', marginTop: '1rem' }}>
                    Besök Instagram →
                  </a>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">Dokumentation</h3>
                  <p className="card-description text-body">
                    Genom sin Instagram-aktivitet ger Eriksson en unik inblick i en arbetande konstnärs vardag. 
                    Från atelje-sessioner till utställningsförberedelser, från Flen till Berlin - följ resan 
                    genom en konstnärs ögon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Samarbeten och nätverk
            </h2>
            
            <h3 className="text-subheading" style={{ marginBottom: '2rem' }}>Konst i Sörmlands hjärta</h3>
            <div className="card" style={{ marginBottom: '3rem' }}>
              <div className="card-content">
                <p className="text-body">
                  Eriksson deltar aktivt i regionala konstinitiativ, inklusive Lilla Sörmlandssalongen 2025 
                  som arrangeras av föreningen Konst i Sörmlands hjärta i samarbete med Flens kommun. 
                  Detta visar hans engagemang för att stärka konstscenen i Sörmland.
                </p>
              </div>
            </div>

            <h3 className="text-subheading" style={{ marginBottom: '2rem' }}>Internationella kontakter</h3>
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h4 className="card-title text-heading">Berlin-nätverket</h4>
                  <p className="card-description text-body">
                    Kontinuerliga kontakter med konstscenen i Berlin sedan 1980-talet. 
                    Dessa relationer fortsätter att inspirera och påverka hans konstnärliga utveckling.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h4 className="card-title text-heading">Internationella gallerier</h4>
                  <p className="card-description text-body">
                    Etablerade relationer med gallerier och konstinstitutioner i Amsterdam, Köpenhamn, 
                    Stockholm, Vancouver och andra städer från över fem decennier av utställningsverksamhet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Aktuell verksamhet 2025
            </h2>
            <div className="timeline-elegant">
              <div className="timeline-item">
                <div className="timeline-year">Pågående</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Sätt färg på Flen</h3>
                  <p className="text-body">
                    Kontinuerlig verksamhet varje torsdag kl. 14-18 på Amazon. Eriksson leder personligen projektet och välkomnar nya deltagare.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">14 juni - 23 aug</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Lilla Sörmlandssalongen 2025</h3>
                  <p className="text-body">
                    Jurybedömd utställning i samarbete med Flens kommun. Första gången i mindre utställningslokal.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">Pågående</div>
                <div className="timeline-content">
                  <h3 className="text-heading">Instagram-dokumentation</h3>
                  <p className="text-body">
                    Kontinuerlig dokumentation av konstnärligt arbete och vardagsliv på @kompactlivingspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container">
            <blockquote className="quote-text">
              Intresserade av att delta i "Sätt färg på Flen" eller träffa Mikael Eriksson är välkomna 
              torsdagar kl. 14-18 på Amazon i Flen.
            </blockquote>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--soft-gray)' }}>
          <div className="container">
            <h2 className="text-display" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Besöksinformation
            </h2>
            
            <div className="card-grid">
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">För deltagare</h3>
                  <p className="card-description text-body">
                    Projektet välkomnar alla som vill bidra till att färgsätta Flen. Ingen tidigare 
                    erfarenhet krävs - Eriksson visar vägen och delar sin kunskap med alla deltagare.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">För konstintresserade</h3>
                  <p className="card-description text-body">
                    Möjlighet att träffa en etablerad konstnär med internationell erfarenhet och 
                    få inblick i både pågående projekt och konstnärliga processer.
                  </p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title text-heading">För media</h3>
                  <p className="card-description text-body">
                    Kontakt för intervjuer och reportage om både "Sätt färg på Flen"-projektet och 
                    Erikssons bredare konstnärliga verksamhet kan tas via Instagram eller genom 
                    direktbesök torsdagar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title text-display">Hitta till Amazon, Flen</h2>
            <div style={{ background: 'white', padding: '3rem 2rem', borderRadius: '8px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <p className="text-heading" style={{ marginBottom: '2rem' }}>
                <strong>Amazon, Flen, Sörmland</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p className="text-body"><strong>Öppet:</strong> Torsdagar 14-18</p>
                <p className="text-body"><strong>Ledare:</strong> Mikael Eriksson</p>
                <p className="text-body"><strong>Projekt:</strong> Sätt färg på Flen</p>
              </div>
              <p className="text-small" style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                Flen är lättillgängligt med tåg från Stockholm och andra större städer. 
                Amazon ligger centralt i Flen och är välkänt bland lokalbefolkningen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>,
    { title: 'Kontakt - Mikael Eriksson' }
  )
})

export default app
