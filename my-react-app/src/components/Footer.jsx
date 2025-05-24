import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">        <div className="footer-logo">
        <img src="/src/assets/images/logo.png" alt="COTOKITA Logo" />
      </div>
        <p className="footer-description">
          Platform kuliner Indonesia yang menghubungkan pecinta makanan dengan
          berbagai resep masakan nusantara dan peluang karir di industri kuliner.
        </p>
      </div>

      <div className="footer-section">
        <h4>Jelajahi</h4>
        <ul>
          <li>
            <a href="#beranda">Beranda</a>
          </li>
          <li>
            <a href="#resep">Resep</a>
          </li>
          <li>
            <a href="#lowongan">Lowongan Kerja</a>
          </li>
          <li>
            <a href="#events">Event Kuliner</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Layanan</h4>
        <ul>
          <li>
            <a href="#tentang">Tentang Kami</a>
          </li>
          <li>
            <a href="#bantuan">Pusat Bantuan</a>
          </li>
          <li>
            <a href="#kebijakan">Kebijakan Privasi</a>
          </li>
          <li>
            <a href="#syarat">Syarat & Ketentuan</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Hubungi Kami</h4>
        <ul>
          <li>📧 info@cotokita.id</li>
          <li>📞 +62 812-3456-7890</li>
          <li>📍 Jl. Kuliner Indonesia No. 1</li>
          <li>Jakarta, Indonesia</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} COTOKITA. Hak Cipta Dilindungi.
      </p>
      <div className="social-links">
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;