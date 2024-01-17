import { useState } from 'react';

 const Search = () => {
const [search,setSearch] = useState("");
const [sort, setSort] = useState("");

const [maxPrice, setMaxPrice] = useState(1000000);
const [category, setCategory] = useState("");
const [page, setPage] = useState(1);



  return (
    <div className='product-search-page'>
      <aside>
<h2>Filters</h2>
<div>
  <h4>Sort</h4>
  <select value = {sort}
  onChange={(e) => setSort(e.target.value)}>
<option value="">None</option>
<option value="asc">Price (low to high)</option>
<option value="dsc">Price (high to low)</option>

  </select>
</div>


      </aside>
      <main>

      </main>
      </div>
  )
}

export default Search;