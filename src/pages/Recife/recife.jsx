import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./recife.module.css";

export default function Recife() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <>
      <header>
        <header>
  {/* A nav fica 100% de largura por fora */}
  <nav className={styles.navbar}>
    
    {/* Esta div interna garante o alinhamento correto dos elementos e as margens nas laterais */}
    <div className={styles.sectionContent} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <Link to="/" className={styles.navLogo}>
        <h2>Blue Wave</h2>
      </Link>
      
      <div className={styles.hamburger} onClick={() => setMenuAtivo(!menuAtivo)}>
        <span></span><span></span><span></span>
      </div>
      
      <ul className={`${styles.navMenu} ${menuAtivo ? styles.active : ""}`}> 
        <li><Link to="/" className={styles.navLink}>← Voltar</Link></li>
        <li><a href="#monitoramento" className={styles.navLink}>Monitoramento</a></li>
        <li><a href="#impactos" className={styles.navLink}>Impactos</a></li>
        <li><a href="#catalogo" className={styles.navLink}>Catálogo</a></li>
      </ul>
      
    </div>
  </nav>
</header>
      </header>
      <main style={{ paddingTop: '80px' }}>
        {/* SEÇÃO MONITORAMENTO E EXPLICAÇÃO */}
        <section className={styles.aboutSection}>
          <div className={styles.sectionContent}>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutText}>
                <h2>O MONITORAMENTO DOS RECIFES</h2>
                <div className="line" style={{ margin: '10px auto 30px' }}></div>
                <p>O monitoramento de recifes de coral é uma prática fundamental para a preservação da biodiversidade marinha. Através de expedições científicas e sensores subaquáticos, acompanhamos o estado de saúde desses ecossistemas que são verdadeiros berçários da vida marinha.</p>
                <p>Nossa abordagem foca na observação da temperatura da água, pH e taxas de crescimento, permitindo antecipar fenômenos de branqueamento provocados por anomalias climáticas. Com esses dados, conseguimos atuar de forma preventiva, protegendo áreas que ainda apresentam alta resiliência.</p>
              </div>
              <div className={styles.aboutImage}>
                <img src="https://www.brasildefato.com.br/wp-content/uploads/2024/09/image_processing20230329-1314-cp3229.jpeg" alt="Cientista monitorando recifes" style={{ width: '480px', height: '320px', borderRadius: '18px', objectFit: 'cover', boxShadow: '0 8px 20px rgba(0,0,0,.15)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE IMPACTOS NACIONAIS */}
        <section className={styles.aboutSection}> 
  <div className={styles.sectionContent}>
    <div className={styles.aboutContainer} style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      
      {/* Texto à esquerda */}
      <div className={styles.aboutText} style={{ flex: 1 }}>
        <h2>IMPACTOS DO PROJETO EM NÍVEL NACIONAL</h2>
        <div className="line" style={{ 
            margin: '10px 0 30px 200px', 
            width: '100px'              
            }}></div>
        <p>Nosso projeto tem transformado a gestão costeira no Brasil através de dados sólidos e ações práticas:</p>
        <ul style={{ textAlign: 'left', lineHeight: '2' }}>
          <li>✅ <b>Redução de Branqueamento:</b> Queda de 15% nos registros de branqueamento severo.</li>
          <li>✅ <b>Extensão de Costa:</b> Monitoramos mais de 800 km de recifes.</li>
          <li>✅ <b>Preservação:</b> Criação de 5 novas zonas de exclusão de pesca.</li>
          <li>✅ <b>Engajamento:</b> Capacitação de 200 mergulhadores voluntários.</li>
        </ul>
      </div>

      {/* Imagem vertical à direita */}
      <div className={styles.aboutImage} style={{ flex: '0 0 300px' }}>
        <img 
          src="https://images.pexels.com/photos/35252461/pexels-photo-35252461/free-photo-of-silhueta-de-um-mergulhador-explorando-uma-caverna-subaquatica.jpeg?cs=tinysrgb&dpr=1&w=500" 
          alt="Impacto Ambiental" 
          style={{ 
            width: '100%', 
            height: '500px', 
            borderRadius: '18px', 
            objectFit: 'cover', 
            boxShadow: '0 8px 20px rgba(0,0,0,.15)' 
          }} 
        />
      </div>
    </div>
  </div>
</section>

        {/* CATÁLOGO DE ESPÉCIES */}
        <section className={styles.section}>
  <h1 className={styles.hero}>Catálogo de Espécies Protegidas</h1>
  <p style={{ textAlign: 'center', marginBottom: '40px' }}>Conheça algumas das espécies que estão sob nosso monitoramento constante.</p>
  
  <div className={styles.grid}>
    {/* CARD 1 */}
    <div className={styles.card}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Brain_coral.jpg" alt="Coral Cérebro" />
      <div className={styles.cardContent}>
        <h3>Coral Cérebro</h3>
        <p><b>Status:</b> Vulnerável</p>
        <p>Um dos pilares estruturais dos recifes brasileiros, sua estrutura calcária forma verdadeiros labirintos que protegem diversas outras espécies de peixes e crustáceos.</p>
        {/* CORREÇÃO AQUI */}
        <button className={styles.btnSubmit} style={{ marginTop: '10px' }}>Ver Detalhes</button>
      </div>
    </div>

    {/* CARD 2 */}
    <div className={styles.card}>
      <img src="https://i0.wp.com/abuddive.com.br/wp-content/uploads/2024/04/Millepora-alcicornis.jpeg?fit=810%2C456&ssl=1" alt="Coral de Fogo" />
      <div className={styles.cardContent}>
        <h3>Coral de Fogo</h3>
        <p><b>Status:</b> Em Perigo</p>
        <p>Altamente sensível a variações térmicas. Este coral é o primeiro a apresentar sinais de estresse, servindo como um "alerta" biológico para todo o sistema recifal.</p>
        {/* CORREÇÃO AQUI */}
        <button className={styles.btnSubmit} style={{ marginTop: '10px' }}>Ver Detalhes</button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className={styles.card}>
      <img src="https://vault-us-east-1.pulsarimagens.com.br/file/thumb/15AS138.jpg" alt="Coral Abanador" />
      <div className={styles.cardContent}>
        <h3>Coral Abanador</h3>
        <p><b>Status:</b> Ameaçado</p>
        <p>Com formato elegante de leque, esta espécie possui papel vital na filtração da água, removendo partículas suspensas e auxiliando na transparência do ecossistema local.</p>
        {/* CORREÇÃO AQUI */}
        <button className={styles.btnSubmit} style={{ marginTop: '10px' }}>Ver Detalhes</button>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer>
        <div className={`${styles.sectionContent} ${styles.footerContent}`}>
          <p>© 2026 Blue Wave</p>
          <div className={styles.footerSocial}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}