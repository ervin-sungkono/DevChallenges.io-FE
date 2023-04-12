export default function Input({
    type = "text",
    size="md", 
    error = false,
    disabled = false,
    fullWidth = false,
    startIcon, 
    endIcon,
    multiline = false,
    row,
    name = "",
    label,
    placeholder = "Placeholder",
    value = "",
    helperText
}){
    return(
        <div className={`input-wrapper ${error ? "invalid" : ""} ${disabled ? "disabled" : ""}`} style={{width: fullWidth ? "100%" : "200px"}}>
            {label && <label for={name}>{label}</label>}
            <div className={`input-group size-${size}`}>
                {multiline ? 
                <textarea rows={row} placeholder={placeholder} autoComplete="off" disabled={disabled}>{value}</textarea> :
                <>
                    {startIcon && <span className="material-icons" style={{fontSize: 18}}>{startIcon}</span>}
                    <input type={type} id={name} name={name} placeholder={placeholder} defaultValue={value} autoComplete="off" disabled={disabled}/>
                    {endIcon && <span className="material-icons" style={{fontSize: 18}}>{endIcon}</span>}
                </>
                }
                
            </div>
            {helperText && <span>{helperText}</span>}
        </div>
    )
}