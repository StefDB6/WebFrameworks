interface ListItemProps {
    text: string
}

const ListItem = (props: ListItemProps) => {
    return (
        <li>{props.text}</li>
    )
}

export default ListItem