export interface ContactField {
  label: string;
  placeholder: string;
}

export interface ContactContent {
  label: string;
  heading: string;
  description: string;
  fields: {
    name:    ContactField;
    company: ContactField;
    email:   ContactField;
    phone:   ContactField;
    message: ContactField;
  };
  submitLabel: string;
}

export function getContactContent(): ContactContent {
  return {
    label: "Contacto",
    heading: "Conversemos",
    description: "Conversemos sobre cómo llevar tu negocio al siguiente nivel.",
    fields: {
      name:    { label: "Nombre completo",    placeholder: "Tu nombre" },
      company: { label: "Empresa",            placeholder: "Nombre de tu empresa" },
      email:   { label: "Correo electrónico", placeholder: "tu@email.com" },
      phone:   { label: "Teléfono",           placeholder: "+57 300 000 0000" },
      message: { label: "Mensaje",            placeholder: "Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..." },
    },
    submitLabel: "Enviar mensaje",
  };
}
