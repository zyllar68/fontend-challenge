import { useDebounce } from 'use-debounce';

// components
import Container from 'components/Container';
import Header from 'components/Header';
import SearchAndFilters from 'components/Filters/SearchAndFilters';
import NewsList from 'components/News/NewsList';

function NewsFeed() {
  return (
    <Container>
      <Header className="mb-10" />
      <SearchAndFilters />
      <NewsList />
    </Container>
  );
}

export default NewsFeed;
