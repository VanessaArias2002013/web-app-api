const Input = ({id,label,setValue,value,required,type,placeholder}) =>{
    return <label htmlFor={id}>
        {label} <br />
        <input onChange={(e)=>{setValue(e.target.value)}}
            value={value} required={required} type={type} placeholder={placeholder}
        />
        <br />
    </label>
}
export default Input