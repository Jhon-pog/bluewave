import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./blue.module.css";

export default function blue() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
     <header>
  <nav className={styles.navbar}>
    <div className={styles.navInner}>
      
      {/* Logótipo alinhado à esquerda */}
      <Link to="/" className={styles.navLogo}>
        <h2>Blue Wave</h2>
      </Link>

      {/* Menu com os links agrupados à direita */}
      <ul className={styles.navMenu}>
        <li><Link to="/" className={styles.navLink}>← Voltar</Link></li>
        <li><a className={styles.navLink} href="#monitoramento">Monitoramento</a></li>
        <li><a className={styles.navLink} href="#impactos">Impactos</a></li>
        <li><a className={styles.navLink} href="#catalogo">Catálogo</a></li>
      </ul>

    </div>
  </nav>
</header>

      {/* Alterado para incluir o fundo escuro e o ajuste de margem que elimina o vazamento */}
<main style={{ paddingTop: '80px', backgroundColor: '#161b44', marginTop: '-1px' }}>
        {/* HERO ORIGINAL RESTAURADA */}
        <section className={styles.heroSection}>
          <div className={styles.sectionContent}>
            <div className="hero-details">
              <h2 className={styles.heroTitle}>Vida e Conservação Marinha</h2>
              <h3 className={styles.heroSubtitle}>Ajudando o meio-ambiente!</h3>

              <p className={styles.heroDescription}>...
                O oceano também é seu. Aqui, cada escolha ajuda a proteger a vida marinha e manter nossos mares cheios de vida e beleza.
                Navegue com consciência e faça parte dessa corrente do bem.
              </p>

              <div className="hero-buttons">
                <a href="#galeria" className="button order-now">Doe Aqui!</a>
                <a href="#contato" className="button contact-us">Ajude de outras formas</a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img src="https://images.vexels.com/media/users/3/137592/isolated/preview/be53dc3255f7a4814face57ffd6f8b0d-silhueta-de-animais-de-pesca-peixe.png" alt="Peixes" />
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className={styles.aboutSection} id="sobre">
          <div className={styles.sectionContent}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutImage}>
                <img src="https://t4.ftcdn.net/jpg/03/10/31/11/360_F_310311131_zbUsU5sbQK6VOUZKYoQyCIWfqVdXVgTL.jpg" alt="Sobre" />
              </div>

              <div className={styles.aboutText}>
                <h2>SOBRE NÓS</h2>
                <div className="line line2"></div>

                <p>
                  Na Blue Wave, temos orgulho de ser um espaço dedicado à preservação dos oceanos e à valorização da vida marinha.
                </p>

                <p>
                  Criamos um ambiente acolhedor onde você pode aprender, se conectar com a natureza e fazer parte de um movimento que protege nossos mares.
                </p>

                <div className="social">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-x-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.gallerySection} id="galeria">
          <div className={styles.sectionContent}>
            <h2 className="gallery-title">DOE AQUI</h2>
            <div className="gallery-line"></div>

            <div className={styles.galleryGrid}>
              {/* Opções de valor */}
              <div className="donation-values">
                <button className="donation-btn">R$ 10</button>
                <button className="donation-btn">R$ 25</button>
                <button className="donation-btn">R$ 50</button>
                <button className="donation-btn">R$ 100</button>
              </div>

              {/* Valor personalizado */}
              <div className="donation-custom">
                <label htmlFor="custom-value">Outro valor:</label>
                <input type="number" id="custom-value" placeholder="Digite o valor" />
              </div>

              {/* Dados do doador */}
              <div className="donation-form">
                <input type="text" placeholder="Seu nome" />
                <input type="email" placeholder="Seu email" />
              </div>

              {/* Método de pagamento */}
              <div className="donation-payment">
                <label>
                  <input type="radio" name="payment" /> Cartão de Crédito
                </label>
                <label>
                  <input type="radio" name="payment" /> Pix
                </label>
                <label>
                  <input type="radio" name="payment" /> Boleto
                </label>
              </div>

              {/* Botão */}
              <div className="donation-action">
                <button className={styles.donationSubmit}>DOAR AGORA</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.hero} id="menu">
          <h1>Nossos Projetos Ambientais</h1>
        </section>

        <section className={styles.section}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <img src="https://images.unsplash.com/photo-1514907283155-ea5f4094c70c?q=80&w=1170" alt="Monitoramento de Recifes" />
              <div className={styles.cardContent}>
              <h3>Monitoramento de Recifes</h3>
                <p>Análise científica contínua da saúde dos recifes de coral e impactos das mudanças climáticas.</p>
                <a className={styles.cardLink} href="/recife">Saiba mais</a>
              </div>
            </div>

            <div className={styles.card}>
              <img src="https://images.unsplash.com/photo-1618277043431-1c85e8462f70?q=80&w=1155" alt="Mutirões de Limpeza" />
              <div className={styles.cardContent}>
                <h3>Multirões de Limpeza</h3>
                <p>Ações periódicas para remoção de resíduos e conscientização comunitária.</p>
                <a className={styles.cardLink} href="/multiroes">Saiba mais</a>
              </div>
            </div>

            <div className={styles.card}>
              <img src="https://images.unsplash.com/photo-1690559490662-bd2afb76e1bd?q=80&w=1172" alt="Combate ao Plástico" />
              <div className={styles.cardContent}>
                <h3>Combate ao Plástico</h3>
                <p>Iniciativas para reduzir plásticos descartáveis e incentivar alternativas sustentáveis.</p>
                <a className={styles.cardLink} href="/combate">Saiba mais</a>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="funcionarios">
          <div className={styles.sectionContent}>
            <h2>FUNCIONÁRIOS</h2>
            <div className="line"></div>

            <div className={styles.carousel}>
              <button className={styles.carouselBtn} onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}>&#10094;</button>

              <div className={styles.carouselTrack} style={{ transform: `translateX(-${slideIndex * 100}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
                {/* SLIDE 1 */}
                <div className="testimonial-card" style={{ minWidth: '100%' }}>
                  <div className="testimonial-container">
                    <div className="person">
                      <img src="" alt="Gustavo Gurita" />
                      <h4>Gustavo Gurita</h4>
                    </div>

                    <div className="person">
                      <img src="" alt="Joao Victor" />
                      <h4>Joao Victor</h4>
                    </div>

                    <div className="person">
                      <img src="" alt="Lucas Benicio" />
                      <h4>Lucas Benicio</h4>
                    </div>
                  </div>
                </div>

                {/* SLIDE 2 */}
                <div className="testimonial-card" style={{ minWidth: '100%' }}>
                  <div className="testimonial-container">
                    <div className="person">
                      <img src="" alt="Rafael Melari" />
                      <h4>Rafael Melari</h4>
                    </div>

                    <div className="person">
                      <img src="" alt="Jerray Santos" />
                      <h4>Jerray Santos</h4>
                    </div>

                    <div className="person">
                      <img src="" alt="Rodrigo Ramos" />
                      <h4>Rodrigão</h4>
                    </div>
                  </div>
                </div>
              </div>

              <button className={styles.carouselBtn}  onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}>&#10095;</button>
            </div>

            <div className={styles.dot}>
             <span className={`dot ${slideIndex === 0 ? styles.active : ''}`}></span>
              <span className={`dot ${slideIndex === 1 ? styles.active : ''}`}></span>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section className={styles.contactSection} id="contato">
          <div className={styles.sectionContent}>
            <h2 className={styles.contactTitle}>CONTATO</h2>
            <div className={styles.contactLine}></div>

            <div className={styles.contactContainer}>
              {/* INFO */}
              <div className={styles.contactInfo}>
                <p><i className="fas fa-map-marker-alt"></i> Rua Exemplo, Barueri - SP</p>
                <p><i className="fas fa-envelope"></i> contato@bluewave.com</p>
                <p><i className="fas fa-phone"></i> (11) 99999-9999</p>
                <p><i className="fas fa-clock"></i> Seg - Sex: 09:00 - 18:00</p>
                <p><i className="fas fa-clock"></i> Sábado: 10:00 - 15:00</p>
                <p><i className="fas fa-clock"></i> Domingo: Fechado</p>
              </div>

              {/* FORM */}
              <div className={styles.contactForm}>
                <form action="mailto:contato@bluewave.com" method="post" encType="text/plain">
                  <input type="text" name="nome" placeholder="Seu nome" required />
                  <input type="email" name="email" placeholder="Seu email" required />
                  <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className={`${styles.sectionContent} ${styles.footerContent}`}>
          <p>© 2026 Blue Wave</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-x-twitter"></i></a>
          </div>

          <p>Política de Privacidade • Termos</p>
        </div>
      </footer>
    </>
  );
}