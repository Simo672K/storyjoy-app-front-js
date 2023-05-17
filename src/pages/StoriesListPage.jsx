import Section from "../components/Section/Section";
import SectionContainer from "../components/Section/SectionContainer";
import MainContent from "../components/Main/MainContent";
import Grid from "../components/Grid/Grid";
import BookCard from "../components/Card/BookCard";

function HomePage() {
  return (
    <>
      <MainContent>
        <Section className="mt-20">
          <SectionContainer>
            <h3 className="text-5xl font-bold">
              Stories
            </h3>
            <p className="w-[45%] text-gray-400 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quisquam iste perferendis ipsum, quaerat sed necessitatibus! Fugit.
            </p>
          </SectionContainer>
        </Section>
        <Section>
          <SectionContainer>
          </SectionContainer>
        </Section>
        <Section className="mb-36">
          <SectionContainer>
            <Grid>
              {
                Array(40).fill(null).map((item, id)=><BookCard key={id}/>)
              }
            </Grid>
          </SectionContainer>
        </Section>
      </MainContent>
    </>
  );
}

export default HomePage;
