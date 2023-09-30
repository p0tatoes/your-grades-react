const TextField = ({ label, id, type }) => {
    return (
        <label
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'fit-content',
            }}
        >
            {label}
            <input
                type={type}
                name={id}
                id={id}
            />
        </label>
    )
}

export default TextField
