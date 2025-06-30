import Panel from '@enact/sandstone/Panels/Panel';
import Header from '@enact/sandstone/Panels';
import Input from '@enact/sandstone/Input';
import Button from '@enact/sandstone/Button';
import { useState } from 'react';
import css from './Auth.module.less';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { getPictureUrlHW } from '../../picsource';

import Image from '@enact/sandstone/Image';

const SignupPanel = () => {
        const { register } = useAuth(); // assume you implement `register()` in AuthContext
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [confirmPassword, setConfirmPassword] = useState('');
		const [error, setError] = useState('');
		const [success, setSuccess] = useState('');
		const [isLoading, setLoading] = useState(false);
		const navigate = useNavigate();

		const welcomeImage = getPictureUrlHW({id: 47, width:1280, height:792})



		const handleSignup = async () => {
			setError('');
			setSuccess('');
			setLoading(true);

			// Basic email format check
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				setError('Invalid email format');
				setLoading(false);
				return;
			}

			if (password !== confirmPassword) {
				setError("Passwords do not match");
				setLoading(false);
				return;
			}

			try {
				await register(email, password);
				setSuccess("Account created successfully");
				setLoading(false);
				navigate("/list");
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		const handleLoginNavigate = () => {
			navigate("/login")
		};

		return (
			<Panel>
				<Header title="Create an Account" />
				<div className={css.sideBySide}>
					<div className={css.form}>
						<Input
							placeholder="Email"
							onChange={({value}) => setEmail(value)}
							value={email}
						/>
						<Input
							placeholder="Password"
							type="password"
							onChange={({value}) => setPassword(value)}
							value={password}
						/>
						<Input
							placeholder="Confirm Password"
							type="password"
							onChange={({value}) => setConfirmPassword(value)}
							value={confirmPassword}
						/>
						<Button disabled={isLoading}  onClick={handleSignup}>Sign Up</Button>
						{error && <p className={css.error}>{error}</p>}
						{success && <p className={css.success}>{success}</p>}
						<Button onClick={handleLoginNavigate}>Log In Instead</Button>
					</div>
					<div className={css.imageCentered}>
						<Image src={welcomeImage} alt="Welcome Image"/>
					</div>
				</div>

			</Panel>
		);
};

export default SignupPanel;
