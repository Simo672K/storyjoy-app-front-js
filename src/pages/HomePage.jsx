import Grid from "../components/Grid/Grid"
import BookCard from "../components/Card/BookCard"
import HomePageHeader from "../components/Header/Header"
import Section from "../components/Section/Section"
import SectionContainer from "../components/Section/SectionContainer"
import MainContent from "../components/Main/MainContent"
import SectionTitle from "../components/Section/SectionTitle"
import { TrendUp } from "iconsax-react";
import BookCarousel from "../components/Carousel/BookCarousel"

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <MainContent>
        <Section>
          <SectionContainer>
            <SectionTitle>
              <TrendUp size="32" color="#005cfb" variant="Bulk"/>
              <h3 className="text-xl font-bold ms-3">Trending on Storyjoy</h3>
            </SectionTitle>
            <BookCarousel />
            <Grid>
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </Grid>
          </SectionContainer>
        </Section>
      </MainContent>
        
    </>
  )
}

export default HomePage