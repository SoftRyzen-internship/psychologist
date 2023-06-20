import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActionButton, ErrorNote, ThankYou } from '..';
import { contactValidationShema } from '@/utils/contactValidationShema';
import { sendFormDataToChat } from '@/utils/sendFormDataToChat';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [isThankYou, setIsThankYou] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const STORAGE_KEY = 'contactForm';
  const schema = contactValidationShema();

  console.log('serverError', serverError);
  console.log('isSubmitting', isSubmitting);

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
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={s.fieldsWrap}>
              <div className={s.inputWrap}>
                <label className={s.inputLabel} htmlFor="nameInput">
                  Ваше ім’я
                </label>
                <input
                  type="text"
                  id="namelInput"
                  className={s.inputField}
                  // className={errors.name === undefined ? s.input : s.inputRed}
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

      {isSubmitting && <p>Is loading...</p>}

      {isThankYou && <ThankYou />}

      {serverError && <ErrorNote />}
    </div>
  );
};

// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useFormPersist from 'react-hook-form-persist';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { ActionButton, ErrorNote, ThankYou } from '..';
// import { contactValidationShema } from '@/utils/contactValidationShema';
// import { sendFormDataToChat } from '@/utils/sendFormDataToChat';
// import s from './ContactForm.module.css';

// export const ContactForm = () => {
//   const [isThankYou, setIsThankYou] = useState(false);
//   const [serverError, setServerError] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const STORAGE_KEY = 'contact-form';

//   console.log('serverError', serverError);
//   console.log('isSubmitting', isSubmitting);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(contactValidationShema),
//   });

//   useFormPersist(STORAGE_KEY, {
//     watch,
//     setValue,
//     storage: typeof window !== 'undefined' ? localStorage : undefined,
//   });

//   const onSubmitHandler = async (data, e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     return await sendFormDataToChat(
//       data,
//       setServerError,
//       setIsThankYou,
//       reset,
//     ).finally(() => {
//       setIsSubmitting(false);
//     });
//   };

//   // const [error, setError] = useState(false);
//   // const formName = 'contact-form';

//   return (
//     <div className={s.formContainer}>
//       {!isThankYou && !serverError && !isSubmitting && (
//         <>
//           <h3 className={s.title}>Записатися на прийом</h3>
//           <form
//             onSubmit={handleSubmit(onSubmitHandler)}
//             // className={s.form}
//           >
//             <div className={s.fieldsWrap}>
//               <div className={s.inputWrap}>
//                 <label className={s.inputLabel} htmlFor="nameInput">
//                   Ваше ім’я
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="namelInput"
//                   className={s.inputField}
//                   placeholder="Ваше ім'я"
//                   {...register('name')}

//                   // className={errors.name === undefined ? s.input : s.inputRed}
//                 />
//                 {errors?.name ? (
//                   <p className={s.error}>{errors?.name?.message}</p>
//                 ) : (
//                   <div className={s.emptyDiv}></div>
//                 )}
//                 {/* {touched.name && errors.name ? (
//                   <div className={s.error}>{errors.name}</div>
//                 ) : null} */}
//               </div>

//               {/* <div className={s.inputWrap}>
//                   <label className={s.inputLabel} htmlFor="emailInput">
//                     Email
//                   </label>
//                   <Field
//                     style={
//                       touched.email &&
//                       errors.email && {
//                         outline: '1px solid var(--error-color)',
//                       }
//                     }
//                     className={s.inputField}
//                     type="email"
//                     name="email"
//                     id="emailInput"
//                     placeholder="vaich@gmail.com"
//                   />
//                   {touched.email && errors.email ? (
//                     <div className={s.error}>{errors.email}</div>
//                   ) : null}
//                 </div> */}
//               <div className={s.inputWrap}>
//                 <label className={s.inputLabel} htmlFor="emailInput">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="emailInput"
//                   className={s.inputField}
//                   {...register('email')}
//                   placeholder="vaich@gmail.com"
//                 />

//                 {errors.email ? (
//                   <p className={s.error}>{errors?.email?.message}</p>
//                 ) : (
//                   <div className={s.emptyDiv}> </div>
//                 )}
//               </div>

//               {/* <div className={s.inputWrap}>
//                   <label className={s.inputLabel} htmlFor="phoneInput">
//                     Телефон
//                   </label>
//                   <Field
//                     style={
//                       touched.phone &&
//                       errors.phone && {
//                         outline: '1px solid var(--error-color)',
//                       }
//                     }
//                     className={s.inputField}
//                     type="phone"
//                     id="phoneInput"
//                     placeholder="+380"
//                     name="phone"
//                   />
//                   {touched.phone && errors.phone ? (
//                     <div className={s.error}>{errors.phone}</div>
//                   ) : null}
//                 </div> */}
//               <div className={s.inputWrap}>
//                 <label className={s.inputLabel} htmlFor="phoneInput">
//                   Телефон
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneInput"
//                   className={s.inputField}
//                   {...register('phone')}
//                   placeholder="+380"
//                 />

//                 {errors.phone ? (
//                   <p className={s.error}>{errors?.phone?.message}</p>
//                 ) : (
//                   <div className={s.emptyDiv}> </div>
//                 )}
//               </div>
//             </div>

//             {/* <label className={s.checkboxLabel} htmlFor="acceptedTerms">
//                 Згоден з політикою конфеденційності
//                 <Field
//                   className={s.acceptCheckbox}
//                   type="checkbox"
//                   id="acceptedTerms"
//                   name="acceptedTerms"
//                 />
//                 <span
//                   className={s.acceptSpan}
//                   style={
//                     touched.acceptedTerms &&
//                     errors.acceptedTerms && {
//                       outline: '1px solid var(--error-color)',
//                     }
//                   }
//                 >
//                   {values.acceptedTerms && (
//                     <AgreeSVG className={s.icon} width="16" height="16" />
//                   )}
//                   {touched.acceptedTerms && errors.acceptedTerms ? (
//                     <div className={s.error}>{errors.acceptedTerms}</div>
//                   ) : null}
//                 </span>
//               </label> */}

//             <ActionButton is404={false} />
//           </form>
//         </>
//       )}
//       {isSubmitting && <p>Is loading...</p>}

//       {isThankYou && <ThankYou />}

//       {serverError && <ErrorNote />}
//     </div>
//   );
// };
