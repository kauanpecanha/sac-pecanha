import { useState } from "react";

const WHATSAPP_URL = "http://wa.me/5521989990463";

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

    const message = [
      "Olá! Gostaria de falar com o SAC PEÇANHA.",
      "",
      `*Título:* ${title.trim()}`,
      `*Descrição:* ${description.trim()}`,
    ].join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="brand">
          <span className="brandMark">P</span>
          <span>SAC PEÇANHA</span>
        </div>

        <div className="intro">
          <p className="eyebrow">ATENDIMENTO DIRETO</p>
          <h1 id="page-title">
            Como podemos
            <br />
            <span>ajudar?</span>
          </h1>
          <p className="subtitle">
            Conte o que aconteceu. Sua mensagem será encaminhada diretamente
            para nossa equipe pelo WhatsApp.
          </p>
        </div>

        <p className="availability">
          <span aria-hidden="true" />
          Atendimento disponível
        </p>
      </section>

      <section className="formPanel" aria-label="Formulário de atendimento">
        <form onSubmit={handleSubmit}>
          <div className="formHeading">
            <span>01</span>
            <div>
              <h2>Envie sua mensagem</h2>
              <p>Preencha os campos abaixo para iniciar o atendimento.</p>
            </div>
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
            Ao enviar, uma nova aba do WhatsApp será aberta. Seus dados não são
            armazenados neste site.
          </p>
        </form>
      </section>
    </main>
  );
}
