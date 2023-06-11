// import { memo } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { ActionButton } from '..';

export const ContactForm = () =>
  // { onSubmit }
  {
    const phoneRegex = /^\+[0-9]{12}$/;
    const emailRegex =
      /^[^-]+[a-zA-Z0-9._-]+[^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*[^-]$/;

    return (
      <>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            toggle: true,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Ім'я обов'язкове")
              .min(2, "Ім'я закоротке")
              .max(100, "Ім'я задовге"),
            email: Yup.string()
              .required("Email обов'язковий")
              .matches(emailRegex, 'Email некоректний'),
            phone: Yup.string()
              .required("Телефон обов'язковий")
              .matches(phoneRegex, 'Телефон некоректний')
              .min(12, 'Телефон закороткий'),
            acceptedTerms: Yup.boolean()
              .required("Згода обов'язкова")
              .oneOf([true], 'Погодьтеся з політикою конфеденційності'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // dispatch(onSubmit(values));
            setSubmitting(false);
          }}
        >
          {({
            errors,
            touched,
            //  values
          }) => (
            <Form className={s.form}>
              <h3 className={s.title}>Записатися на прийом</h3>

              <div className={s.inputWrap}>
                <label className={s.inputLabel} htmlFor="nameInput">
                  Ваше ім’я
                </label>
                <Field
                  style={
                    touched.name &&
                    errors.name && {
                      outline: '1px solid #ca381f',
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
                      outline: '1px solid #ca381f',
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
                      outline: '1px solid #ca381f',
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

              <label className={s.checkboxLabel} htmlFor="acceptedTerms">
                Згоден з політикою конфеденційності
                <Field
                  className={s.acceptCheckbox}
                  type="checkbox"
                  id="acceptedTerms"
                  name="acceptedTerms"
                />
                <span className={s.acceptSpan}>
                  {/* {values.acceptedTerms ? ( */}
                  <svg
                    className={s.icon}
                    width="16"
                    height="16"
                    fill="red"
                    // fill={values.acceptedTerms ? 'blue' : 'white'}
                  >
                    <use href="/icons/tick1.svg" />
                  </svg>
                  {/* )  */}
                  {/* // : ( */}
                  {/* //   <svg */}
                  {/* //     width="24"
                //     height="24"
                //     fill={touched.password && errors.password ? 'red' : 'white'}
                //   > */}
                  {/* <use xlinkHref={`${icon}#icon-eye`} /> */}
                  {/* </svg>
                )} */}
                </span>
              </label>

              <ActionButton inModalForm={true} is404={false} />
              {/* <button className={s.button} type="submit">
              {btnSubmit}
            </button> */}
            </Form>
          )}
        </Formik>
      </>
    );
  };
