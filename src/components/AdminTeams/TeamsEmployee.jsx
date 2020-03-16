import React from 'react';

// Icon Imports
import { ReactComponent as HideIcon } from '../../assets/TeamsIcons/hide.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';

const TeamsEmployee = props => {
	return (
		<div className="teams-employee-card">
			<div className="teams-employee">
				<img
					src={props.data.profile_picture}
					alt="profile img"
					className="teams-profile-picture"
				/>
				<h3>
					{props.data.first_name} {props.data.last_name}
				</h3>
			</div>
			<div className="teams-employee-details">
				<h3 className="job-title">{props.data.job_title}</h3>
				<h3 className="teams">Teams</h3>
			</div>
			<div className="teams-employee-icons">
				<HideIcon style={{ marginRight: '2rem' }} />
				<DeleteIcon style={{ marginRight: '2rem' }} />
				<GroupIcon />
			</div>
		</div>
	);
};

export default TeamsEmployee;
