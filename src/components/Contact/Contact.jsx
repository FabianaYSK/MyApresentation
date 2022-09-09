import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function Contact() {
  // Começar como nulo para depois alterar
  const [form, setForm] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  function submitForm(event) {
    event.preventDefault();

    const { name, email, subject, message } = event.target.elements;
    // Acessar os valores pelo console
    console.log(
      "Name: " + name.value,
      "E-mail: " + email.value,
      "Subject: " + subject.value,
      "Message: " + message.value
    );

    // Evento
    console.log(event);

    // Atualizar os valores pelo useState quando o usuário clica no submit com suas informações
    setForm({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });
  }

  // O useEffect é disparado uma vez antes e depois do valor atualizado
  useEffect(() => {
    const { name, email, subject, message } = form;

    // todo valor nulo é falso (boolean)
    const isNull =
      name == null || email == null || subject == null || message == null;

    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (isNull) {
      console.log(
        "Um dos campos pode estar vazio. Preencha todos os campos do formulário!"
      );
      alert(
        "Um dos campos pode estar vazio. Preencha todos os campos do formulário!"
      );
    } else if (isValidEmail) {
      console.log(
        "O formulário foi enviado. Em breve, você será contatado(a)."
      );
      alert("O formulário foi enviado. Em breve, você será contatado(a).");
    } else {
      console.log("E-mail inválido.");
      alert("E-mail inválido.");
    }
  }, [form])

  return (
    <div className="l-page" id="contatos">
      <section>
        <h1 className="title">Get in Touch</h1>

        <nav className="c-nav">
          <a className="c-nav__item" href="https://github.com/FabianaYSK">
            <FaGithub />
          </a>
          <a
            className="c-nav__item"
            href="https://www.linkedin.com/in/fabiana-ysk"
          >
            <BsLinkedin />
          </a>
          <a className="c-nav__item" href="malito:email@email.com">
            <SiGmail />
          </a>

          <a
            className="c-nav__item"
            href="https://api.whatsapp.com/send?phone=00999999999&text=Olá!%20"
          >
            <BsWhatsapp />
          </a>
        </nav>

        <form
          name="contact"
          className="c-form"
          onSubmit={(event) => submitForm(event)}
        >
          {/* Name */}
          <div className="c-form__group">
            <label htmlFor="name" className="c-form__label">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="c-form__control"
              required
            />
          </div>

          {/* E-mail */}
          <div className="c-form__group">
            <label htmlFor="email" className="c-form__label">
              Email:
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="c-form__control"
              required
            />
          </div>

          {/* Subject */}
          <div className="c-form__group">
            <label htmlFor="subject" className="c-form__label">
              Subject:
            </label>
            <select
              id="subject"
              className="c-form__control"
              defaultValue={"DEFAULT"}
              required
            >
              <option value="">Subject</option>
              <option value="orcamento">Service budget</option>
              <option value="oportunidade">Opportunities</option>
              <option value="parceria">Partnerships</option>
              <option value="perguntas">Questions</option>
              <option value="conversa">Just to say hello!</option>
              <option value="outro">Others</option>
            </select>
          </div>

          {/* Message */}
          <div className="c-form__group">
            <label htmlFor="message" className="c-form__label">
              Message:
            </label>
            <textarea
              rows="5"
              placeholder="Message"
              id="message"
              className="c-form__control"
              required
            ></textarea>
          </div>

          {/* Botão */}
          <div className="c-form__group">
            <button className="c-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
