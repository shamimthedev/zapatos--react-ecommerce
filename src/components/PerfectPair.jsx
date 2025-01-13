import Container from "./Container";
import Card1 from '../assets/images/category-card1.png'
import Card2 from '../assets/images/category-card2.png'
import Card3 from '../assets/images/category-card3.png'
import Card4 from '../assets/images/category-card4.png'
import Card5 from '../assets/images/category-card5.png'
import Card6 from '../assets/images/category-card6.png'
import CategoryCard from "./CategoryCard";

const PerfectPair = () => {
  const categoryCardList = [
    {
      id: 1,
      title: 'MEN',
      src: Card1,
    },
    {
      id: 2,
      title: 'KIDS',
      src: Card2,
    },
    {
      id: 3,
      title: 'WOMEN',
      src: Card3,
    },
    {
      id: 4,
      title: 'SPORT',
      src: Card4,
    },
    {
      id: 5,
      title: 'BRANDS',
      src: Card5,
    },
    {
      id: 6,
      title: 'SANDALS',
      src: Card6,
    },
  ]

  return (
    <>
      <div className="perfect-pair-section mb-16 sm:mb-12 lg:mb-16">
        <Container>
          <div className="title-section flex justify-between items-center">
            <div className="bg-[#E4E5E7] w-[30%] h-[2px]"></div>
            <h2 className="mb-6 text-[#010101] w-[35%] text-[30px] font-bold leading-9 text-center">FIND YOUR PERFECT PAIR</h2>
            <div className="bg-[#E4E5E7] w-[30%] h-[2px]"></div>
          </div>
          <h2 className="mb-6 text-[#010101] text-[36px] font-thirdFont font-semibold leading-[56px] text-center">OUR MODEL RANGE</h2>
          <div className="pair-category-section mx-4 sm:mx-6 lg:mx-8 grid sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-4 justify-center">
            {
              categoryCardList.map((card)=>{
                return (
                  <CategoryCard key={card.id} src={card.src} cardText={card.title} />
                );
              })
            }
          </div>
        </Container>
      </div>
    </>
  );
};

export default PerfectPair;
