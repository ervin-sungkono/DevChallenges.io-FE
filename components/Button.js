export default function Button({
    variant="filled", 
    color="default", 
    size="md", 
    disabled = false, 
    disableShadow = false, 
    startIcon, 
    endIcon, 
    children, 
    onClick
}){
    return(
        <button className={`btn btn-${variant} size-${size} ${disabled ? "disabled" : color} ${disableShadow ? "" : "shadow"}`} onClick={disabled ? null : onClick}>
            {startIcon && <span className="material-icons" style={{fontSize: 18}}>{startIcon}</span>}
            {children}
            {endIcon && <span className="material-icons" style={{fontSize: 18}}>{endIcon}</span>}
        </button>
    )
}