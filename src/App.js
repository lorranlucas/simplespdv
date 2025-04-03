import React from 'react';
import logo from './logo-simplespdv.png'; // Certifique-se de que o caminho está correto
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho (Hero Section) com Parallax */}
      <header className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <img src={logo} alt="Simplespdv Logo" className="logo fade-in" />
          <h1 className="fade-in">Simplifique Suas Vendas com o Simplespdv</h1>
          <p className="fade-in">A solução definitiva para vendas, estoque e gestão em poucos cliques.</p>
          <a href="#planos" className="cta-button pulse">Comece Grátis por 7 Dias</a>
        </div>
      </header>

      {/* Seção de Benefícios */}
      <section className="benefits">
        <h2 className="slide-up">O que o Simplespdv Faz por Você?</h2>
        <div className="benefits-grid">
          <div className="benefit-item slide-up">
            <span className="icon">🎯</span>
            <h3>Fácil e Intuitivo</h3>
            <p>Domine o sistema em minutos, sem complicações.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="icon">📦</span>
            <h3>Estoque na Palma da Mão</h3>
            <p>Controle total em tempo real, onde você estiver.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="icon">📊</span>
            <h3>Insights que Transformam</h3>
            <p>Relatórios poderosos para crescer com confiança.</p>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="how-it-works">
        <h2 className="slide-up">Seu Sucesso em 3 Passos</h2>
        <div className="steps">
          <div className="step slide-up">
            <span className="step-number">1</span>
            <h3>Cadastre-se</h3>
            <p>Rápido e sem burocracia: menos de 2 minutos.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="step-number">2</span>
            <h3>Configure</h3>
            <p>Adicione produtos e venda no mesmo dia.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="step-number">3</span>
            <h3>Gerencie</h3>
            <p>Tudo centralizado, acessível de qualquer lugar.</p>
          </div>
        </div>
      </section>

      {/* Seção de Planos com Gamificação */}
      <section id="planos" className="plans">
        <h2 className="slide-up">Escolha Seu Plano e Desbloqueie Benefícios</h2>
        <div className="plans-grid">
          <div className="plan slide-up">
            <h3>Free</h3>
            <p className="price">Grátis por 7 Dias</p>
            <ul>
              <li>Funcionalidades básicas</li>
              <li>Até 50 produtos</li>
              <li>Suporte por e-mail</li>
            </ul>
            <a href="#" className="plan-button ripple">Testar Grátis</a>
          </div>
          <div className="plan highlighted slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="badge">Mais Popular</span>
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

      {/* Seção de Depoimentos */}
      <section className="testimonials">
        <h2 className="slide-up">Quem Usa, Recomenda</h2>
        <div className="testimonials-grid">
          <div className="testimonial slide-up">
            <p>“O Simplespdv é um divisor de águas. Minha gestão nunca foi tão fácil!”</p>
            <h4>João Silva, Dono de Loja</h4>
          </div>
          <div className="testimonial slide-up" style={{ animationDelay: '0.2s' }}>
            <p>“Os relatórios são incríveis. Finalmente entendo meu negócio!”</p>
            <h4>Maria Oliveira, Empreendedora</h4>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta">
        <h2 className="fade-in">Transforme Sua Rotina Hoje</h2>
        <p className="fade-in">Teste grátis e veja a diferença em 7 dias.</p>
        <a href="#planos" className="cta-button pulse ripple">Comece Agora</a>
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