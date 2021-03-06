import React, {useState} from 'react';
import styles from './Registration.module.scss';
import bg from '../../img/regbg.jpg'
import { BrowserRouter as Router, Link} from "react-router-dom";


const Registration = () => {
	const [name, setName] = useState("");
	const [fname, setFname] = useState("");
	const [mail, setMail] = useState("");
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
		if (!correctMail || mail === "" || name === "" || fname === "") {
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
				<p className={styles.title}>Регистрация</p>
				<form action="#">
					<input className={styles.text}
						   type="text" value={name}
						   onChange={item => setName(item.currentTarget.value)}
						   placeholder="Имя"
					/>
					<input className={styles.text}
						   type="text" value={fname}
						   onChange={item => setFname(item.currentTarget.value)}
						   placeholder="Фамилия"
					/>
					<input className={correctMail ? styles.text : styles.wrong}
						   type="text" value={mail}
						   onChange={changeMail}
						   placeholder="Почта"
					/>
					<div className={styles.in}>
						<div className={styles.remember}>
							<input className={styles.check} id="Remember" type="checkbox" onChange={() => setSaveAuth(!saveAuth)}/>
							<label htmlFor="Remember">Запомнить меня</label>
						</div>
						<button type="submit" onClick={clicked}>Зарегистрироваться</button>
						<p>Уже есть аккаунт? <Link className={styles.link} to="/login">Войти.</Link> </p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registration;
