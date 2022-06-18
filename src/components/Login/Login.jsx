import React, {useState} from 'react';
import styles from './Login.module.scss';
import bg from '../../img/regbg.jpg'
import {Link} from "react-router-dom";


const Login = () => {
	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");
	const [saveAuth, setSaveAuth] = useState(false);
	const [correctMail, setCorrectMail] = useState(true);
	
	const changeMail = (e) => {
		// eslint-disable-next-line
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(e.currentTarget.value)) {
			setCorrectMail(false);
		} else {
			setCorrectMail(true);
		}
		setMail(e.currentTarget.value);
	}
	
	const clicked = (e) => {
		e.preventDefault();
		if (!correctMail || mail === "" || pass === "") {
			alert('Проверьте корректность введеных данных!')
			return;
		}
		
	}
	
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<div className={styles.cus}/>
				<img src={bg} alt=""/>
			</div>
			<div className={styles.regform}>
				<p className={styles.title}>Вход</p>
				<form action="#">
					<input className={correctMail ? styles.text : styles.wrong}
						   type="login" value={mail}
						   onChange={changeMail}
						   placeholder="Почта"
					/>
					<input className={styles.text}
						   type="password"
						   onChange={item => setPass(item.currentTarget.value)}
						   placeholder="Пароль"
					/>
					<div className={styles.in}>
						<div className={styles.remember}>
							<input className={styles.check} id="Remember" type="checkbox" onChange={() => setSaveAuth(!saveAuth)}/>
							<label htmlFor="Remember">Запомнить меня</label>
						</div>
						<button type="submit" onClick={clicked}>Войти</button>
						<p>Еще нет аккаунта? <Link className={styles.link} to="/registration">Регистрация.</Link> </p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
