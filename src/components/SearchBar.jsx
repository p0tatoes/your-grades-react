const SearchBar = ({ ontype, query }) => {
    return (
        <div
            style={{
                width: 'fit-content',
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1rem',
            }}
        >
            <input
                type='text'
                name='search_bar'
                id='search_bar'
                value={query}
                onChange={ontype}
            />
        </div>
    )
}

export default SearchBar
