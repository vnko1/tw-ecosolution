import { FC } from "react";
import { Form, Formik, FormikHelpers } from "formik";

import { ContactsFormValue } from "./ContactForm.type";
import { validationSchema } from "./validationSchema";
import { IconEnum } from "@/src/types";
import styles from "./ContactForm.module.scss";

import { UIButton, TextField } from "@/src/components";

const initialValues: ContactsFormValue = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};
const formsData = {
  fullName: { label: "* Full name:", placeholder: "John Rosie" },
  email: { label: "* E-mail:", placeholder: "johnrosie@gmail.com" },
  phone: { label: "* Phone:", placeholder: "380961234567" },
  message: { label: "Message:", placeholder: "Your message" },
};

const keyValues = Object.keys(initialValues);

const ContactForm: FC = () => {
  const onHandleSubmit = (
    values: ContactsFormValue,
    { resetForm }: FormikHelpers<ContactsFormValue>
  ) => {
    const keys = Object.keys(values);

    const trimmedValue = keys.reduce((acc, el) => {
      return { [el]: values[el as keyof ContactsFormValue].trim(), ...acc };
    }, {});

    console.log(
      "🚀 ~ file: ContactForm.tsx:40 ~ trimmedValue ~ trimmedValue:",
      trimmedValue
    );

    resetForm();
  };
  return (
    <div className={styles["contact-form"]}>
      {
        <Formik
          initialValues={initialValues}
          onSubmit={onHandleSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, dirty, values }) => (
            <Form className={styles["form"]}>
              <div className={styles["form__field"]}>
                {keyValues.map((key, i) => {
                  if (key === "message")
                    return (
                      <TextField
                        key={i}
                        id={key}
                        name={key}
                        value={values[key]}
                        label={formsData[key].label}
                        placeholder={formsData[key].placeholder}
                        component="textarea"
                      />
                    );

                  return (
                    <TextField
                      key={i}
                      id={key}
                      name={key}
                      value={values[key as keyof ContactsFormValue]}
                      label={formsData[key as keyof ContactsFormValue].label}
                      placeholder={
                        formsData[key as keyof ContactsFormValue].placeholder
                      }
                    />
                  );
                })}
              </div>
              <UIButton
                variant="outlined"
                type="submit"
                icon={IconEnum.ARROW}
                iconClassNames={styles["icon"]}
                iconSize={16}
                disabled={!isValid || !dirty}
                classNames={styles["button"]}
              >
                Send
              </UIButton>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default ContactForm;
