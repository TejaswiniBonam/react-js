import propTypes from 'prop-types';

function PropsExample(props){
    return(
        <div className="card">
            <p> name : {props.name}</p>
            <p> lastName : {props.lastName} </p>
            <p> EmpID : {props.empid}</p>
        </div>
            
    );
}

PropsExample.propTypes = {
    name: propTypes.string,
    lastName: propTypes.string,
    empid: propTypes.number,
};

PropsExample.defaultProps = {
    name: "GUEST",
    lastName: "NA",
    empid: 0,
};

export default PropsExample;

