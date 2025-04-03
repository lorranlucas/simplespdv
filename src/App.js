import React from 'react';
import logo from './logo-simplespdv.png'; // Certifique-se de que a logo está na pasta src
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho (Hero Section) */}
      <header className="hero">
        <img src={logo} alt="Simplespdv Logo" className="logo" />
        <h1>Simplespdv: O Sistema de PDV que Simplifica Suas Vendas</h1>
        <p>Gerencie suas vendas, estoque e clientes de forma fácil e eficiente.</p>
        <a href="#planos" className="cta-button">Teste Grátis por 7 Dias</a>
      </header>

      {/* Seção de Benefícios */}
      <section className="benefits">
        <h2>Por que Escolher o Simplespdv?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h3>Fácil de Usar</h3>
            <p>Interface intuitiva que qualquer um pode usar, sem complicações.</p>
          </div>
          <div className="benefit-item">
            <h3>Controle de Estoque</h3>
            <p>Monitore seu estoque em tempo real e evite surpresas.</p>
          </div>
          <div className="benefit-item">
            <h3>Relatórios Detalhados</h3>
            <p>Tenha insights sobre suas vendas e tome decisões inteligentes.</p>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section className="how-it-works">
        <h2>Como Funciona</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Cadastre-se</h3>
            <p>Crie sua conta em menos de 2 minutos.</p>
          </div>
          <div className="step">
            <h3>2. Configure</h3>
            <p>Adicione seus produtos e comece a vender.</p>
          </div>
          <div className="step">
            <h3>3. Gerencie</h3>
            <p>Controle tudo em um só lugar, de qualquer dispositivo.</p>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="planos" className="plans">
        <h2>Escolha o Plano Ideal para Você</h2>
        <div className="plans-grid">
          <div className="plan">
            <h3>Free</h3>
            <p className="price">7 Dias Grátis</p>
            <ul>
              <li>Funcionalidades básicas</li>
              <li>Até 50 produtos</li>
              <li>Suporte por e-mail</li>
            </ul>
            <a href="#" className="plan-button">Testar Grátis</a>
          </div>
          <div className="plan">
            <h3>Iniciante</h3>
            <p className="price">R$ 45/mês</p>
            <ul>
              <li>Funcionalidades avançadas</li>
              <li>Até 500 produtos</li>
              <li>Suporte prioritário</li>
            </ul>
            <a href="#" className="plan-button">Assinar Agora</a>
          </div>
          <div className="plan">
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
        <h2>O que Nossos Clientes Dizem</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"O Simplespdv transformou a forma como gerencio meu pequeno negócio. É simples e eficiente!"</p>
            <h4>João Silva, Dono de Loja</h4>
          </div>
          <div className="testimonial">
            <p>"Os relatórios me ajudam a entender minhas vendas como nunca antes. Recomendo!"</p>
            <h4>Maria Oliveira, Empreendedora</h4>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2025 Simplespdv. Todos os direitos reservados.</p>
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