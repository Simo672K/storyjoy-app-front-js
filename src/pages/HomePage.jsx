import HomePageHeader from "../components/Header/Header";
import Section from "../components/Section/Section";
import SectionContainer from "../components/Section/SectionContainer";
import MainContent from "../components/Main/MainContent";
import BookCarousel from "../components/Carousel/BookCarousel";
import SectionTitle from "../components/Section/SectionTitle";
import { Book, Health, TrendUp } from "iconsax-react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import Grid from "../components/Grid/Grid";
import BookCard from "../components/Card/BookCard";
import { categories } from "../Seed/categories"
import GenreCarousel from "../components/Carousel/GenreCarousel";
import BookShowcase from "../components/Showcase/BookShowcase";

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <MainContent>
        <Section>
          <SectionContainer>
            <SectionTitle>
              <TrendUp size="32" color="#005cfb" variant="Bulk" />
              <h3 className="text-xl font-bold ms-3">Trending on Storyjoy</h3>

              <div className="flex items-center ms-auto">
                <button
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white bg-[#005efa] me-3"
                  id="prev1"
                >
                  <RxChevronLeft className="p-0" />
                </button>
                <button
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white bg-[#005efa]"
                  id="next1"
                >
                  <RxChevronRight />
                </button>
              </div>
            </SectionTitle>
            <BookCarousel prev="#prev1" next="#next1" />
          </SectionContainer>
        </Section>
        <Section>
          <SectionContainer>
            <SectionTitle>
              <Health size="32" color="#005efa" variant="Bulk" />
              <h3 className="text-xl font-bold ms-3">
                Genres
              </h3>

              <div className="flex items-center ms-auto">
                <button
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white bg-[#005efa] me-3"
                  id="prev2"
                >
                  <RxChevronLeft className="p-0" />
                </button>
                <button
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white bg-[#005efa]"
                  id="next2"
                >
                  <RxChevronRight />
                </button>
              </div>
            </SectionTitle>
            <GenreCarousel categories={categories} settings={{nextEl:"#next2", prevEl:"#prev2"}}/>
          </SectionContainer>
        </Section>
        <Section>
          <SectionContainer>
            <div className="grid grid-cols-3">
              <BookShowcase />
            </div>
          </SectionContainer>
        </Section>
        <Section className="mb-36">
          <SectionContainer>
            <SectionTitle>
              <Book size="32" color="#005cfb" variant="Bulk" />
              <h3 className="text-xl font-bold ms-3">
                Let's find you something to read...
              </h3>
            </SectionTitle>
            <Grid>
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
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
  );
}

export default HomePage;
