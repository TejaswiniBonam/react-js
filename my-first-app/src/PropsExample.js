import propTypes from 'prop-types';

function PropsExample(props){
    return(
        <div className="card">
            <p> name : {props.name}</p>
            <p> lastName : {props.lastName || 'NA'} </p>
            <p> EmpID : {props.empid || 0}</p>
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

