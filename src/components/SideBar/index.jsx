import React from 'react';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as HistoryIcon } from '../../assets/history.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as PowerIcon } from '../../assets/signout.svg';
import { ReactComponent as TeamIcon } from '../../assets/workspacenav.svg';
import { SidebarLink } from './SideBarLink';
import { signout } from '../Auth';

function Sidebar({ user }) {
	const [open, setOpen] = React.useState(false);

	return (
		<section className={`side-nav${open ? ' is-open' : ''}`}>
			<section className="nav-hamburger" onClick={() => setOpen(!open)}>
				<Hamburger open={open} setOpen={setOpen} />
			</section>
			<section className={`${open ? 'side-nav-profile' : 'hidden'}`}>
				<img src={user.profile.profile_picture} alt="User" />
				<p>
					{user.profile.first_name} {user.profile.last_name}
				</p>
			</section>
			<nav>
				<SidebarLink
					path={
						user.profile.user_type === 'admin'
							? '/dashboard'
							: '/workspace'
					}
					name="Teams"
					icon={HomeIcon}
					open={open}
				/>
				<SidebarLink
					path={'/workspace'}
					name="Workspace"
					icon={TeamIcon}
					open={open}
				/>
				<SidebarLink
					path={`/profile/${user.profile.id}`}
					name="Profile"
					icon={ProfileIcon}
					open={open}
					className="fill-white"
				/>

				<SidebarLink
					path="/"
					name="Feed"
					icon={HistoryIcon}
					open={open}
				/>
				<SidebarLink
					path="/settings"
					name="Settings"
					icon={SettingsIcon}
					open={open}
					className="fill-white"
				/>
			</nav>
			<section className="nav-signout" onClick={() => signout()}>
				<SidebarLink
					path="/signout"
					name="Sign Out"
					icon={PowerIcon}
					open={open}
					className="fill-white"
				/>
			</section>
		</section>
	);
}

export default connect(state => ({ ...state }), {})(Sidebar);
