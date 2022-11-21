import styles from "./Container.module.css";

const Container = (props) => {
	// destructure props
	const { title, text } = props;
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
};

export default Container;
