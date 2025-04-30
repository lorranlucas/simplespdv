import React, { useState } from 'react';
import './DownloadPage.css';

function DownloadPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isClient: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  React.useEffect(() => {
    const { name, email, phone } = formData;
    const isValid =
      name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      phone.replace(/\D/g, '').length >= 10;
    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Logica para enviar os dados do formulário (se necessário)
      console.log('Formulário enviado:', formData);
      setDownloadStatus('success');

      // Iniciar o download do arquivo hospedado no Google Drive
      const downloadUrl = 'https://drive.google.com/file/d/1KyyTAJqiLxSKbku8mDYRnppAd5khN3q4/view?usp=drive_link';
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Simples PDV Setup 0.1.1-pre.1.exe';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setDownloadStatus('error');
    }
  };

  return (
    <div className="download-page">
      <header className="download-header">
        <h1>Baixe o SimplesPDV</h1>
        <p>Preencha o formulário abaixo para liberar o download do instalador.</p>
      </header>

      <section className="download-form-section">
        <p className="download-warning">
          <strong>Nota:</strong> Após o download, clique com o botão direito no arquivo, selecione "Propriedades" e clique em "Desbloquear" antes de executar (se necessário).
        </p>
        {downloadStatus === 'success' && (
          <p className="success-message">Download iniciado com sucesso!</p>
        )}
        {downloadStatus === 'error' && (
          <p className="error-message">Por favor, preencha todos os campos corretamente.</p>
        )}
        <form onSubmit={handleSubmit} className="download-form">
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="isClient">
              <input
                type="checkbox"
                id="isClient"
                name="isClient"
                checked={formData.isClient}
                onChange={handleInputChange}
              />
              Já sou cliente do SimplesPDV
            </label>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className={`download-button ${isFormValid ? 'active' : ''}`}
              disabled={!isFormValid}
            >
              Baixar Instalador
            </button>
          </div>
        </form>
      </section>

      <footer className="download-footer">
        <p>© {new Date().getFullYear()} Simplespdv. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default DownloadPage;