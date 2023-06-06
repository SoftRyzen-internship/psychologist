import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { getConsultationsData } from '@/lib/consults';

const ConsultationsPage = ({ individual, online, requirements, factors }) => {
  return (
    <>
      <Head>
        <title>Юлія Сулаєва | Консультації</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <ReactMarkdown>{requirements.description}</ReactMarkdown>
        <ReactMarkdown>{online.list}</ReactMarkdown>
        <ReactMarkdown>{online.description}</ReactMarkdown>

        <ul style={{ display: 'flex' }}>
          {individual.list.map(({ id, content }) => {
            return (
              <li key={id}>
                <ReactMarkdown>{content}</ReactMarkdown>
              </li>
            );
          })}
        </ul>

        <h2>CARDS</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {factors.cards.map(({ title, content }, index) => (
            <li key={index}>
              <h3>{title}</h3>
              <span>
                <ReactMarkdown>{content}</ReactMarkdown>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const consults = getConsultationsData();

  const { individual, online, requirements, faq1, factors, method } = consults;

  return {
    props: { individual, online, requirements, faq1, factors, method },
  };
};

export default ConsultationsPage;
