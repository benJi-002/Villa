import { BrickWall, CalendarClock, Trophy } from 'lucide-react';
import { getFunFacts } from '@/lib/services/home-facts.service';
import styles from '@/components/styles/FunFacts.module.scss';

const {
  FunFacts:FunFactsCss,
  FlexBox,
  Fact,
  FactNumeric,
  FactText,
  FactIcon,
  FactCircle
} = styles;

const FunFacts = async () => {

  const funFactsData = await getFunFacts();

  interface Icons {
    [key: string]: JSX.Element
  }

  const iconsMap: Icons = {
    BrickWall: <BrickWall className={FactIcon}/>,
    CalendarClock: <CalendarClock className={FactIcon}/>,
    Trophy: <Trophy className={FactIcon}/>
  }

  return (
    <div className={FunFactsCss}>
      <div className="container">
        <div className={FlexBox}>

          {funFactsData.map((item) => {
            return (
              <div className={Fact} key={item.id}>
                <h2 className={FactNumeric}>{item.homeFunFacts.numeric}</h2>
                <p className={FactText} dangerouslySetInnerHTML={{__html: item.homeFunFacts.description}}/>
                <div className={FactCircle}>{iconsMap[item.homeFunFacts.icon]}</div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default FunFacts;