import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef,useState } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {

	const loginEmail = useRef();
	const loginPassword = useRef();
	const [error, setError] = useState(false);

	const handleLogin = async(e) => {
		e.preventDefault();

		try{
			const user = await signInWithEmailAndPassword(
			auth,
			loginEmail.current.value,
			loginPassword.current.value
			)
			console.log(user);
		} catch (err){
			console.log(err.message);
			setError(true);
		}
		console.log(loginEmail.current.value,loginPassword.current.value)
}

	return (
		<div className='login-container'>
			<div className='login'>
				<h3>Se connecter</h3>
				<form className='form-submit' onSubmit={(e)=> handleLogin(e)} >
					<input type='email' placeholder='email' ref={loginEmail} required  />
					<input type='password' placeholder='password' ref={loginPassword} required />
					<input type='submit' value='Se connecter'/>
					<span> {error && "Il y a une erreur dans votre mot de passe ou votre adresse mail" }</span>
				</form>
			</div>
		</div>
	);
};

export default Login;