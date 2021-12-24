import Search from "./Search/Search";
import SortList from "./SortList/SortList";


function MarketInfo() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '105px'}}>
      <Search />
      <SortList />
    </div>
  )
}

export default MarketInfo;