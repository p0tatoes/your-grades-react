import { useEffect, useState } from 'react'
import './App.css'
import CourseForm from './components/CourseForm'
import GradesTable from './components/GradesTable'
import SearchBar from './components/SearchBar'

function App() {
    /**
     *  Object for grade entry
     *  {
     *      course_number: string
     *      course_name: string
     *      units: number
     *      grade: number
     *  }
     */
    const [gradeEntries, setGradeEntries] = useState([])

    // state for the query from the SearchBar text field
    const [searchQuery, setSearchQuery] = useState('')

    /**
     * Adds new grade entry on form submission; updates state of gradeEntries
     *
     * @param {*} e submitted form
     */
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target

        let submission_data = new FormData(form)

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

    // Sets state of searchQuery to the search bar text
    const handleSearchQuery = e => {
        const query = e.target.value
        setSearchQuery(query)
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                }}
            >
                <SearchBar
                    query={searchQuery}
                    ontype={handleSearchQuery}
                />
                <GradesTable
                    grades={gradeEntries}
                    query={searchQuery}
                />
            </div>
        </div>
    )
}

export default App
