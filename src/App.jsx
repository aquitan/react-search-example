import { Box, Button, Container, FormGroup, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"

function App() {
	const [items, setItems] = useState([])
	const [search, setSearch] = useState('')
	const inputRef = useRef()


	const onSubmit = (e) => {
		e.preventDefault()
		const value = inputRef.current.value

		if(value === '') return

		setItems(prev => {
			return [...prev, value]
		})
		inputRef.current.value = ''
	}

	const filteredItems = items.filter(item => {
		return item.toLowerCase().includes(search.toLowerCase())
	})


	return(
		<Container maxWidth='sm'>
			<Box>
				<TextField sx={{width: '100%', mb: 3}} onChange={(e) => setSearch(e.target.value)} value={search} type='text' label='Search' />
			</Box>
			<form onSubmit={onSubmit}>
				<TextField sx={{mb: 1, width: '100%'}} inputRef={inputRef} type='text' label='New item' />
				<Button sx={{width: '100%'}} variant='contained' type='submit'>Add</Button>
			</form>

			<Box sx={{mt: 3}}>
				<Typography component='b'>Items:</Typography>
			</Box>
			<List sx={{border: '1px solid #eee', mt:3}}>
				{
					items.length ? 
					filteredItems.map(item => (
						<ListItem key={item}>
							<ListItemText>{item}</ListItemText>
						</ListItem>
					)) :
					<Typography sx={{p: 1}}>Add item</Typography>
				}
			</List>
		
		</Container>
	)
}

export default App