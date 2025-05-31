function Lists(){
    //const colors = ['red', 'green', 'blue', 'yellow'];
    const colors = [{id: 1, name: 'red', rank: 1},
                    {id: 2, name: 'green', rank: 2},
                    {id: 3, name: 'blue', rank: 4},
                    {id: 4, name: 'yellow', rank: 3}];
    const listItems = colors.map((color, index) =>
        <li key={color.id}>
            {color.name} : {color.rank}
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