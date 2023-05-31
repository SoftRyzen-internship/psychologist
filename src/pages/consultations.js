import ReactMarkdown from 'react-markdown';
import { getConsultationsData } from '@/lib/consultations';

const ConsultationsPage = ({
  // individual,
  online,
  // benefits,
  requirements,
  // faq1,
}) => {
  return (
    <div style={{ padding: '100px' }}>
      <ReactMarkdown>{requirements.description}</ReactMarkdown>

      <ReactMarkdown>{online.list}</ReactMarkdown>

      <ReactMarkdown>{online.description}</ReactMarkdown>
    </div>
  );
};

export const getStaticProps = async () => {
  const consults = getConsultationsData();

  const { individual, online, benefits, requirements, faq1 } = consults.data;

  return {
    props: { individual, online, benefits, requirements, faq1 },
  };
};

export default ConsultationsPage;
