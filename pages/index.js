import Head from 'next/head';
import styles from './assets/css/styles.module.css';

const SelectCourse = () => {
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Select Course</title>
		</Head>
		<div className={styles.header}>
			<img className={styles.logo} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
			<div className={styles.user_info}>
			<img className={styles.ImgCircle} src="avatar.jpg" alt="img" width="57" height="51"/>
			<div>
				<span className={styles.userid}>User ID</span><br/>
				<span className={styles.user}>12345-BBX</span>
			</div>
		</div>
      </div>
	  <h3 className={styles.instruction}>Select a Course to take Quiz</h3>
    <div className={styles.container}>
      
      <div className={styles.row}>
        <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[CHM 111]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course=chm111"}>Start Quiz</button>
			</div>
		</div>
		   <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[CHM 112]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course="}>Start Quiz</button>
			</div>
		</div>
      </div>
      <div className={styles.row}>
                <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[MAT 111]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course="}>Start Quiz</button>
			</div>
		</div>
                <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[MAT 112]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course="}>Start Quiz</button>
			</div>
		</div>
      </div>
      <div className={styles.row}>
               <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[PHY 113]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course="}>Start Quiz</button>
			</div>
		</div>
                <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>[Course Name]<br/></text>
				[Course topic 1, Course topic 2, Course topic 3]<br/>
				50 Questions in 60 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "candx_login?course="}>Start Quiz</button>
			</div>
		</div>
      </div>
    </div>
	</div>
  );
};

export default SelectCourse;