import { useEffect, useState } from 'react'
import EntryList from './EntryList'

const GradesTable = ({ grades, query }) => {
    // state for the calculated total QPI of added courses
    const [totalQPI, setTotalQPI] = useState(0.0)

    // updates calculated total QPI on renders
    useEffect(() => {
        const sumQPI = grades.reduce(
            (total, grade_entry) => total + parseFloat(grade_entry.grade),
            0.0
        )
        setTotalQPI(grades.length > 0 ? sumQPI / grades.length : 0)
    })

    // array of filtered grade entries based on search bar inputs
    const filtered_entries = grades.filter(
        grade =>
            grade.course_number.toLowerCase().includes(query.toLowerCase()) ||
            grade.course_name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <table
            style={{
                border: '0.25rem solid black',
                borderCollapse: 'collapse',
            }}
        >
            <tr>
                <th
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    Course No.
                </th>
                <th
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    Course Name
                </th>
                <th
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    Units
                </th>
                <th
                    style={{
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                        border: '0.25rem solid black',
                    }}
                >
                    Grade
                </th>
            </tr>
            <EntryList list={filtered_entries} />
            <tr>
                <th colSpan='2'></th>
                <th align='center'>Total QPI:</th>
                <td align='center'>{totalQPI}</td>
            </tr>
        </table>
    )
}

export default GradesTable
