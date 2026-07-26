import { useState } from "react";

const WHATSAPP_PHONE = import.meta.env.WHATSAPP_PHONE?.replace(/\D/g, "");

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!WHATSAPP_PHONE) {
      window.alert(
        "Número do WhatsApp não configurado. Defina WHATSAPP_PHONE.",
      );
      return;
    }

    const message = [
      "Olá! Gostaria de falar com o SAC PEÇANHA.",
      "",
      `*Título:* ${title.trim()}`,
      `*Descrição:* ${description.trim()}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main>
      <section className="formPanel" aria-label="Formulário de atendimento">
        <form onSubmit={handleSubmit}>
          <div className="formHeading">
            <span className="brandMark">P</span>
            <p className="eyebrow">SAC PEÇANHA</p>
            <h1>Envie sua mensagem</h1>
            <p className="tagline">
              você manda, eu obedeço.
              <br />
              <span>Assinado: P.</span>
            </p>
          </div>

          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Ex: Dúvida sobre um serviço"
            maxLength={100}
            required
          />

          <div className="labelRow">
            <label htmlFor="description">Descrição</label>
            <span>{description.length}/500</span>
          </div>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descreva sua solicitação com detalhes..."
            maxLength={500}
            required
          />

          <button type="submit">
            <span>Enviar pelo WhatsApp</span>
            <ArrowIcon />
          </button>

          <p className="privacy">
            Uma nova aba do WhatsApp será aberta ao enviar.
          </p>
        </form>
      </section>
    </main>
  );
}
