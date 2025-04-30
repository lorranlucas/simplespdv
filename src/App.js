import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slider from 'react-slick';
import logo from './logo-simplespdv.png';
import desktopScreenshot from './Balcao.png';
import onlineScreenshot1 from './Dashboard.png';
import onlineScreenshot2 from './Cozinha.png';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownloadPage from './pages/DownloadPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
  };

  const screenshots = [
    {
      image: desktopScreenshot,
      alt: 'Simplespdv Desktop Interface - Balcão',
      caption: 'Gerencie seu negócio com facilidade no desktop',
      mockupClass: 'desktop-mockup',
    },
    {
      image: onlineScreenshot1,
      alt: 'Simplespdv Online Version - Dashboard',
      caption: 'Acompanhe vendas em tempo real, onde estiver',
      mockupClass: 'browser-mockup',
    },
    {
      image: onlineScreenshot2,
      alt: 'Simplespdv Online Version - Cozinha',
      caption: 'Controle de estoque na palma da sua mão',
      mockupClass: 'browser-mockup',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {/* Hero Section */}
              <header className="hero">
                <div className="hero-background"></div>
                <nav className="top-nav">
                  <img src={logo} alt="Simplespdv Logo" className="logo" />
                  <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isMenuOpen}
                  >
                    {isMenuOpen ? '✕' : '☰'}
                  </button>
                  <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#benefits" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
                    <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
                    <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Galeria</a>
                    <a href="#planos" onClick={() => setIsMenuOpen(false)}>Planos</a>
                  </div>
                </nav>
                <div className="hero-content">
                  <h1 className="fade-in">O PDV que Transforma Seu Negócio</h1>
                  <p className="fade-in">Simplifique vendas, estoque e gestão com uma solução completa e intuitiva.</p>
                  <div className="hero-cta">
                    <a href="#planos" className="cta-button pulse">Teste Grátis por 7 Dias</a>
                    <Link to="/download" className="secondary-cta">Baixar Agora</Link>
                  </div>
                </div>
              </header>

              {/* Benefits Section */}
              <section id="benefits" className="benefits">
                <h2 className="slide-up">Por que Escolher o Simplespdv?</h2>
                <div className="benefits-grid">
                  <div className="benefit-item slide-up">
                    <span className="icon">⚡</span>
                    <h3>Rápido e Simples</h3>
                    <p>Configure e comece a vender em minutos.</p>
                  </div>
                  <div className="benefit-item slide-up" style={{ animationDelay: '0.2s' }}>
                    <span className="icon">📈</span>
                    <h3>Crescimento Fácil</h3>
                    <p>Relatórios que mostram o caminho do sucesso.</p>
                  </div>
                  <div className="benefit-item slide-up" style={{ animationDelay: '0.4s' }}>
                    <span className="icon">📱</span>
                    <h3>Acesse de Qualquer Lugar</h3>
                    <p>Gerencie seu negócio do celular ou computador.</p>
                  </div>
                </div>
              </section>

              {/* How It Works Section */}
              <section id="how-it-works" className="how-it-works">
                <h2 className="slide-up">Comece Hoje em 3 Passos</h2>
                <div className="steps">
                  <div className="step slide-up">
                    <span className="step-number">1</span>
                    <h3>Cadastre-se</h3>
                    <p>Crie sua conta em menos de 2 minutos.</p>
                  </div>
                  <div className="step slide-up" style={{ animationDelay: '0.2s' }}>
                    <span className="step-number">2</span>
                    <h3>Configure</h3>
                    <p>Adicione produtos e personalize tudo.</p>
                  </div>
                  <div className="step slide-up" style={{ animationDelay: '0.4s' }}>
                    <span className="step-number">3</span>
                    <h3>Venda</h3>
                    <p>Gerencie vendas e estoque com facilidade.</p>
                  </div>
                </div>
              </section>

              {/* Gallery Section */}
              <section id="gallery" className="gallery">
                <h2 className="slide-up">Veja o Simplespdv em Ação</h2>
                {isMobile ? (
                  <div className="gallery-carousel">
                    <Slider aria-label="Galeria de capturas de tela do Simplespdv" {...sliderSettings}>
                      {screenshots.map((shot, index) => (
                        <div key={index} className="gallery-slide">
                          <div className={`mockup-wrapper ${shot.mockupClass}`}>
                            <img
                              src={shot.image}
                              alt={shot.alt}
                              className="screenshot"
                              loading="lazy"
                            />
                          </div>
                          <p className="caption fade-in">{shot.caption}</p>
                        </div>
                      ))}
                    </Slider>
                  </div>
                ) : (
                  <div className="gallery-grid">
                    {screenshots.map((shot, index) => (
                      <div key={index} className="gallery-item slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className={`mockup-wrapper ${shot.mockupClass}`}>
                          <img
                            src={shot.image}
                            alt={shot.alt}
                            className="screenshot"
                            loading="lazy"
                          />
                        </div>
                        <p className="caption fade-in">{shot.caption}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Plans Section */}
              <section id="planos" className="plans">
                <h2 className="slide-up">Planos para Todos os Tamanhos</h2>
                <div className="plans-grid">
                  <div className="plan slide-up">
                    <h3>Free</h3>
                    <p className="price">Grátis por 7 Dias</p>
                    <ul>
                      <li>Funcionalidades básicas</li>
                      <li>Até 50 produtos</li>
                      <li>Suporte por e-mail</li>
                    </ul>
                    <a href="#" className="plan-button ripple">Testar Agora</a>
                  </div>
                  <div className="plan highlighted slide-up" style={{ animationDelay: '0.2s' }}>
                    <span className="badge">Mais Escolhido</span>
                    <h3>Iniciante</h3>
                    <p className="price">R$ 45/mês</p>
                    <ul>
                      <li>Funcionalidades avançadas</li>
                      <li>Até 500 produtos</li>
                      <li>Suporte prioritário</li>
                    </ul>
                    <a href="#" className="plan-button ripple">Assinar Agora</a>
                  </div>
                  <div className="plan slide-up" style={{ animationDelay: '0.4s' }}>
                    <h3>Pro</h3>
                    <p className="price">R$ 95/mês</p>
                    <ul>
                      <li>Todas as funcionalidades</li>
                      <li>Produtos ilimitados</li>
                      <li>Suporte 24/7</li>
                    </ul>
                    <a href="#" className="plan-button ripple">Assinar Agora</a>
                  </div>
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="testimonials">
                <h2 className="slide-up">O que os Clientes Dizem</h2>
                <div className="testimonials-grid">
                  <div className="testimonial slide-up">
                    <p>“O Simplespdv mudou minha rotina. Tudo mais rápido e organizado!”</p>
                    <h4>João Silva, Dono de Loja</h4>
                  </div>
                  <div className="testimonial slide-up" style={{ animationDelay: '0.2s' }}>
                    <p>“Relatórios incríveis e suporte que resolve. Recomendo!”</p>
                    <h4>Maria Oliveira, Empreendedora</h4>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="final-cta">
                <h2 className="fade-in">Pronto para Simplificar Sua Vida?</h2>
                <p className="fade-in">Experimente o Simplespdv e veja os resultados.</p>
                <a href="#planos" className="cta-button pulse ripple">Teste Grátis Agora</a>
              </section>

              {/* Footer */}
              <footer className="footer">
                <p>© {new Date().getFullYear()} Simplespdv. Todos os direitos reservados.</p>
                <div className="footer-links">
                  <a href="#">Termos de Uso</a>
                  <a href="#">Política de Privacidade</a>
                  <a href="#">Contato</a>
                </div>
              </footer>
            </div>
          }
        />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;