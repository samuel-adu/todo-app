function FilterButtons(props) {
  return (
    <div className="filter-buttons">
      <button className="btn">All</button>
      <button className="btn" onClick={props.filterActive}>
        Active
      </button>
      <button className="btn" onClick={props.filterCompleted}>
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
