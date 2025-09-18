interface HeaderProps {
    title: string
    subtitle: string
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </>
    )
}

export default Header