import axios from 'axios';

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

export const sendFormDataToChat = async (
  data,
  setServerError,
  setIsThankYou,
  reset,
) => {
  const { name, email, phone } = data;
  const text = `Ім'я - ${name} Email - ${email} Телефон - ${phone} `;

  return await axios
    .post(URL_API, {
      text,
      parse_mod: 'HTML',
    })
    .then(res => {
      console.log(res);
      reset();
      setIsThankYou(true);
    })
    .then(() => {
      setTimeout(() => {
        setIsThankYou(true);
      }, 0);
    })
    .catch(error => {
      console.log(error.response.data);

      setServerError(true);
    });
};

// import axios from 'axios';

// const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
// const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
// const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}`;

// export const sendFormDataToChat = async (
//   { name, email, phone },
//   setError,
//   setIsThankYou,
// ) => {
//   const text = `Ім'я - ${name} Email - ${email} Телефон - ${phone} `;

//   try {
//     const data = await axios.post(URL_API, {
//       text,
//       parse_mod: 'HTML',
//     });

//     setIsThankYou(true);
//     return data;
//   } catch (error) {
//     setError(error.message);
//   }
// };
