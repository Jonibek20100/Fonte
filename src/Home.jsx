import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.scss";


const Home = () => {
  
   const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_o72xzzm",    
        "template_9snliuu",   
        formRef.current,
        "23wC2KfgEM2yAo9YN"     
      )
      .then(() => alert("Xabar yuborildi ✅"))
      .catch((err) => {
        console.error(err);
        alert("Xatolik ❌. Keyinroq urinib ko‘ring.");
      });
  };
  return (

<>
      <div className="katta">

    <section className="hero">
          <div className="overlay">
      <div className="hero-slides">
            <div className="hero-inner">
                <div className="hero-text">
              <h1>Хедж-фонд</h1>
              <p>
                Классический выбор профессиональных инвесторов с заданными
                умеренными параметрами риска. Основан на инвестировании в бумаги
                индекса S&amp;P 500 с диверсификацией по 11 секторам экономики.
              </p>
              <button className="btn">Подробнее</button>
            </div> 



        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />

        <div className="slides">
          <div className="slide slide-1"></div>
          <div className="slide slide-2"></div>
          <div className="slide slide-3"></div>
        </div>


<div className="hero-arrows">
  <label htmlFor="slide3" className="arrow left">‹</label> 
  <label htmlFor="slide2" className="arrow right">›</label> 
</div>

            </div>
      </div>
          </div>
    </section>
        <h2 className="h22 ">О нас</h2>
        <div className="div2">
          <div className="centr">
            <div className="rasm"></div>
            <div className="yoz">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae pariatur inventore
              quibusdam hic, iste facilis non similique aspernatur! Doloribus repellendus sunt maxime
              voluptate dolores blanditiis reiciendis, neque dignissimos ad! <br /> <br />

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit ipsa placeat
              rem quidem quae harum cupiditate saepe veritatis, alias, ipsam aliquam. Tempore velit
              similique ad atque laborum, deserunt consequuntur. <br /> <br />

              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit ipsa placeat
              rem quidem quae harum cupiditate saepe veritatis, alias, ipsam aliquam. Tempore velitb
              similique ad atque laborum, deserunt consequuntur. <br /> <br />
            </div>
          </div>
        </div>
        <h2 className="h22">Наши ценности</h2>
        <div className="div3">
          <div className="mi">
            <div className="mi1">
              <div className="mi-rs"></div>
              <div className="mi-tx">
                <h2>Стабилъностъ</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, <br />
                ducimus deleniti ipsa ad expedita iste doloremque quibusdam minima adipisci,
              </div>
            </div>
            <div className="mi1">
              <div className="mi-rs2"></div>
              <div className="mi-tx">
                <h2>Стабилъностъ</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, <br />
                ducimus deleniti ipsa ad expedita iste doloremque quibusdam minima adipisci,
              </div>
            </div>
          </div>
          <div className="mi">
            <div className="mi1">
              <div className="mi-rs4"></div>
              <div className="mi-tx">
                <h2>Стабилъностъ</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, <br />
                ducimus deleniti ipsa ad expedita iste doloremque quibusdam minima adipisci,
              </div>
            </div>
            <div className="mi1">
              <div className="mi-rs5"></div>
              <div className="mi-tx">
                <h2>Стабилъностъ</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, <br />
                ducimus deleniti ipsa ad expedita iste doloremque quibusdam minima adipisci,
              </div>
            </div>
          </div>
        </div>
        <div className="chiz"></div>
        <div className="ol">
          <h2 className="h22">Наши команда</h2>
          <h6 className="h6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis deleniti <br />
            veritatis fugiat pariatur minima autem qui, maiores officia. Labore <br />


exercitationem eos enim repellendus perferendis tempore ut reprehenderit magni debitis.</h6>
        </div>
        <div className="div4">

          <div className="omalar">
            <div className="odam">
              <div className="od-rs"></div>
              <h3>Ержан Мускин</h3>
              <p>CEO</p>
            </div>
            <div className="odam">
              <div className="od-rs1"></div>
              <h3>Олжас Укенов</h3>
              <p>CFO</p>
            </div>
            <div className="odam">
              <div className="od-rs2"></div>
              <h3>Ержан Мускин</h3>
              <p>CEO</p>
            </div>
            <div className="odam">
              <div className="od-rs1"></div>
              <h3>Олжас Укенов</h3>
              <p>CFO</p>
            </div>
            <div className="odam">
              <div className="od-rs2"></div>
              <h3>Ержан Мускин</h3>
              <p>CEO</p>
            </div>
          </div>
        </div>
        <div className="tag">
          <h3 className="go">Сторники и Партнеры</h3>
          <div className="ff">
            <h2>SeedBox</h2>
            <h2>Freedom Finance</h2>
          </div>
        </div>
        <div className="chch">
          <div className="chiz1"></div>
        </div>
        <h2 className="h22">Блог компании</h2>
        <div className="div5">
          <div className="loks">
            <div className="lk-rs"></div>
            <div className="lk-tx">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Accusamus, omnis. <br /> <br />
              <p className="sariq">Подробнее;</p>
            </div>
          </div>
          <div className="loks">
            <div className="lk-rs1"></div>
            <div className="lk-tx">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Accusamus, omnis. <br /> <br />
              <p className="sariq">Подробнее;</p>
            </div>
          </div>
          <div className="loks">
            <div className="lk-rs2"></div>
            <div className="lk-tx">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Accusamus, omnis. <br /> <br />
              <p className="sariq">Подробнее;</p>
            </div>
          </div>
        </div>
    <div className="contact">
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Арман Арманов" required />
        <div className="row">
          <input type="email" name="from_email" placeholder="armanov@yahoo.com" required />
          <input type="text" name="phone" placeholder="+7 777 81" />
        </div>
        <textarea name="message" placeholder="Текст обращения" required></textarea>
        <button type="submit">Получить консультацию</button>
      </form>
      <div className="contact-bg"></div>
    </div>
        <div className="vox11">
          <div className="vox-br">
            <h2>Fonte</h2>
          </div>
          <div className="wox-ur">
            <p>О нас</p>
            <p>Контакты</p>
            <p>Команда</p>
            <p>Блог</p>
            <p>Продуты</p>
          </div>
          <div className="wox-ox">
            <h3>Terms and conitcion</h3>
            <h3>Privectore</h3>
          </div>
          <div className="ins1">
            <div className="ins"></div>
            <div className="fec"></div>
            <div className="teg"></div>
          </div>
        </div>
        <div className="chiz"></div>
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
      </div>
    </>
  );
};

export default Home;
