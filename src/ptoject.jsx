import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.scss";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o72xzzm",   
        "template_pnpxchu", 
        form.current,
        "KOuurIT8S5oRMXtNm"    
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Сообщение отправлено ✅");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Ошибка ❌: " + error.text);
        }
      );
  };

  return (
    <div className="contacts-section">
      <div className="contacts-wrapper">

        <div className="contacts-details">
          <h2>Контакты</h2>

          <p className="subtitle">Задайте нам любой вопрос</p>
          <p className="phone">+7 701 776 24 20</p>

          <p className="subtitle">Электронная почта</p>
          <p className="email">client@fonte.kz</p>

          <p className="subtitle">Юридический адрес</p>
          <p className="address">
            050040/A15E3H4, проспект Аль-Фараби, 77/7, 10 этаж, Алматы, Казахстан <br />
            Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346, Астана, Казахстан
          </p>
        </div>

   
        <form ref={form} onSubmit={sendEmail} className="contacts-form">
          <input type="text" name="from_name" placeholder="Арман Ар" required />
          <input type="tel" name="phone" placeholder="Телефон" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Отправить</button>
        </form>
      </div>

  
      <div className="contacts-maps">
        <div className="contacts-map-item astana">
          <p>Астана</p>
        </div>
        <div className="contacts-map-item almaty">
          <p>Алматы</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
