function FilterButton(props) {
  const filterNames = ["All", "Active", "Complete"];
  const filterButtons = filterNames.map((name) => (
    <button
      key={name}
      className="btn filter-btn"
      onClick={() => props.setFilter(name)}
      aria-pressed={props.isPressed(name)}
    >
      {name}
    </button>
  ));
  return <div className="filter-buttons">{filterButtons}</div>;
}

export default FilterButton;
