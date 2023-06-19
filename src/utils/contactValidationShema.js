import * as Yup from 'yup';

const nameRegexp = /^[A-Za-zА-Яа-яіІїЇєЄґҐ'\s]+$/;
const phoneRegexp = /^\+[0-9]*$/;
const emailRegexp =
  /^[^-]+[a-zA-Z0-9._-]+[^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*[^-]$/;

export const contactValidationShema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Ім'я обов'язкове")
    .min(2, "Ім'я закоротке")
    .max(100, "Ім'я задовге")
    .matches(nameRegexp, 'Ім`я може містити тільки літери і пробіл'),
  email: Yup.string()
    .trim()
    .required("Email обов'язковий")
    .matches(emailRegexp, 'Email некоректний'),
  phone: Yup.string()
    .trim()
    .required("Телефон обов'язковий")
    .min(12, 'Телефон закороткий')
    .max(13, 'Телефон має бути не більше 13 символів')
    .matches(phoneRegexp, 'Телефон може містити тільки + та 12 цифр'),
  acceptedTerms: Yup.boolean()
    .required("Згода обов'язкова")
    .oneOf([true], 'Погодьтеся з політикою конфеденційності'),
});
