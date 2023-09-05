import PropTypes from 'prop-types';
import { Slider } from '@/components/Slider/Slider';
import { Container, SectionTitle } from '@/components';

export function HomeNews({ allNews }) {
  return (
    <>
      {allNews && (
        <section className="section">
          <Container>
            <SectionTitle title={'Новини'} h2 centered />

            <Slider allNews={allNews} />
          </Container>
        </section>
      )}
    </>
  );
}

HomeNews.propTypes = {
  allNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      _publishedAt: PropTypes.string.isRequired,
    }),
  ),
};
