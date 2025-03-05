import React, { useState } from "react";
import "./header.css";
import "./homepage.css";
import "./footer.css";

import logo from "./res/Full_Logo.jpeg";      // 請確認路徑正確
import menuIcon from "./res/選單.svg";          // 請確認路徑正確
import homepageImage from "./res/homepage.jpg"; // 首頁背景圖片

// 將 carousel 的圖片放在 src/res/Homepage/ 中，並用 import 引入
import headphone from "./res/Homepage/headphone.jpg";
import dip from "./res/Homepage/dip.jpg";
import cctv from "./res/Homepage/cctv.jpg";
import monitorImg from "./res/Homepage/monitor.jpg";
import wifi from "./res/Homepage/wifi.jpg";
import bowl from "./res/Homepage/bowl.jpg";
import hdd from "./res/Homepage/hdd.jpg";
import warning from "./res/Homepage/warning.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header 區塊 - 取自 header.html */}
      <header className="header">
        {/* 背景區塊 */}
        <div className="background"></div>

        <div className="header_index">
          {/* Logo 區塊 */}
          <div className="header_logo">
            <a href="index.html" className="jr_homepage">
              <img src={logo} alt="晢瑞實業有限公司Logo" className="logo" />
            </a>
          </div>

          {/* 桌機版導覽列 */}
          <div className="index">
            <div className="dropdown">
              <h4 className="trigger header_about_us" alt="認識晢瑞">
                認識晢瑞
              </h4>
              <div className="dropdown-menu">
                <a href="about_us.html">公司簡介</a>
                <a href="promise.html">經營理念</a>
                <a href="org.html">組織圖</a>
              </div>
            </div>
            <div className="dropdown">
              <h4 className="trigger header_product" alt="產品＆專業">
                產品＆專業
              </h4>
              <div className="dropdown-menu">
                <a href="product.html">生產產品系列</a>
                <a href="sop.html">生產流程</a>
                <a href="security.html">產品保全及保險</a>
              </div>
            </div>
            <div className="dropdown">
              <h4 className="trigger header_envionment" alt="廠區環境及設備">
                廠區環境及設備
              </h4>
              <div className="dropdown-menu">
                <a href="env.html#environment">廠區環境</a>
                <a href="equiment.html">生產設備</a>
              </div>
            </div>
            <div className="dropdown">
              <h4 className="trigger header_contact" alt="聯絡我們">
                聯絡我們
              </h4>
              <div className="dropdown-menu">
                <a href="contact.html#method">聯絡方式</a>
              </div>
            </div>
          </div>

          {/* 手機版隱藏的 checkbox 控制選單（保留結構） */}
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          {/* 漢堡按鈕 */}
          <label
            htmlFor="menu-toggle"
            className="hamburger-label"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuIcon} alt="選單圖示" />
          </label>

          {/* 手機版選單內容 */}
          {menuOpen && (
            <div className="hamburger_menu">
              <div className="hamburger_menu_content">
                <input type="checkbox" id="collapse-about" className="collapse-toggle" />
                <label htmlFor="collapse-about" className="collapse-label">
                  認識晢瑞
                </label>
                <ul className="hamburger_small collapse-content">
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="about_us.html" onClick={() => setMenuOpen(false)}>
                        公司簡介
                      </a>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="promise.html" onClick={() => setMenuOpen(false)}>
                        經營理念
                      </a>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="org.html" onClick={() => setMenuOpen(false)}>
                        組織圖
                      </a>
                    </label>
                  </li>
                </ul>

                <input type="checkbox" id="collapse-product" className="collapse-toggle" />
                <label htmlFor="collapse-product" className="collapse-label">
                  產品＆專業
                </label>
                <ul className="hamburger_small collapse-content">
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="product.html" onClick={() => setMenuOpen(false)}>
                        生產產品系列
                      </a>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="sop.html" onClick={() => setMenuOpen(false)}>
                        生產流程
                      </a>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="security.html" onClick={() => setMenuOpen(false)}>
                        工廠保全及保險
                      </a>
                    </label>
                  </li>
                </ul>

                <input type="checkbox" id="collapse-environment" className="collapse-toggle" />
                <label htmlFor="collapse-environment" className="collapse-label">
                  廠區環境及設備
                </label>
                <ul className="hamburger_small collapse-content">
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="env.html#environment" onClick={() => setMenuOpen(false)}>
                        廠區環境
                      </a>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="equiment.html" onClick={() => setMenuOpen(false)}>
                        生產設備
                      </a>
                    </label>
                  </li>
                </ul>

                <input type="checkbox" id="collapse-contact" className="collapse-toggle" />
                <label htmlFor="collapse-contact" className="collapse-label">
                  聯絡我們
                </label>
                <ul className="hamburger_small collapse-content">
                  <li>
                    <label htmlFor="menu-toggle">
                      <a href="contact.html#method" onClick={() => setMenuOpen(false)}>
                        聯絡方式
                      </a>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <label htmlFor="menu-toggle" className="menu-overlay"></label>
        </div>
      </header>

      {/* 首頁內容 - 取自 index.html */}
      <div className="body1">
        <div className="banner">
          <div className="banner_contents">
            <h1 className="banner_contents_h1">晢瑞實業有限公司</h1>
            <p className="banner_p">
              ISO 9001認證<br />
              專業DIP插件、組裝測試包裝廠<br />
              維修、手焊加工
            </p>
            <a href="contact.html" className="contact-button">
              聯絡我們
            </a>
          </div>
        </div>
        <div className="banner_overlay"></div>
        <img
          src={homepageImage}
          alt="晢瑞實業有限公司"
          className="banner_homepage_image"
        />

        <section className="category-section">
          <h2 className="category-title">代工類別</h2>
          <p className="category-subtitle">
            我們專注於提供<br />
            電子產品插件（DIP）、組裝、測試、維修及各式產品包裝等<br />
            代工服務
          </p>
          <p className="category-subtitle_mobile">
            我們專注於提供電子產品<br />
            插件（DIP）、組裝、測試、維修<br />
            及各式產品包裝等代工服務
          </p>
          {/* 卡片容器 */}
          <div className="category-container">
            <div className="category-card">
              <img
                src={headphone}
                alt="頭戴式耳機"
                className="category-image"
              />
              <div className="category-info">
                <h3>頭戴式耳機</h3>
                <p>高品質耳機組包裝代工及測試</p>
              </div>
            </div>
            <div className="category-card">
              <img src={dip} alt="DIP" className="category-image" />
              <div className="category-info">
                <h3>DIP</h3>
                <p>專業DIP插件</p>
              </div>
            </div>
            <div className="category-card">
              <img src={cctv} alt="監視器" className="category-image" />
              <div className="category-info">
                <h3>監視器</h3>
                <p>各類監視器設備</p>
              </div>
            </div>
            <div className="category-card">
              <img src={monitorImg} alt="觸控螢幕" className="category-image" />
              <div className="category-info">
                <h3>觸控螢幕</h3>
                <p>觸控螢幕組包測</p>
              </div>
            </div>
            <div className="category-card">
              <img src={wifi} alt="網通消費性產品" className="category-image" />
              <div className="category-info">
                <h3>網通消費性產品</h3>
                <p>路由器、交換機等產品代工</p>
              </div>
            </div>
            <div className="category-card">
              <img src={bowl} alt="生活用品包裝" className="category-image" />
              <div className="category-info">
                <h3>生活用品包裝</h3>
                <p>碗筷包裝、各類生活用品組包裝</p>
              </div>
            </div>
            <div className="category-card">
              <img src={hdd} alt="HDD抽取盒" className="category-image" />
              <div className="category-info">
                <h3>HDD抽取盒</h3>
                <p>硬碟抽取盒精密代工</p>
              </div>
            </div>
            <div className="category-card">
              <img src={warning} alt="道路警示器" className="category-image" />
              <div className="category-info">
                <h3>道路警示器</h3>
                <p>各式道路警示器</p>
              </div>
            </div>
          </div>
          {/* 手機、平板版輪播 */}
          <div className="carousel-container">
            <div className="carousel-inner">
              <div className="carousel-slide">
                <img
                  src={headphone}
                  alt="頭戴式耳機"
                  className="category-image"
                />
                <div className="slide-info">
                  <h3>頭戴式耳機</h3>
                  <p>高品質耳機組包裝代工及測試</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={dip} alt="DIP" className="category-image" />
                <div className="slide-info">
                  <h3>DIP</h3>
                  <p>專業DIP插件</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={cctv} alt="監視器" className="category-image" />
                <div className="slide-info">
                  <h3>監視器</h3>
                  <p>各類監視器設備</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={monitorImg} alt="觸控螢幕" className="category-image" />
                <div className="slide-info">
                  <h3>觸控螢幕</h3>
                  <p>觸控螢幕組包測</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={wifi} alt="網通消費性產品" className="category-image" />
                <div className="slide-info">
                  <h3>網通消費性產品</h3>
                  <p>路由器、交換機等產品代工</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={bowl} alt="生活用品包裝" className="category-image" />
                <div className="slide-info">
                  <h3>生活用品包裝</h3>
                  <p>碗筷包裝、各類生活用品組包裝</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={hdd} alt="HDD抽取盒" className="category-image" />
                <div className="slide-info">
                  <h3>HDD抽取盒</h3>
                  <p>硬碟抽取盒精密代工</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img src={warning} alt="道路警示器" className="category-image" />
                <div className="slide-info">
                  <h3>道路警示器</h3>
                  <p>各式道路警示器</p>
                </div>
              </div>
              <div className="carousel-slide">
                <img
                  src={headphone}
                  alt="頭戴式耳機"
                  className="category-image"
                />
                <div className="slide-info">
                  <h3>頭戴式耳機</h3>
                  <p>高品質耳機組包裝代工及測試</p>
                </div>
              </div>
            </div>
            <button className="carousel-button prev">&#10094;</button>
            <button className="carousel-button next">&#10095;</button>
          </div>
        </section>

        {/* Google Map 區塊 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.699681017951!2d121.20433681109792!3d24.908223577805977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468230c50854f31%3A0x4c463b2d6771f1d2!2z5pmi55Ge5a-m5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1736919437948!5m2!1szh-TW!2stw"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>

      {/* Footer 區塊 - 取自 footer.html */}
      <footer className="footer">
        <div className="footer_left">
          <h1>晢瑞實業有限公司</h1>
          <h4>地址 : 桃園市平鎮區天津街203巷20號</h4>
          <h4>電話 : 03-403-0015</h4>
          <h4>電子郵件 : jherueijr@gmail.com</h4>
        </div>
        <hr className="line" />
        <div className="footer_right">
          <div className="section1">
            <div className="sec1_title">
              <h4>關於晢瑞</h4>
            </div>
            <div className="sec1_content">
              <a href="about_us.html">公司簡介</a>
              <a href="promise.html">經營理念</a>
              <a href="org.html">組織圖</a>
            </div>
          </div>
          <div className="section2">
            <div className="sec2_title">
              <h4>產品 & 專業</h4>
            </div>
            <div className="sec2_content">
              <a href="product.html">生產產品系列</a>
              <a href="sop.html">生產流程</a>
              <a href="security.html">產品保全及保險</a>
            </div>
          </div>
          <div className="section3">
            <div className="sec3_title">
              <h4>廠區環境及設備</h4>
            </div>
            <div className="sec3_content">
              <a href="env.html">廠區環境</a>
              <a href="equiment.html">生產設備</a>
            </div>
          </div>
          <div className="section4">
            <div className="sec4_title">
              <h4>聯絡我們</h4>
            </div>
            <div className="sec4_content">
              <a href="contact.html">聯絡方式</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;