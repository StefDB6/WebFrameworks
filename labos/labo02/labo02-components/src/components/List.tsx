import ListItem from "./ListItem"

interface ListProps {
    items: string[]
}

const List = (props: ListProps) => {
    return (
        <ul>
            {props.items.map((item: string) => 
                <ListItem text={item}/>
            )}
        </ul>
    )
}

export default List