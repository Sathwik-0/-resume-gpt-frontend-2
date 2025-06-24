import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [jobDescription, setJobDescription] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [loading, setLoading] = useState(false)

  const generateContent = async () => {
    if (!jobDescription.trim()) {
      alert('Please enter a job description')
      return
    }

    setLoading(true)
    try {
      // This would connect to your backend API
      // For now, showing placeholder functionality
      setTimeout(() => {
        setResume('Generated resume content would appear here...')
        setCoverLetter('Generated cover letter content would appear here...')
        setLoading(false)
      }, 2000)
    } catch (error) {
      console.error('Error generating content:', error)
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>ResumeGPT - AI Resume & Cover Letter Generator</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="jobDescription">
          <h3>Job Description:</h3>
        </label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <button
        onClick={generateContent}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Generating...' : 'Generate Resume & Cover Letter'}
      </button>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Generated Resume:</h3>
          <div style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '15px',
            minHeight: '300px',
            backgroundColor: '#f9f9f9'
          }}>
            {resume || 'Resume will appear here after generation...'}
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3>Generated Cover Letter:</h3>
          <div style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '15px',
            minHeight: '300px',
            backgroundColor: '#f9f9f9'
          }}>
            {coverLetter || 'Cover letter will appear here after generation...'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App