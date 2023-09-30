import RadioGroup from './RadioGroup'
import TextField from './TextField'

const CourseForm = ({ onsubmit }) => {
    const grades = {
        'A': 4.0,
        'B+': 3.5,
        'B': 3.0,
        'C+': 2.5,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0,
    }

    return (
        <form
            onSubmit={onsubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
            <TextField
                label='Course No.'
                id='course_number'
                type='text'
            />
            <TextField
                label='Course Name'
                id='course_name'
                type='text'
            />
            <TextField
                label='Units'
                id='course_units'
                type='number'
            />
            <RadioGroup
                radio_list={grades}
                group_id='grades'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CourseForm
