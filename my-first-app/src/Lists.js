function Lists(){
    const colors = ['red', 'green', 'blue', 'yellow'];
    const listItems = colors.map((color, index) =>
        <li>
            {color}
        </li>
    );
    return(
        <div>
            <h1>Color List</h1>
            <ul>
                {listItems}
            </ul>
        </div>

    );
}
export default Lists;