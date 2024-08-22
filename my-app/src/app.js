import { ControlPanel, User } from './components';
import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<User />
			<ControlPanel />
		</div>
	);
};
