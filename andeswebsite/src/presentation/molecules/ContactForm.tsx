import { Formik, Form } from "formik";
import { contactSchema } from "../../schemas/contactSchema";
import { useContactStore } from "../../stores/useContactStore";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { ZodError } from "zod";

interface FormValues {
  nombre: string;
  correo: string;
  numero: string;
  mensaje: string;
}

const initialValues: FormValues = {
  nombre: "",
  correo: "",
  numero: "",
  mensaje: "",
};

const validate = (values: FormValues) => {
  try {
    contactSchema.parse(values);
    return {};
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Partial<Record<keyof FormValues, string>> = {};
      error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormValues;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      });
      return errors;
    }
    return {};
  }
};

const ContactForm = () => {
  const { isSubmitting, isSuccess, submitContactForm, resetForm } =
    useContactStore();

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Icon
            name="check_circle"
            size="xl"
            className="text-green-500"
            variant="filled"
          />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-neutral-500 mb-6">
          Nos pondremos en contacto contigo pronto.
        </p>
        <Button variant="ghost" onClick={resetForm}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={async () => {
        await submitContactForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className="space-y-6">
          <Input
            label="Nombre"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.nombre ? errors.nombre : undefined}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Correo Electrónico"
              id="correo"
              name="correo"
              type="email"
              placeholder="ejemplo@correo.com"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.correo ? errors.correo : undefined}
            />
            <Input
              label="Número"
              id="numero"
              name="numero"
              type="tel"
              placeholder="+57 300 000 0000"
              value={values.numero}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.numero ? errors.numero : undefined}
            />
          </div>

          <TextArea
            label="Mensaje"
            id="mensaje"
            name="mensaje"
            placeholder="¿En qué podemos ayudarte?"
            rows={4}
            value={values.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.mensaje ? errors.mensaje : undefined}
          />

          <Button
            type="submit"
            fullWidth
            disabled={isSubmitting}
            icon="send"
            className="py-4"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
