import React from "react";
import "./App.scss";

const Contact = () => {
  return (
  <>
    <div className="products">

      <div className="card">
        <div className="text">
          <h3>Хедж-фонд</h3>
          <p>
            Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. 
            Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.
          </p>
          <button>Подробнее</button>
        </div>
        <div className="rasm1"></div>
      </div>

      <div className="card">
        <div className="text">
          <h3>Крипто фонд*</h3>
          <p>
            Предоставляет клиентам легальные возможности для инвестирования в криптовалюту и связанные с ней продукты.
          </p>
          <button>Подробнее</button>
        </div>
        <div className="rasm2"></div>
      </div>

      <div className="card">
        <div className="text">
          <h3>Венчурный фонд*</h3>
          <p>
            Инвестиции в компании и проекты (стартапы), в том числе в компании на этапе Pre-IPO. 
            Подходит для инвесторов, желающих получить более высокий доход при повышенной степени риска.
          </p>
          <button>Подробнее</button>
        </div>
        <div className="rasm3"></div>
      </div>
    </div>
        <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">Fonte</div>
        <div className="footer__links">
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Команда</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Продукты</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <ul>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="footer__socials">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2022 • Fonte • All rights reserved</p>
        <p className="footer__text">
          Частная компания «FONTE Capital Ltd.», зарегистрированная по адресу:
          Есильский район, г. Нур-Султан, Мангилик Ел, 55/20, офис 345-346, БИН 220140900035,
          осуществляет свою деятельность в соответствии с законодательством Международного
          Финансового центра «Астана» (МФЦА) имеет право осуществлять регулируемую деятельность
          по управлению коллективными инвестициями – на основании лицензии № AFSA-A-LA-2022-0004,
          от 27 января 2022 года на бессрочной основе
        </p>
        <p className="footer__text">
          Стоимость инвестиций инвестора в инвестиционный фонд может увеличиваться или уменьшаться.
          Результаты инвестирования в прошлом не определяют доходы в будущем. Управляющая компания
          инвестиционного фонда или МФЦА не гарантируют доходности инвестиций. Инвестору необходимо
          ознакомиться с Уставом (Constitution) и Инвестиционным меморандумом (Offering Memorandum)
          инвестиционного фонда, его инвестиционной декларацией и определенными рисками перед
          инвестированием активов в инвестиционный фонд.
        </p>
      </div>
    </footer>
    </>
  );
};

export default Contact;
