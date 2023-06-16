import Head from 'next/head';
import styles from './assets/css/styles.module.css';

const StartQuiz = () => {
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Start Quiz</title>
		</Head>
		<div className={styles.header}>
        <img className={styles.logo} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
		<div className={styles.user_info}>
			<div className={styles.timer}>
			00:00:00
			</div>
			<img className={styles.ImgCircle} src="avatar.jpg" alt="img" width="57" height="51"/>
			<div>
				<span className={styles.userid}>User ID</span><br/>
				<span className={styles.user}>12345-BBX</span>
			</div>
		</div>
      </div>
	  <h3 className={styles.instruction}>[Course Name]</h3>
    <div className={styles.container}>
		<div className={styles.questions}>
			[Number. Question]
				<div className={styles.options}>
					<input type="radio" name="answer" value="Option1"/> 
					Option 1
				</div>
				<div className={styles.options}>
					<input type="radio" name="answer" value="Option1"/> 
					Option 2
				</div>
				<div className={styles.options}>
					<input type="radio" name="answer" value="Option1"/> 
					Option 3
				</div>
				<div className={styles.options}>
					<input type="radio" name="answer" value="Option1"/> 
					Option 4
				</div>
		</div>
	</div>
	<div className={styles.pre_next}>
		<button className={styles.previousbtn} onClick={() => window.location.href = ""}>Previous</button>
		<button className={styles.nextbtn} onClick={() => window.location.href = ""}>Next</button>
	</div>
		<div className={styles.progress_box}>
			<div className={styles.progress_title}>Attempted 3 of 60 questions</div>
			<div className={styles.progress_content}>
				<div className={styles.progress_row}>
					<div className={styles.progress_num}> 1	</div>
					<div className={styles.progress_num}> 2	</div>
					<div className={styles.progress_num}> 3	</div>
					<div className={styles.progress_num}> 4	</div>
					<div className={styles.progress_num}> 5	</div>					
					<div className={styles.progress_num}> 6	</div>
					<div className={styles.progress_num}> 7 </div>
					<div className={styles.progress_num}> 8	</div>
					<div className={styles.progress_num}> 9	</div>
					<div className={styles.progress_num}> 10 </div>
					<div className={styles.progress_num}> 11 </div>
					<div className={styles.progress_num}> 12 </div>
					<div className={styles.progress_num}> 13 </div>
					<div className={styles.progress_num}> 14 </div>
					<div className={styles.progress_num}> 15 </div>					
					<div className={styles.progress_num}> 16 </div>
					<div className={styles.progress_num}> 17 </div>
					<div className={styles.progress_num}> 18 </div>
					<div className={styles.progress_num}> 19 </div>
					<div className={styles.progress_num}> 20 </div>	
				</div>
			</div>
		</div>
	</div>
  );
};

export default StartQuiz;