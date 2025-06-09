function Conditional(props) {
  return (
    <div>
      {props.isEmp ? (
        <h1>{props.name} is an EMployee </h1>
      ) : (
        <h1>{props.name} is a CLIENT</h1>
      )}
    </div>
  );
}
export default Conditional;