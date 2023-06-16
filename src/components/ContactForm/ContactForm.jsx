import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useState } from 'react';

import { ActionButton, ErrorNote, ThankYou } from '..';
import { contactValidationShema } from '@/utils/contactValidationShema';
import AgreeSVG from 'public/icons/check-mark.svg';
import s from './ContactForm.module.css';

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

const sendToChat = async ({ name, email, phone }, setError) => {
  const text = `Ім'я - ${name} Email - ${email} Телефон - ${phone} `;
  console.log(text);

  try {
    const data = await axios.post(URL_API, {
      text,
      parse_mod: 'HTML',
    });
    console.log(data);
    return data;
  } catch (error) {
    const message = error.message;
    console.log(message);
    setError(message);
  }
};

export const ContactForm = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          acceptedTerms: false,
        }}
        validationSchema={contactValidationShema}
        onSubmit={(values, { setSubmitting }) => {
          // dispatch(onSubmit(values));
          console.log(values);
          sendToChat(values, setError);
          setSubmitting(false);
          setIsThankYou(true);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={s.form}>
            {!isThankYou && (
              <div>
                <h3 className={s.title}>Записатися на прийом</h3>
                <div className={s.fieldsWrap}>
                  <div className={s.inputWrap}>
                    <label className={s.inputLabel} htmlFor="nameInput">
                      Ваше ім’я
                    </label>
                    <Field
                      style={
                        touched.name &&
                        errors.name && {
                          outline: '1px solid var(--error-color)',
                        }
                      }
                      className={s.inputField}
                      type="text"
                      name="name"
                      id="namelInput"
                      placeholder="Ваше ім'я"
                    />
                    {touched.name && errors.name ? (
                      <div className={s.error}>{errors.name}</div>
                    ) : null}
                  </div>

                  <div className={s.inputWrap}>
                    <label className={s.inputLabel} htmlFor="emailInput">
                      Email
                    </label>
                    <Field
                      style={
                        touched.email &&
                        errors.email && {
                          outline: '1px solid var(--error-color)',
                        }
                      }
                      className={s.inputField}
                      type="email"
                      name="email"
                      id="emailInput"
                      placeholder="vaich@gmail.com"
                    />
                    {touched.email && errors.email ? (
                      <div className={s.error}>{errors.email}</div>
                    ) : null}
                  </div>

                  <div className={s.inputWrap}>
                    <label className={s.inputLabel} htmlFor="phoneInput">
                      Телефон
                    </label>
                    <Field
                      style={
                        touched.phone &&
                        errors.phone && {
                          outline: '1px solid var(--error-color)',
                        }
                      }
                      className={s.inputField}
                      type="phone"
                      id="phoneInput"
                      placeholder="+380"
                      name="phone"
                    />
                    {touched.phone && errors.phone ? (
                      <div className={s.error}>{errors.phone}</div>
                    ) : null}
                  </div>
                </div>

                <label className={s.checkboxLabel} htmlFor="acceptedTerms">
                  Згоден з політикою конфеденційності
                  <Field
                    className={s.acceptCheckbox}
                    type="checkbox"
                    id="acceptedTerms"
                    name="acceptedTerms"
                  />
                  <span
                    className={s.acceptSpan}
                    style={
                      touched.acceptedTerms &&
                      errors.acceptedTerms && {
                        outline: '1px solid var(--error-color)',
                      }
                    }
                  >
                    {values.acceptedTerms && (
                      <AgreeSVG className={s.icon} width="16" height="16" />
                    )}
                  </span>
                </label>

                <ActionButton inModalForm={true} is404={false} />
              </div>
            )}
            {!error && isThankYou && <ThankYou />}
            {error && <ErrorNote message={error} />}
          </Form>
        )}
      </Formik>
    </>
  );
};
