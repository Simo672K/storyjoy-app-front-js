import PillButton from '../Button/PillButton';

function CarouselSlide() {
  return (
    <div className="text-white w-2/3 mt-auto mb-20">
      <h2 className="text-5xl font-bold">
        The art of <br />
        Storytelling isn't <br />
        dead, just evolving
      </h2>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur, cupiditate odio ad vel quod in
        obcaecati dolore harum! Nisi cupiditate eum quam assumenda numquam
        laboriosam odit?
      </p>
      <div className="mt-10">
        <PillButton className="bg-[#B3F5FF] text-gray-950 font-semibold py-3">
          Explore Stories
        </PillButton>
        <PillButton className="border font-semibold py-3 ms-6">
          Explore Authors
        </PillButton>
      </div>
    </div>
  );
}

export default CarouselSlide;
