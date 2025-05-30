function PropsExample(props){
    return(
        <div className="card">
            <p> name : {props.name}</p>
            <p> lastName : {props.lastName}</p>
            <p> EmpID : {props.empid}</p>
        </div>
            
    );
}



export default PropsExample;

