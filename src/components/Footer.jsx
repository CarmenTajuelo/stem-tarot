import './Footer.css';
import logoFactoria from "../assets/images/logo-factoriaf5.png";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" data-testid="main-footer">
            <div className="footer-content">
                <h2 className="footer-logo">Stem Tarot</h2>

                <hr className="footer-divider" />

                <p className="footer-text">
                    Proyecto desarrollado por Carmen Tajuelo dentro del marco de formación del Bootcamp de Desarrollo Web Fullstack de Factoría F5 en Agosto de 2025. <br /><br />
                    Hecho con mucho cariño, 💙 y pasión por la tecnología.
                </p>

                <a
                    href="https://factoriaf5.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-brand"
                    aria-label="Visitar sitio web de Factoría F5"
                >
                    <img
                        src={logoFactoria}
                        alt="Logo de Factoría F5"
                        className="h-8"
                    />
                </a>

                <div className="footer-copyright">
                    <p>&copy; {currentYear} Stem Tarot. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;