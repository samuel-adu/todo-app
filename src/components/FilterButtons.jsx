function FilterButtons() {
  const filters = ["All", "Active", "Complete"];
  const filterButtons = filters.map((filter) => (
    <button key={filter} className="btn">
      {filter}
    </button>
  ));
  return <div className="filter-buttons">{filterButtons}</div>;
}

export default FilterButtons;
