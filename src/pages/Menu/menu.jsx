import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./menu.module.css"; // Certifique-se de que o caminho está correto

const Menu = () => {
    return (
        <div className="container-fluid bg-light py-4 min-vh-100">
            <div className="container">
                {/* Combinando classes do Bootstrap com seu gradiente customizado se quiser, ou mantendo o bg-primary */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3 rounded-3 shadow">
                    <div className="container-fluid">
                        
                        {/* Logo da Blue Wave aplicando sua classe .logo */}
                        <Link className={`navbar-brand ${styles.logo}`} to="/">
                            Blue Wave Admin
                        </Link>

                        {/* Botão Hamburguer para telas menores */}
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Itens do Menu com espaçamento e efeito Hover customizado */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '10px' }}>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.itemMenu}`} to="/combate-plastico">
                                        Campanhas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.itemMenu}`} to="#">
                                        Voluntários
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.itemMenu}`} to="#">
                                        Doações
                                    </Link>
                                </li>
                            </ul>

                            {/* Botão de Logout */}
                            <button type="button" className="btn btn-danger fw-bold px-4 shadow-sm">
                                Sair do Painel
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Menu;