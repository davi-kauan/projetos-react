import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {

    return (
        <div className={styles.Select}>
            <label htmlFor={name}>{text}:</label>
            <select 
                name={name} 
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >   
                <option>Selecione uma opção</option>
                {
                options.map(({name, id}) => (
                    <option id={id}> {name} </option>
                ))
                }
            </select>
        </div>
    )
}
export default Select