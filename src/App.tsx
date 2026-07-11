import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';

import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

import { Routes, Route } from 'react-router-dom';
import { AdminPanel } from './components/AdminPanel';

const MainSite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Section observer to update active navbar item on scroll
  useEffect(() => {
    const sections = ['home', 'collection', 'about', 'gallery', 'visit'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the center of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for scroll fade-in animations
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05,
      }
    );

    fadeElements.forEach((el) => animObserver.observe(el));

    return () => animObserver.disconnect();
  }, []);

  return (
    <>
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} onLinkClick={scrollToSection} />

      {/* Hero Banner Showcase */}
      <Hero 
        onBrowseClick={() => scrollToSection('collection')} 
        onVisitClick={() => scrollToSection('visit')} 
      />

      {/* 6-Step Clickable Arched Stepper Layout (Design Your Dream Sofa) */}
      <Process />

      {/* Catalog Showcases */}
      <Collection />
      
      {/* Value Proposition features */}
      <WhyChooseUs />
      
      {/* About story details */}
      <About />
      
      {/* Portfolio Gallery */}
      <Gallery />
      
      {/* Testimonial reviews */}
      <Reviews />

      {/* FAQs */}
      <FAQ />

      {/* Google Maps / Contact details */}
      <VisitUs />

      {/* Footer */}
      <Footer onLinkClick={scrollToSection} />

      {/* Sticky Floating WhatsApp Widget */}
      <WhatsAppButton />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
