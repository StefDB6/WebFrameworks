interface CheckboxProps {
    size: number
}

const Checkbox = (props : CheckboxProps) => {

    const handleCheckboxChange = (checked: boolean, row: number, column: number) => {
        console.log(`Checkbox ${row}, ${column} changed to ${checked}`)
    }

    // const CreateArray = () => {
    //     return (
    //         Array.from({length: props.size}, (_, row) => 
    //             Array.from({length: props.size}, (_, col) => 
    //                 <input className="checkBox" type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked, row, col) }/>
    //             )
    //         )
    //     )
    // }

    return(
    <div className="checkBoxGrid">
        {
            Array.from({length: props.size}, (_, row) => 
                Array.from({length: props.size}, (_, col) => 
                    <input className="checkBox" type="checkbox" onChange={(e) => handleCheckboxChange(e.target.checked, row, col) }/>
                )
            )
        }
    </div>
    )
}

export default Checkbox