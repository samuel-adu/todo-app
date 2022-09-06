function FilterButton(props) {
  const filterNames = ["All", "Active", "Complete"];
  const filterButtons = filterNames.map((name) => (
    <button key={name} className="btn" onClick={() => props.setFilter(name)}>
      {name}
    </button>
  ));
  return <div className="filter-buttons">{filterButtons}</div>;
}

export default FilterButton;
