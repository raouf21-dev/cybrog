import { GamingLibraryCard, SectionHeader, SectionWrapper } from '../../components';
import './GamingLibrary.css';
import GamingLibraryData from '../../Data/GamingLibraryData';

function GamingLibrary() {

    const GamingCards = GamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title}   category={card.category} date_added={card.date_added} download={card.download}/>
    })
  return (
    <>
        <SectionWrapper>
            <SectionHeader>
                Most Popular
            </SectionHeader>
            <div className="gaming-library-cards">
                {GamingCards}
            </div>
        </SectionWrapper>
    </>
  )
}

export default GamingLibrary;