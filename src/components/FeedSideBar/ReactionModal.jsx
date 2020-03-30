import React, { useState } from 'react';
import Modal from '../../components/Modal';
import { ReactionButton } from '../../components/Feed/ReactionButton';
import { SendComments } from '../Feed/SendComment';
import { CommentButton } from '../Feed/CommentButton';
import RMComments from './RMComments';

function ReactionModal({
	profile,
	picture,
	rec,
	reactions,
	comments,
	badge,
	close,
	setSelect,
	open,
}) {
	const [messageSent, setMessageSent] = useState(false);

	const handleClose = () => {
		setSelect(false);
		close(false);
	};
	console.log(rec, 'rec');
	return (
		<>
			<Modal close={handleClose}>
				<section className="rm-parent-cont">
					<div className="rm-user-info">
						<img
							alt="recipient"
							className="rm-profile-pic"
							src={picture}
						/>
						<p>
							<span>{rec.first_name}</span>

							<span>{rec.last_name}</span>
						</p>

						<p className="rm-job_title">
							{rec.recipient_job_title}
						</p>
						{/* <p>{profile.teams}</p> */}
						{badge && (
							<img
								alt="badge"
								className="rm-badge"
								src={badge.badge_URL}
							/>
						)}

						<div className="rm-buttons">
							<ReactionButton
								reactions={reactions}
								open={open}
								inModal={true}
								rec_id={rec.id}
								id={profile.id}
							/>

							<CommentButton
								comments={comments}
								open={open}
								inModal={true}
								rec_id={rec.id}
								id={profile.id}
							/>
						</div>

						<p className="rm-message">{rec.message}</p>
					</div>
					<div className="rm-comment-box">
						<SendComments
							id={rec.id}
							messageSent={messageSent}
							setMessageSent={setMessageSent}
						/>
						{messageSent && (
							<div className="rm-comments">
								{comments.map(comm => (
									<RMComments
										key={comm.id}
										pic={comm.profile_picture}
										message={comm.message}
									/>
								))}
							</div>
						)}
					</div>
				</section>
			</Modal>
		</>
	);
}
export default ReactionModal;
