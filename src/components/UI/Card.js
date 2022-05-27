import "./Card.css"
function Card(props){
    const classn ="card "+props.className;
    return (
    <div className={classn}>{props.children}</div>
    );
}
export default Card;