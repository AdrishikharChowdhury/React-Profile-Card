import React from 'react'
import Card from './components/Card'

const App = () => {

  const username="Adrishikhar Chowdhury";
  const roles="Frontend Developer";
  const bio="Hi, I am passionate about creating things and having fun.";
  const location="Kolkata, IN";
  const skills="C,C++, Python, Java, HTML, CSS, JS, React, Tailwind"
  return (
    <>
      <Card user={username} roles={roles} bio={bio} location={location} skills={skills}/>
    </>
  )
}

export default App