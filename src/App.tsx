import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { StandardsPage } from './pages/StandardsPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { RoiCalculatorPage } from './pages/RoiCalculatorPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { DiagnosticTool } from './components/DiagnosticTool';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteBuilderModal } from './components/QuoteBuilderModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ServiceItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('inicio');
  const [targetStandardCode, setTargetStandardCode] = useState<string | null>(null);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string>('');
  const [quoteDataTarget, setQuoteDataTarget] = useState<string>('');

  // Sync with browser URL hash for real bookmarkable and shareable page links
  useEffect(() => {
    const parseHash = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '').trim();
      if (!rawHash) {
        setCurrentPage('inicio');
        return;
      }
      
      const parts = rawHash.split('/');
      const page = parts[0] || 'inicio';
      const subParam = parts[1] || null;

      const validPages = [
        'inicio', 
        'servicios', 
        'normas', 
        'metodologia', 
        'calculadora', 
        'casos-exito', 
        'nosotros', 
        'recursos', 
        'preguntas', 
        'contacto'
      ];

      if (validPages.includes(page)) {
        setCurrentPage(page);
        if (page === 'normas' && subParam) {
          setTargetStandardCode(decodeURIComponent(subParam));
        }
      } else {
        setCurrentPage('inicio');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page: string, subParam?: string) => {
    setCurrentPage(page);
    if (subParam) {
      setTargetStandardCode(subParam);
      window.location.hash = `#/${page}/${encodeURIComponent(subParam)}`;
    } else {
      window.location.hash = `#/${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  const handleOpenQuote = (serviceName?: string) => {
    setQuoteServiceTarget(serviceName || 'ISO 9001:2015 (Calidad)');
    setQuoteDataTarget('');
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithData = (diagnosticData: string) => {
    setQuoteServiceTarget('Propuesta basada en Diagnóstico Gap');
    setQuoteDataTarget(diagnosticData);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Universal Multi-Page Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDiagnostic={handleOpenDiagnostic}
        onOpenQuote={handleOpenQuote}
      />

      {/* Dynamic Page Router Body */}
      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <HomePage
            onOpenDiagnostic={handleOpenDiagnostic}
            onOpenQuote={handleOpenQuote}
            onSelectServiceModal={(service) => setSelectedServiceModal(service)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'servicios' && (
          <ServicesPage
            onSelectServiceModal={(service) => setSelectedServiceModal(service)}
            onOpenQuote={handleOpenQuote}
            onOpenDiagnostic={handleOpenDiagnostic}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'normas' && (
          <StandardsPage
            initialStandardCode={targetStandardCode}
            onOpenQuote={handleOpenQuote}
            onOpenDiagnostic={handleOpenDiagnostic}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'metodologia' && (
          <MethodologyPage
            onOpenDiagnostic={handleOpenDiagnostic}
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'calculadora' && (
          <RoiCalculatorPage
            onOpenQuote={handleOpenQuote}
            onOpenDiagnosticModal={handleOpenDiagnostic}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'casos-exito' && (
          <CaseStudiesPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'nosotros' && (
          <AboutPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'recursos' && (
          <KnowledgePage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'preguntas' && (
          <FaqPage
            onOpenQuote={handleOpenQuote}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactPage
            initialService={quoteServiceTarget}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Universal Multi-Page Footer */}
      <Footer
        onOpenDiagnostic={handleOpenDiagnostic}
        onOpenQuote={handleOpenQuote}
        onNavigate={navigateTo}
      />

      {/* Interactive Global Modals */}
      <DiagnosticTool
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
        onOpenQuoteWithData={handleOpenQuoteWithData}
      />

      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteBuilderModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteServiceTarget}
        defaultData={quoteDataTarget}
      />

      {/* Persistent Floating WhatsApp Concierge */}
      <WhatsAppWidget />
    </div>
  );
}
