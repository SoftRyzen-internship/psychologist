import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActionButton, ErrorNote, Spinner, ThankYou } from '..';
import { contactValidationShema } from '@/utils/contactValidationShema';
import { sendFormDataToChat } from '@/utils/sendFormDataToChat';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const STORAGE_KEY = 'contactForm';
  const schema = contactValidationShema();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  });

  const onSubmitHandler = async (data, e) => {
    e.preventDefault();
    setIsSubmitting(true);

    return await sendFormDataToChat(
      data,
      setServerError,
      setIsThankYou,
      reset,
    ).finally(() => {
      setIsSubmitting(false);
      reset();
    });
  };

  return (
    <div className={s.formContainer}>
      {!isThankYou && !serverError && !isSubmitting && (
        <>
          <h3 className={s.title}>Записатися на прийом</h3>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            novalidate="novalidate"
          >
            <div className={s.fieldsWrap}>
              <div className={s.inputWrap}>
                <label className={s.inputLabel} htmlFor="nameInput">
                  Ваше ім’я
                </label>
                <input
                  type="text"
                  id="namelInput"
                  className={s.inputField}
                  {...register('name')}
                  placeholder="Ваше ім'я"
                />
                {errors?.name ? (
                  <p className={s.error}>{errors?.name?.message}</p>
                ) : (
                  <div className={s.emptyDiv}></div>
                )}
              </div>

              <div className={s.inputWrap}>
                <label className={s.inputLabel} htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className={s.inputField}
                  {...register('email')}
                  placeholder="vaich@gmail.com"
                />

                {errors.email ? (
                  <p className={s.error}>{errors?.email?.message}</p>
                ) : (
                  <div className={s.emptyDiv}> </div>
                )}
              </div>

              <div className={s.inputWrap}>
                <label className={s.inputLabel} htmlFor="phoneInput">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phoneInput"
                  className={s.inputField}
                  {...register('phone')}
                  placeholder="+380"
                />

                {errors.phone ? (
                  <p className={s.error}>{errors?.phone?.message}</p>
                ) : (
                  <div className={s.emptyDiv}> </div>
                )}
              </div>
            </div>

            <ActionButton is404={false} />
          </form>
        </>
      )}

      {isSubmitting && <Spinner />}

      {isThankYou && <ThankYou />}

      {serverError && <ErrorNote />}
    </div>
  );
};
