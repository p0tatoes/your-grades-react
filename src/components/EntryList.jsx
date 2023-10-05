const EntryList = ({ list }) => {
    const list_entries = list.map(list_entry => {
        let letter_grade = ''
        switch (list_entry.grade) {
            case '4':
                letter_grade = 'A'
                break
            case '3.5':
                letter_grade = 'B+'
                break
            case '3':
                letter_grade = 'B'
                break
            case '2.5':
                letter_grade = 'C+'
                break
            case '2':
                letter_grade = 'C'
                break
            case '1':
                letter_grade = 'D'
                break
            case '0':
                letter_grade = 'F'
                break
        }

        return (
            <tr style={{ textAlign: 'center' }}>
                <td
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    {list_entry.course_number}
                </td>
                <td
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    {list_entry.course_name}
                </td>
                <td
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    {list_entry.units}
                </td>
                <td
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    {letter_grade}
                </td>
            </tr>
        )
    })

    return list_entries
}

export default EntryList
