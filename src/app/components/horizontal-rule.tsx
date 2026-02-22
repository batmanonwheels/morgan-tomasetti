import styles from './modules/horizontal-rule.module.css';

const HorizontalRule = ({ width }: { width?: string }) => {
	return <hr className={styles.horizontalrule} style={{ width: width }} />;
};

export default HorizontalRule;
