import Head from 'next/head';
import styles from './assets/css/styles.module.css';

const Candx_login = () => {
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Login</title>
		</Head>	
		<div className={styles.login_bg}>
			<div className={styles.login_frame}>
				<div className={styles.login_logo}>
					<img className={styles.login_logo} src="rcf_logo_172_X_155.png" alt="Logo" />
				</div>
				<div style={{  
				  fontFamily: 'Satoshi', 
				  fontStyle: 'normal', 
				  fontWeight: 700, 
				  fontSize: '24px', 
				  lineHeight: '32px' 
				}}>
				  Login to [quiz app name]
				</div>
				<div style={{  
					width: '312px',
					height: '22px',
					fontFamily: 'Satoshi',
					fontStyle: 'normal',
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '22px'
				}}>
				  Fill in details appropriately to begin your quiz
				</div>
				<div className={styles.frame8}>
					<div className={styles.frame4}>
					
						<div style={{  
							width: '54px',
							height: '22px',

							fontFamily: 'Satoshi',
							fontStyle: 'normal',
							fontWeight: '500',
							fontSize: '16px',
							lineHeight: '22px'
						}}></div>
						<form method="" action="">
							<label>User ID</label>
							<input type="text" name="user_id" id="user_id" placeholder="USER ID" className={styles.input}/>
							<br/>
							<label>One Time Password</label>
							<input type="password" name="psswd" id="psswd" placeholder="OTP" className={styles.input}/>
						</form>
					</div><br/><br/><br/>
					<div className={styles.frame7}>
					<button className={styles.loginbtn} onClick={() => window.location.href = "start_quiz?course=chm111"}>Login</button>
						<div style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '0px',
						gap: '16px',
						width: '400px',
						height: '22px',
						display: 'flex'
						}}>
					Didn't get an OTP?<a href="">Click here</a>
					</div>
					</div><br/>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Candx_login;