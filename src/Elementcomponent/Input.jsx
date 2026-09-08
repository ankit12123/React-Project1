export let Label = (props) => <label id={props.id} className={props.class} htmlFor={props.for}  style={props.style} >{props.text}</label>


export let Input = (props) => <input type={props.type} id={props.id} className={props.class}  alt={props.alt} style={props.style}  placeholder={props.placeholder}  />