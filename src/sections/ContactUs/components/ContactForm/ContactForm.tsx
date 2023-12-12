import { FC, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";

import { IconEnum } from "@/src/types";
import { UIButton, TextField } from "@/src/components";
import { ContactsFormValue } from "./ContactForm.type";
import { validationSchema } from "./validationSchema";
import styles from "./ContactForm.module.scss";

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
  const [showUMessage, setShowUMessage] = useState(false);
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
    setShowUMessage(true);
    resetForm();
  };

  useEffect(() => {
    let t: number;
    if (showUMessage) {
      t = setTimeout(() => {
        setShowUMessage(false);
      }, 2000);
    }

    return () => clearTimeout(t);
  }, [showUMessage]);

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
              <div className={styles["form__wrapper"]}>
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
                {showUMessage ? (
                  <p className={styles["message"]}>Your message is sent</p>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default ContactForm;
