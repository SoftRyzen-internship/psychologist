import homeTrainingsData from 'src/data/homeTrainingsData.json';
import Trainitem1 from 'public/icons/home-tren-item-1.svg';
import Trainitem2 from 'public/icons/home-tren-item-2.svg';
import Trainitem3 from 'public/icons/home-tren-item-3.svg';
import Trainitem4 from 'public/icons/home-tren-item-4.svg';
import Trainitem5 from 'public/icons/home-tren-item-5.svg';
import * as st from './HomeTrainings.module.css';

export const TrainingsList = () => {
  const Trainitems = {
    1: <Trainitem1 />,
    2: <Trainitem2 />,
    3: <Trainitem3 />,
    4: <Trainitem4 />,
    5: <Trainitem5 />,
  };

  return (
    <ul className={st.listTrainings}>
      {homeTrainingsData?.map(el => {
        return (
          <li key={el.id.toString()} className={st.item}>
            <span className={st.itemImg}>{Trainitems[el.id]}</span>
            <span className={st.itemText}>{el.text}</span>
          </li>
        );
      })}
    </ul>
  );
};
