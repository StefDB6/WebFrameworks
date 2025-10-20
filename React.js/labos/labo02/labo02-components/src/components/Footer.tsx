interface FooterProps {
    copy: string
    year: number
}

const Footer = (props: FooterProps) => {
    return (
        <p>&copy; {props.copy} ({props.year})</p>
    )
}

export default Footer