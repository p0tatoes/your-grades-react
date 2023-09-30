import { useEffect, useState } from 'react'
import './App.css'
import CourseForm from './components/CourseForm'
import GradesTable from './components/GradesTable'

function App() {
    /**
     *  {
     *      course_number: string
     *      course_name: string
     *      units: number
     *      grade: number
     *  }
     */
    const [gradeEntries, setGradeEntries] = useState([])

    /**
     * Adds new grade entry on form submission
     *
     * @param {*} e submitted form
     */
    const handleSubmit = e => {
        e.preventDefault()

        let submission_data = new FormData(e.target)

        setGradeEntries([
            ...gradeEntries,
            {
                course_number: submission_data.get('course_number'),
                course_name: submission_data.get('course_name'),
                units: submission_data.get('course_units'),
                grade: submission_data.get('grades'),
            },
        ])
    }

    return (
        <div
            id='app'
            style={{
                display: 'flex',
                gap: '4rem',
                justifyContent: 'center',
                alignItems: 'start',
                height: '100vh',
                marginTop: '4rem',
            }}
        >
            <CourseForm onsubmit={handleSubmit} />
            <GradesTable grades={gradeEntries} />
        </div>
    )
}

export default App
