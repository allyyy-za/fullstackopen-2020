import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)

}

const Part = (props) => {
	return (
		<div>
			<p>Course name: {props.content.name} Exercises: {props.content.exercises}</p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
        <div>
            <p></p>
            <Part content={props.content[0]} />
            <Part content={props.content[1]} />
            <Part content={props.content[2]} />
        </div>
      </div>
    )
}

const Total = (props) => {
    return (
      <div>
        <p>Total: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
      </div>
    )
}

const App = () => {
  const varCourse = {
        name: 'Full Stack Open',
        parts: [
          {
            name: 'Object-Oriented Programming',
            exercises: 8
          },
          {
            name: 'Data Structures and Algorithm',
            exercises: 17
          },
          {
            name: 'Discrete Structures',
            exercises: 23
          }
        ]
      }

  return (
    <div>
      <Header course={varCourse.name} />
      <Content content={varCourse.parts} />
      <Total total={varCourse.parts} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))