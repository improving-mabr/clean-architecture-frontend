import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position='fixed'>
				<Toolbar>
					<IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						React App
					</Typography>
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<IconButton color="inherit" edge="end">
						<MoreVertIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
