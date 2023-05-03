import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rjce6sh",
      "template_pldqnhp",
      form.current,
      "5efaKNiMt0WN_0FQ3"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Vamos conversar</h5>
      <h2>Contate-me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>robertholiveira36@gmail.com</h5>
            <a href="mailto:robertholiveira36@gmail.com">Mande uma mensagem</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>(31)99611-8127</h5>
            <a href=" https://wa.me/5531996118127">Mande uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome completo" required />
          <input type="text" email="email" placeholder="Email" required />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Sua mensagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
