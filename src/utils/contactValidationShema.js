import * as Yup from 'yup';

const nameRegexp = /^[A-Za-zА-Яа-яіІїЇєЄґҐ'\s-]+$/;
const phoneRegexp = /^\+[0-9]*$/;
const emailRegexp =
  /^[A-Za-z0-9](?:[A-Za-z0-9._-]*[A-Za-z0-9])?@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*[^-]$/;

export const contactValidationShema = () =>
  Yup.object({
    name: Yup.string()
      .trim()
      .required("Ім'я обов'язкове")
      .min(2, "Ім'я має містити не менше 2 символів")
      .max(100, "Ім'я має містити не більше 100 символів")
      .matches(
        nameRegexp,
        'Ім`я може містити тільки літери, пробіл, апостроф та тире',
      ),
    email: Yup.string()
      .trim()
      .required("Email обов'язковий")
      .max(63, 'Email має містити не більше 63 символів')
      .matches(
        emailRegexp,
        'Email може містити латиницю, цифри, тире, крапку та дефіс',
      ),
    phone: Yup.string()
      .trim()
      .required("Телефон обов'язковий")
      .min(13, 'Телефон закороткий, має містити + на початку та 12 цифр')
      .max(13, 'Телефон задовгий,  має містити + на початку та 12 цифр')
      .matches(
        phoneRegexp,
        'Телефон некоректний, має містити + на початку та 12 цифр',
      ),
  }).required();
