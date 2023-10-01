const SearchBar = ({ ontype, onchange, query }) => {
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
            <select
                name='search_option'
                id='search_option'
                onChange={onchange}
            >
                <option value='course_number'>Course No.</option>
                <option value='course_name'>Course Name</option>
            </select>
        </div>
    )
}

export default SearchBar
