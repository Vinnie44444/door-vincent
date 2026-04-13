import Image from "next/image";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}

function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="section-head">
          {kicker ? <div className="kicker">{kicker}</div> : null}
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

function Pill({ text, tone = "primary" }: { text: string; tone?: "primary" | "accent" }) {
  return <span className={`pill ${tone}`}>{text}</span>;
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function OfferCard({
  title,
  subtitle,
  items,
  tone,
  ctaText,
}: {
  title: string;
  subtitle: string;
  items: string[];
  tone: "primary" | "accent";
  ctaText: string;
}) {
  return (
    <div className="offer-card">
      <div className={`offer-top ${tone}`}>
        <div className="offer-badge">{title}</div>
        <p>{subtitle}</p>
      </div>
      <div className="offer-content">
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href="#contact" className={`btn ${tone === "accent" ? "btn-accent" : "btn-primary"}`}>
          {ctaText}
        </a>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="navbar">
        <Container>
          <div className="navbar-inner">
            <a href="#home" className="brand">
              <div className="brand-logo-wrap">
                <Image src="/logo-door-vincent.png" alt="Door Vincent logo" width={56} height={37} className="brand-logo" />
              </div>
              <div className="brand-text">
                <strong>Door Vincent</strong>
                <span>Training & Coaching</span>
              </div>
            </a>

            <nav className="navlinks">
              <a href="#aanbod">Aanbod</a>
              <a href="#diensten">Diensten</a>
              <a href="#certificering">Certificering</a>
              <a href="#over">Over</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="navcta">
              <a href="#aanbod" className="btn btn-outline">Bekijk aanbod</a>
              <a href="#contact" className="btn btn-accent">Vrijblijvend gesprek</a>
            </div>
          </div>
        </Container>
      </header>

      <section id="home" className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="pill-row">
                <Pill text="Bedrijven & teams" />
                <Pill text="Persoonlijke coaching" tone="accent" />
              </div>

              <h1>Praktische training en coaching voor mensen die vooruit willen</h1>

              <p className="hero-text">
                Door Vincent helpt supply chain-, planning- en inkoopprofessionals groeien in persoonlijk leiderschap,
                samenwerking en vakmanschap. Helder, mensgericht en direct toepasbaar.
              </p>

              <div className="cta-row">
                <a href="#aanbod" className="btn btn-primary">Bekijk aanbod</a>
                <a href="#contact" className="btn btn-outline">Plan een kennismaking</a>
              </div>

              <div className="pill-row">
                <Pill text="To-the-point" />
                <Pill text="Praktisch & mensgericht" tone="accent" />
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <Image src="/logo-door-vincent.png" alt="Door Vincent logo" width={520} height={300} className="hero-logo" />
              </div>
              <div className="hero-card-content">
                <div>
                  <div className="small-label">Kort overzicht</div>
                  <div className="hero-card-title">Wat je kunt verwachten</div>
                </div>
                <div className="checklist">
                  {[
                    "Trainingen voor teams (in-company)",
                    "Coaching voor leiders en professionals",
                    "DiSC, Denkstijlen & Drijfveren (DISC Factor)",
                    "Heldere aanpak met borging",
                  ].map((item) => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="aanbod"
        kicker="Aanbod"
        title="Twee lijnen: bedrijven en persoonlijk"
        subtitle="Kies wat past. Beide trajecten zijn praktisch, helder en gericht op vooruitgang."
      >
        <div className="grid-2">
          <OfferCard
            tone="primary"
            title="Voor bedrijven & teams"
            subtitle="In-company trainingen, teamcoaching en ontwikkelingstrajecten."
            items={[
              "Teamcoaching: samenwerking, eigenaarschap, ritme",
              "In-company trainingen (o.a. leiderschap, communicatie)",
              "Sparring met leidinggevenden (praktisch en to-the-point)",
              "Borging: afspraken, opvolging en meetbare stappen",
            ]}
            ctaText="Vraag een voorstel aan"
          />

          <OfferCard
            tone="accent"
            title="Persoonlijke coaching"
            subtitle="1-op-1 coaching voor groei in leiderschap, communicatie en zelfinzicht."
            items={[
              "Intake + heldere doelen",
              "DiSC-profiel + Denkstijlen en Drijfveren",
              "Praktische oefeningen en directe toepassing",
              "Persoonlijk ontwikkelplan met opvolging",
            ]}
            ctaText="Plan een intake"
          />
        </div>
      </Section>

      <Section
        id="diensten"
        kicker="Diensten"
        title="Waar ik je bij help"
        subtitle="Van teamontwikkeling tot persoonlijke groei — altijd met focus op gedrag én resultaat."
      >
        <div className="grid-3">
          <Card title="Training" text="In-company sessies en programma’s met veel interactie. Gericht op toepasbaarheid in het dagelijks werk." />
          <Card title="Coaching" text="1-op-1 of teamcoaching om gedrag, communicatie en samenwerking te versterken." />
          <Card title="Teamontwikkeling" text="Structuur aanbrengen, eigenaarschap vergroten en samenwerken verbeteren in supply chain en inkoop." />
        </div>
      </Section>

      <Section
        id="certificering"
        kicker="Gecertificeerd"
        title="DISC Factor: DiSC, Denkstijlen & Drijfveren"
        subtitle="Officiële certificering met praktische vertaalslag naar gedrag en samenwerking."
      >
        <div className="single-card">
          <div className="card">
            <h3>Gecertificeerd bij DISC Factor</h3>
            <p>
              Ik werk met DiSC-profielen en verdiep dat met Denkstijlen en Drijfveren. Daarmee maken we inzicht concreet:
              wat drijft iemand, wat is iemands voorkeur in denken en communiceren, en wat betekent dat in de praktijk?
            </p>
            <div className="pill-row" style={{ marginTop: 16 }}>
              <Pill text="DiSC" />
              <Pill text="Denkstijlen" />
              <Pill text="Drijfveren" tone="accent" />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="over"
        kicker="Over"
        title="Over Vincent"
        subtitle="Coachend naar het team, to-the-point naar directie."
      >
        <div className="grid-2">
          <div className="card">
            <p>
              Ik werk als trainer, coach en sparringpartner voor professionals in supply chain, planning en inkoop.
              Mijn stijl is informeel en mensgericht, met duidelijke afspraken en directe toepasbaarheid.
            </p>
            <ul className="list">
              <li>Rust en structuur in samenwerking</li>
              <li>Heldere communicatie in de keten</li>
              <li>Praktische borging in het team</li>
            </ul>
          </div>

          <div className="card">
            <div className="small-label">Werkwijze</div>
            <h3>Van doel naar gedrag naar resultaat</h3>
            <div className="steps">
              {[
                ["1", "Kennismaken", "Context en doelen scherp."],
                ["2", "Ontwerp", "Voorstel met meetbare stappen."],
                ["3", "Uitvoering", "Oefenen, feedback, toepassen."],
                ["4", "Borging", "Ritme en opvolging in het team."],
              ].map(([n, title, text]) => (
                <div key={n} className="step">
                  <div className="step-num">{n}</div>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        kicker="Contact"
        title="Plan een vrijblijvend gesprek"
        subtitle="Vertel kort wat je zoekt. Ik reageer snel en praktisch."
      >
        <div className="grid-2">
          <div className="card">
            <form className="form">
              <div className="grid-2">
                <input placeholder="Naam" />
                <input type="email" placeholder="E-mail" />
              </div>
              <input placeholder="Bedrijf (optioneel)" />
              <textarea rows={5} placeholder="Waarmee kan ik helpen?" />
              <button type="button" className="btn btn-accent">Verstuur</button>
              <p className="fineprint">
                Door het formulier te versturen ga je akkoord met verwerking van je gegevens om contact met je op te nemen.
              </p>
            </form>
          </div>

          <div className="stack">
            <div className="card">
              <div className="small-label">Praktisch</div>
              <p>Beschikbaar naast mijn rol als Supply Chain Manager. Momenteel beperkte capaciteit (2–4 uur per week).</p>
            </div>
            <div className="card">
              <div className="small-label">E-mail</div>
              <p>info@door-vincent.nl</p>
            </div>
            <div className="card">
              <div className="small-label">Snelle keuze</div>
              <div className="stack-buttons">
                <a href="#aanbod" className="btn btn-primary">Ik zoek iets voor mijn team</a>
                <a href="#aanbod" className="btn btn-outline">Ik zoek persoonlijke coaching</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <Container>
          <div className="footer-inner">
            <div>© {new Date().getFullYear()} Door Vincent · Alle rechten voorbehouden</div>
            <div className="footer-links">
              <Link href="#">Privacy</Link>
              <Link href="#">Algemene voorwaarden</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
