import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Search } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt & Termin | The Gentleman's Cut Berlin</title>
        <meta 
          name="description" 
          content="Kontaktieren Sie Barber Style in Nürnberg. Vereinbaren Sie Ihren Termin über unseren Chatbot oder rufen Sie uns an. Mo-Sa 09-20 Uhr." 
        />
        <link rel="canonical" href="https://gentlemanscut.de/kontakt" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "@id": "https://example-barbershop.at/#barbershop",
            "name": "Barber Style Nürnberg",
            "url": "https://gentlemanscut.de",
            "telephone": "+49 911 99284458",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Königstraße 73",
              "addressLocality": "Nürnberg",
              "postalCode": "90402",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.4486361",
              "longitude": "11.0782046"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Nürnberg"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Kontakt</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Wir freuen uns auf Sie
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kontakt & Termin
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
                Nutzen Sie unseren Chatbot oder rufen Sie uns direkt an.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Chatbot */}
              <AnimateOnScroll animation="slide-left">
                <div className="bg-card border border-border rounded-sm p-8 md:p-10 h-fit">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>

                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Termin buchen & Fragen stellen
                  </h2>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Unser Chatbot steht Ihnen rund um die Uhr zur Verfügung. 
                    Buchen Sie bequem Ihren Termin oder erhalten Sie individuelle Empfehlungen.
                  </p>

                  <Button variant="gold" size="xl" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Rechts unten Chat starten
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-muted-foreground text-sm">Oder rufen Sie uns direkt an:</p>
                    <a href="tel:091199284458" className="text-primary font-semibold hover:underline">
                      091199284458
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Contact Info + Map */}
              <AnimateOnScroll animation="slide-right">
                <div className="space-y-8">
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    So erreichen Sie uns
                  </h2>

                  <div className="aspect-video rounded-sm overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.8984580156325!2d11.07820457689239!3d49.44863615898781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f577dba3fe8fb%3A0xf35014ab621cb12b!2sBarber%20Style%20N%C3%BCrnberg!5e0!3m2!1sde!2sde!4v1769024008379!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort Barber Style Nürnberg"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;


