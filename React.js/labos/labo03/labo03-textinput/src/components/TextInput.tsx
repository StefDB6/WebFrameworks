

interface TextInputProps {
    size: number;
    amount: number
}

const TextInput = (props: TextInputProps) => {

    const handleChange = (value: string, index: number) => {
        console.log(`Textbox ${index} changed to ${value}`)
    }

    return(
        <>
            {
                Array.from({length: props.amount}, (_, i) => <input type="text" onChange={(e) => handleChange(e.target.value, i)}/>)
            }
        </>
    )
}

export default TextInput