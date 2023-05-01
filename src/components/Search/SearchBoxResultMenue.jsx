import BookPreview from "../../assets/book-cover-small.png";
import SearchBoxResultSectionTitle from "./SearchBoxResultSectionTitle";
import SearchboxResultBook from "./SearchboxResultBook";
import SearchboxResultSection from "./SearchBoxResultSection";
import SearchBoxResultsList from "./SearchBoxResultsList"
import SearchBoxResultAuthor from "./SearchBoxResultAuthor";
import AvatarImg from '../../assets/avatar-placeholder.jpg'

function SearchBoxResultMenue({isShown}) {
  return (
    <div className={`absolute top-full bg-white rounded-md shadow-lg left-0 w-full ${isShown? '': 'hidden'}`}>
      <SearchboxResultSection>
        <SearchBoxResultSectionTitle title='Stories'/>
        <SearchBoxResultsList>
          <SearchboxResultBook cover={BookPreview} title="Lorem ipsum dolor sit amet consectetur adipisicing. sfqsdfqsdfq qsdfqsdf qsdfqsfdqsdf " author="Jhon Doe"/>
          <SearchboxResultBook cover={BookPreview} title="Lorem ipsum dolor sit amet consectetur adipisicing. sfqsdfqsdfq qsdfqsdf qsdfqsfdqsdf " author="Jhon Doe"/>
          <SearchboxResultBook cover={BookPreview} title="Lorem ipsum dolor sit amet consectetur adipisicing. sfqsdfqsdfq qsdfqsdf qsdfqsfdqsdf " author="Jhon Doe"/>
        </SearchBoxResultsList>
      </SearchboxResultSection>
      <SearchboxResultSection>
        <SearchBoxResultSectionTitle title='Authors'/>
        <SearchBoxResultsList>
          <SearchBoxResultAuthor authorAvatar={AvatarImg} authorName='Jhon Doe'/>
          <SearchBoxResultAuthor authorAvatar={AvatarImg} authorName='Jhon Doe'/>
          <SearchBoxResultAuthor authorAvatar={AvatarImg} authorName='Jhon Doe'/>
        </SearchBoxResultsList>
      </SearchboxResultSection>
      <a href="" className='text-blue-900 bg-[#e0eaff4d] text-center py-3 block'>Show more results.</a>
    </div>
  )
}

export default SearchBoxResultMenue