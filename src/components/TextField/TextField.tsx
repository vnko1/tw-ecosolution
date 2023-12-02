import { ChangeEvent, FC } from "react";
import { ErrorMessage, Field, useField, useFormikContext } from "formik";
import cn from "classnames";

import { TextFieldProps } from "./TextField.type";
import styles from "./TextField.module.scss";

const TextField: FC<TextFieldProps> = ({
  id,
  classNames,
  label,
  name,
  type = "text",
  value,
  defaultValue,
  component = "input",
  onChange,
  ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const isErrorValidation = meta.touched && meta.error;
  const isTextArea = component === "textarea" ? styles["textarea"] : undefined;

  const onHandleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(field.name, event.target.value);
    onChange && onChange(event);
  };

  const formClassnames = (
    baseClassNames: string,
    additionalClassName?: string
  ) =>
    cn(
      baseClassNames,
      {
        [styles["error"]]: isErrorValidation,
      },
      additionalClassName
    );

  return (
    <label htmlFor={id} className={`${styles["field__label"]} ${classNames}`}>
      <span className={styles["label-text"]}>{label}</span>
      <Field
        {...field}
        {...props}
        id={id}
        type={type}
        value={value}
        component={component}
        defaultValue={defaultValue}
        className={formClassnames(styles["field__input"], isTextArea)}
        onChange={onHandleChangeField}
      />
      {isErrorValidation ? (
        <ErrorMessage
          name={name || "Field invalid"}
          component="span"
          className={formClassnames(styles["error-text"])}
        />
      ) : null}
    </label>
  );
};

export default TextField;
