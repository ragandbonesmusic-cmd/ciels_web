import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif selection:bg-foreground selection:text-background">
      <Helmet>
        <title>CIELS — Composer for Image and Dance</title>
        <meta name="description" content="Portfolio of CIELS, a composer for image and dance. Explore dance compositions, showreel, and music." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-24">
        
        {/* Header */}
        <header className="mb-24 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl tracking-widest uppercase mb-4 text-center md:text-left">
            CIELS
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline gap-4">
            <p className="text-lg italic text-muted-foreground">
              Composer for Image and Dance
            </p>
            <nav className="flex gap-6 text-sm tracking-widest uppercase">
              <a href="#statement" className="hover:text-muted-foreground transition-colors">Statement</a>
              <a href="#works" className="hover:text-muted-foreground transition-colors">Works</a>
              <a href="#contact" className="hover:text-muted-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          {/* Artist Statement */}
          <section id="statement" className="py-16">
            <h2 className="text-2xl mb-8 uppercase tracking-widest text-center md:text-left">I. Abstract</h2>
            <div className="prose prose-lg max-w-none text-foreground leading-loose">
              <p>
                The intersection of auditory perception and kinetic movement forms the foundation of my compositional practice. By treating sound not merely as an accompaniment to dance, but as a structural architecture that dictates spatial and temporal boundaries, I seek to explore the symbiotic relationship between the sonic and the visual.
              </p>
              <p>
                My work investigates the tension between silence and resonance, utilizing minimalist frameworks to amplify the subtle nuances of human motion. Through rigorous experimentation with acoustic instrumentation and electronic synthesis, each piece is meticulously crafted to serve as a dialogue between the composer, the choreographer, and the performer.
              </p>
            </div>
          </section>

          <hr className="border-border my-12" />

          {/* Works Section */}
          <section id="works" className="py-16">
            <h2 className="text-2xl mb-16 uppercase tracking-widest text-center md:text-left">II. Works</h2>
            
            <div className="space-y-24">
              
              {/* 1. CIELS Project */}
              <article>
                <header className="mb-6 border-b border-border pb-4">
                  <h3 className="text-xl uppercase tracking-widest mb-2">1. CIELS Project</h3>
                  <p className="text-sm text-muted-foreground italic">Primary Auditory Explorations</p>
                </header>
                <div className="prose prose-lg max-w-none text-foreground leading-loose mb-8">
                  <p>
                    The central pillar of my standalone compositional work. This project serves as a dedicated space for long-form sonic architecture, blending electroacoustic techniques with minimalist structural frameworks to create immersive auditory environments.
                  </p>
                </div>
                <div className="border border-border p-1 bg-white/50">
                  {/* SoundCloud Embed Placeholder */}
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ciels-placeholder&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                    title="CIELS Project SoundCloud"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </article>

              {/* 2. Ephemeral & Experimental Works */}
              <article>
                <header className="mb-6 border-b border-border pb-4">
                  <h3 className="text-xl uppercase tracking-widest mb-2">2. Ephemeral & Experimental Works</h3>
                  <p className="text-sm text-muted-foreground italic">Transient Sonic Sketches</p>
                </header>
                <div className="prose prose-lg max-w-none text-foreground leading-loose mb-6">
                  <p>
                    fA living, breathing archive of improvisational studies, modular synthesis experiments, and occasional creations. These fragments are documented and shared primarily through social platforms, embracing the ephemeral nature of digital consumption.
                  </p>
                </div>
                <a 
                  href="https://instagram.com/ciels_music" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  View Archive (@ciels_music)
                </a>
              </article>

              {/* 3. Dance Compositions */}
              <article>
                <header className="mb-8 border-b border-border pb-4">
                  <h3 className="text-xl uppercase tracking-widest mb-2">3. Dance Compositions</h3>
                  <p className="text-sm text-muted-foreground italic">Choreographic Soundscapes</p>
                </header>
                <div className="prose prose-lg max-w-none text-foreground leading-loose mb-8">
                  <p>
                    Collaborative works designed specifically for contemporary dance and movement research. These compositions function as spatial partners to the performers, dictating tension, release, and temporal boundaries.
                  </p>
                </div>
                
                <div className="space-y-8 pl-4 border-l border-border">
                  <div>
                    <h4 className="text-lg italic mb-1">Untitled Dance Piece #1</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">2024 — 18 min</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      A study in kinetic resonance and microtonal shifts, designed to support slow, deliberate choreographic sequences utilizing processed string textures.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg italic mb-1">Choreographic Study in Motion</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">2023 — 12 min</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      An exploration of polyrhythmic structures derived from field recordings. The composition challenges dancers to navigate complex, overlapping time signatures.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg italic mb-1">Spatial Dynamics</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">2022 — 24 min</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      An investigation of acoustic boundaries within a performance space, utilizing sub-bass frequencies to create a palpable sense of suspended gravity.
                    </p>
                  </div>
                </div>
              </article>

              {/* 4. Music for Image */}
              <article>
                <header className="mb-6 border-b border-border pb-4">
                  <h3 className="text-xl uppercase tracking-widest mb-2">4. Music for Image</h3>
                  <p className="text-sm text-muted-foreground italic">Visual Media Scoring</p>
                </header>
                <div className="prose prose-lg max-w-none text-foreground leading-loose mb-8">
                  <p>
                    Original soundtracks and auditory landscapes meticulously crafted to complement and elevate visual narratives. This discipline requires a delicate balance between emotional resonance and structural deference to the moving image.
                  </p>
                </div>
                <div className="aspect-video border border-border p-1 bg-white/50">
                  <iframe
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                    title="Music for Image Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </article>

            </div>
          </section>

          <hr className="border-border my-12" />

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <h2 className="text-2xl mb-8 uppercase tracking-widest text-center md:text-left">III. Contact & Inquiries</h2>
            <div className="prose prose-lg max-w-none text-foreground leading-loose">
              <p>
                I am currently available for commissioned work, collaborative projects, and scoring for visual media and contemporary dance. For all professional inquiries, academic discussions, or to request access to the complete audio archive, please reach out via email.
              </p>
              <div className="mt-8 text-center md:text-left">
                <a 
                  href="mailto:contact@ciels.art" 
                  className="inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  contact@ciels.art
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl tracking-widest uppercase mb-2">CIELS</p>
            <p className="text-sm text-muted-foreground italic">Composer for Image and Dance</p>
          </div>
          
          <div className="flex gap-6 text-sm uppercase tracking-widest">
            <a href="mailto:contact@ciels.art" className="hover:text-muted-foreground transition-colors">Inquiries</a>
            <a href="https://instagram.com/ciels_music" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">Instagram</a>
            <a href="https://youtube.com/@ciels" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">YouTube</a>
          </div>
          
          <div className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()}
          </div>
        </footer>

      </div>
    </div>
  );
};

export default HomePage;