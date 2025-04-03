import React from 'react';
import logo from './logo-simplespdv.png'; // Certifique-se de que o caminho está correto
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho (Hero Section) */}
      <header className="hero">
        <img src={logo} alt="Simplespdv Logo" className="logo fade-in" />
        <h1 className="fade-in">Simplifique Suas Vendas com o Simplespdv</h1>
        <p className="fade-in">A solução completa para gerenciar vendas, estoque e clientes em poucos cliques.</p>
        <a href="#planos" className="cta-button pulse">Experimente Grátis por 7 Dias</a>
      </header>

      {/* Seção de Benefícios */}
      <section className="benefits">
        <h2 className="slide-up">Por que o Simplespdv é a Escolha Certa?</h2>
        <div className="benefits-grid">
          <div className="benefit-item slide-up">
            <span className="icon">🎯</span>
            <h3>Fácil de Usar</h3>
            <p>Interface simples e intuitiva, perfeita para qualquer usuário.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="icon">📦</span>
            <h3>Controle de Estoque</h3>
            <p>Acompanhe seu estoque em tempo real e mantenha tudo organizado.</p>
          </div>
          <div className="benefit-item slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="icon">📊</span>
            <h3>Relatórios Inteligentes</h3>
            <p>Insights claros para tomar decisões que impulsionam seu negócio.</p>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="how-it-works">
        <h2 className="slide-up">Comece em 3 Passos Simples</h2>
        <div className="steps">
          <div className="step slide-up">
            <span className="step-number">1</span>
            <h3>Cadastre-se</h3>
            <p>Crie sua conta em menos de 2 minutos.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="step-number">2</span>
            <h3>Configure</h3>
            <p>Adicione seus produtos e comece a vender imediatamente.</p>
          </div>
          <div className="step slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="step-number">3</span>
            <h3>Gerencie</h3>
            <p>Controle tudo de qualquer lugar, a qualquer hora.</p>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="plans">
        <h2 className="slide-up">Planos Feitos para o Seu Sucesso</h2>
        <div className="plans-grid">
          <div className="plan slide-up">
            <h3>Free</h3>
            <p className="price">Grátis por 7 Dias</p>
            <ul>
              <li>Funcionalidades básicas</li>
              <li>Até 50 produtos</li>
              <li>Suporte por e-mail</li>
            </ul>
            <a href="#" className="plan-button">Testar Agora</a>
          </div>
          <div className="plan highlighted slide-up" style={{ animationDelay: '0.2s' }}>
            <h3>Iniciante</h3>
            <p className="price">R$ 45/mês</p>
            <ul>
              <li>Funcionalidades avançadas</li>
              <li>Até 500 produtos</li>
              <li>Suporte prioritário</li>
            </ul>
            <a href="#" className="plan-button">Assinar Agora</a>
          </div>
          <div className="plan slide-up" style={{ animationDelay: '0.4s' }}>
            <h3>Pro</h3>
            <p className="price">R$ 95/mês</p>
            <ul>
              <li>Todas as funcionalidades</li>
              <li>Produtos ilimitados</li>
              <li>Suporte 24/7</li>
            </ul>
            <a href="#" className="plan-button">Assinar Agora</a>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="testimonials">
        <h2 className="slide-up">Histórias de Sucesso</h2>
        <div className="testimonials-grid">
          <div className="testimonial slide-up">
            <p>“O Simplespdv revolucionou meu dia a dia. Simples, rápido e eficiente!”</p>
            <h4>João Silva, Dono de Loja</h4>
          </div>
          <div className="testimonial slide-up" style={{ animationDelay: '0.2s' }}>
            <p>“Os relatórios me deram uma visão clara do meu negócio. Indispensável!”</p>
            <h4>Maria Oliveira, Empreendedora</h4>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta">
        <h2 className="fade-in">Pronto para Simplificar Suas Vendas?</h2>
        <a href="#planos" className="cta-button pulse">Teste Grátis Agora</a>
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