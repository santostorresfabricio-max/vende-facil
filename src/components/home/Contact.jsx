import React from 'react';
import '../../styles/Contact.css';

const Contact = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">¿Tienes alguna pregunta?</h2>
          <p className="text-secondary">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto.</p>
        </div>

        <div className="contact-card">
          <form className="mb-5">
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold text-dark small">Nombre completo</label>
                <input type="text" className="form-control form-control-custom" placeholder="Juan Pérez" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold text-dark small">Correo electrónico</label>
                <input type="email" className="form-control form-control-custom" placeholder="juan@ejemplo.com" />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold text-dark small">Teléfono (Opcional)</label>
                <input type="tel" className="form-control form-control-custom" placeholder="+1 (555) 123-4567" />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold text-dark small">Mensaje</label>
                <textarea className="form-control form-control-custom" rows="5" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2">
                  <i className="bi bi-send"></i> Enviar mensaje
                </button>
              </div>
            </div>
          </form>

          <hr className="my-5 opacity-10" />

          <div className="row g-4">
            <div className="col-md-6">
              <div className="contact-info-box">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-dark">Email</h6>
                  <span className="text-secondary small">contacto@vendefacil.com</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info-box">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h6 className="mb-1 fw-bold text-dark">Teléfono</h6>
                  <span className="text-secondary small">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
