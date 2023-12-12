import { FC, useEffect, useRef, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";

import { IconEnum } from "@/src/types";
import { getDataFromLS } from "@/src/utils";
import { UIButton, TextField, Animation } from "@/src/components";
import { ContactsFormValue } from "./ContactForm.type";
import { validationSchema } from "./validationSchema";
import styles from "./ContactForm.module.scss";

const initialValues: ContactsFormValue = {
  fullName: getDataFromLS("fullName")
    ? JSON.parse(getDataFromLS("fullName") || "")
    : "",
  email: getDataFromLS("email") ? JSON.parse(getDataFromLS("email") || "") : "",
  phone: getDataFromLS("phone") ? JSON.parse(getDataFromLS("phone") || "") : "",
  message: getDataFromLS("message")
    ? JSON.parse(getDataFromLS("message") || "")
    : "",
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
  const nodeRef = useRef(null);
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
          validateOnMount
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
              <Animation nodeRef={nodeRef}>
                <p>Your message is sent</p>
              </Animation>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

export default ContactForm;
