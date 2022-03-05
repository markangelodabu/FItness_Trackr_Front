import {Link} from 'react-router-dom'

const Header = ({token, handleLogout, user}) => {

	return (
		<nav>
			{token && <h3>{user.username}</h3>}
			<Link to='/'>Home</Link>
			<Link to='/routines'>Routines</Link>
			<Link to='/activities'>Activities</Link>
			{!token && <Link to='/authentication/login'>Login</Link>}
			{token && <button onClick={handleLogout}>Logout</button>}
		</nav>
	)
}

export default Header;