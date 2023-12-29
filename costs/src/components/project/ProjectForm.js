import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'

function ProjectForm({projectData}) {
	const navigate = useNavigate();
	const [project, setProject] = useState(projectData || {})
	const [categories, setCategories] = useState([])

	function submit (e) {
		e.preventDefault()
		project.cost = 0
		project.services = []

		fetch('http://localhost:5000/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		})
		.then((resp) => resp.json())
		.then(() => {
			navigate('/projects')
		})
	}

function handleChange (e) {
	setProject({...project, [e.target.name]: e.target.value})
}

useEffect(() => { 
	fetch('http://localhost:5000/categories', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((resp) => resp.json())
		.then((data) => {
			setCategories(data)
		})
	}, [])

function handleCategory (e) {
	setProject({...project, 
		category: {
			id: e.target.value,
			name: e.target.options[e.target.selectedIndex].text
		}
	})
}

return (
	<form onSubmit={submit} className={styles.ProjectForm}>
		<Input 
			type='text'
			text='Nome do projeto'
			name='name'
			placeholder='Insira o nome do projeto...'
			handleOnChange={handleChange}
			value={project.name}
		/>
		<Input
			type='number'
			text='Orçamento do projeto'
			name='budget'
			placeholder='Insira o orçamento total...'
			handleOnChange={handleChange}
			value={project.budget}
		/>
		<Select
			name='category_id'
			text='Selecione a categoria'
			options={categories}
			handleOnChange={handleCategory}
			value={project.category ? project.category.id : ''}
		/>
		<button>criar projeto</button>
	</form>
	)
}

export default ProjectForm
