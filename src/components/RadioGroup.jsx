const RadioGroup = ({ radio_list, group_id }) => {
    //TODO: Add huh dog if selected radio button is F

    let list = new Array(radio_list.length).fill(null)

    for (const key in radio_list) {
        list.push(
            <label>
                <input
                    type='radio'
                    name={group_id}
                    id={group_id}
                    value={radio_list[key]}
                />
                {key}
            </label>
        )
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2>Grades</h2>
            {list}
        </div>
    )
}

export default RadioGroup
