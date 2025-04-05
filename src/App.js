import React, { useState } from 'react';
import logo from './logo-simplespdv.png'; // Certifique-se de que o caminho está correto
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      {/* Hero Section Inspirada na Toast */}
      <header className="hero">
        <div className="hero-background" aria-hidden="true"></div>
        <nav className={`top-nav ${isMenuOpen ? 'active' : ''}`}>
          <img src={logo} alt="Simplespdv Logo" className="logo" />
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <div className="nav-links">
            <a href="#benefits">Benefícios</a>
            <a href="#how-it-works">Como Funciona</a>
            <a href="#planos">Planos</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="fade-in">O PDV que Transforma Seu Negócio</h1>
          <p className="fade-in">Simplifique vendas, estoque e gestão com uma solução completa e intuitiva.</p>
          <div className="hero-cta">
            <a href="#planos" className="cta-button pulse">Teste Grátis por 7 Dias</a>
            <a href="#demo" className="secondary-cta">Veja a Demonstração</a>
          </div>
        </div>
      </header>

      {/* Seção de Benefícios */}
      <section id="benefits" className="benefits">
        <h2 className="slide-up">Por que Escolher o Simplespdv?</h2>
        <div className="benefits-grid">
          <div className="benefit-item slide-up">
            <span className="icon" aria-hidden="true">⚡</span>
            <h3>Rápido e Simples</h3>
            <p>Configure e comece a vender em minutos.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="icon" aria-hidden="true">📈</span>
            <h3>Crescimento Fácil</h3>
            <p>Relatórios que mostram o caminho do sucesso.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="icon" aria-hidden="true">📱</span>
            <h3>Acesse de Qualquer Lugar</h3>
            <p>Gerencie seu negócio do celular ou computador.</p>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section id="how-it-works" className="how-it-works">
        <h2 className="slide-up">Comece Hoje em 3 Passos</h2>
        <div className="steps">
          <div className="step slide-up">
            <span className="step-number" aria-hidden="true">1</span>
            <h3>Cadastre-se</h3>
            <p>Crie sua conta em menos de 2 minutos.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="step-number" aria-hidden="true">2</span>
            <h3>Configure</h3>
            <p>Adicione produtos e personalize tudo.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="step-number" aria-hidden="true">3</span>
            <h3>Venda</h3>
            <p>Gerencie vendas e estoque com facilidade.</p>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="plans">
        <h2 className="slide-up plans-title">Planos para Todos os Tamanhos</h2>
        <div className="plans-grid">
          <div className="plan slide-up">
            <h3>Free</h3>
            <p className="price">Grátis por 7 Dias</p>
            <ul aria-label="Benefícios do plano Free">
              <li>Funcionalidades básicas</li>
              <li>Até 50 produtos</li>
              <li>Suporte por e-mail</li>
            </ul>
            <a href="#" className="plan-button ripple">Testar Agora</a>
          </div>
          <div className="plan highlighted slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="badge" aria-label="Plano mais escolhido">Mais Escolhido</span>
            <h3>Iniciante</h3>
            <p className="price">R$ 45/mês</p>
            <ul aria-label="Benefícios do plano Iniciante">
              <li>Funcionalidades avançadas</li>
              <li>Até 500 produtos</li>
              <li>Suporte prioritário</li>
            </ul>
            <a href="#" className="plan-button ripple">Assinar Agora</a>
          </div>
          <div className="plan slide-up" style={{ animationDelay: '0.4s' }}>
            <h3>Pro</h3>
            <p className="price">R$ 95/mês</p>
            <ul aria-label="Benefícios do plano Pro">
              <li>Todas as funcionalidades</li>
              <li>Produtos ilimitados</li>
              <li>Suporte 24/7</li>
            </ul>
            <a href="#" className="plan-button ripple">Assinar Agora</a>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="testimonials">
        <h2 className="slide-up">O que os Clientes Dizem</h2>
        <div className="testimonials-grid">
          <div className="testimonial slide-up">
            <blockquote>
              <p>“O Simplespdv mudou minha rotina. Tudo mais rápido e organizado!”</p>
              <footer>
                <cite>João Silva, Dono de Loja</cite>
              </footer>
            </blockquote>
          </div>
          <div className="testimonial slide-up" style={{ animationDelay: '0.2s' }}>
            <blockquote>
              <p>“Relatórios incríveis e suporte que resolve. Recomendo!”</p>
              <footer>
                <cite>Maria Oliveira, Empreendedora</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta">
        <h2 className="fade-in">Pronto para Simplificar Sua Vida?</h2>
        <p className="fade-in">Experimente o Simplespdv e veja os resultados.</p>
        <a href="#planos" className="cta-button pulse ripple">Teste Grátis Agora</a>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Simplespdv. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Contato</a>
        </div>
      </footer>
    </div>
  );
}

export default App;