import FrownFace from './Icons/FrownFace';

import styles from '../styles/NoContent/NoContent.module.css';

const NoContent = () => {
	return (
		<div className={styles.container}>
			<h3>No Books to Show</h3>
			<div>
				<FrownFace />
			</div>
		</div>
	);
};

export default NoContent;