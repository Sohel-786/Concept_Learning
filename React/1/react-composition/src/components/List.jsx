function List({list}) {
    return (
        <ul className="nav_list">
            {
                list.map((el, i) => <li key={i}>{el}</li>)
            }
        </ul>
    )
}

export default List;