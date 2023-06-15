import { Formik, Field, Form } from 'formik';
import { ActionButton } from '..';
import { contactValidationShema } from '../../utils/contactValidationShema';
import AgreeSVG from 'public/icons/check-mark.svg';
import s from './ContactForm.module.css';

export const ContactForm = () => {
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
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={s.form}>
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
          </Form>
        )}
      </Formik>
    </>
  );
};
