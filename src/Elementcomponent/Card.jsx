
  function Card({children ,id ,className}){
    return(
        <div id={id} className={className}>
            {children}
        </div>
    );
}

export default Card;