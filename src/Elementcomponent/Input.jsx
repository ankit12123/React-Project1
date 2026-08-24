export let Label = (props) => <label id={props.id} className={props.class} htmlFor={props.for} >{props.text}</label>


export let Input = (props) => <input type={props.type} id={props.id} className={props.class}  alt={props.alt} placeholder={props.placeholder}  />