import styled from "styled-components";
import NavBar from "../../layout/components/organisms/NavBar";
import UsersPage from "./UsersPage";

const Container = styled.div`
	margin-top: 64px;
`
const HomePage = () => <>
	<NavBar />
	<Container>
		<UsersPage />
	</Container>
</>

export default HomePage
