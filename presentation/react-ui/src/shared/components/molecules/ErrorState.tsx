import { Error } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
	align-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`
const Message = styled.span`
	margin-top: 25px;
	opacity: 0.5;
	font-size: 18px;
`

export default function ErrorState() {
	return <Container>
		<Error sx={{
			fontSize: 150,
			height: 150,
			marginTop: 30,
			opacity: 0.1,
			width: 150
		}} />
		<Message>
			Something went wrong!..
		</Message>
	</Container>
}