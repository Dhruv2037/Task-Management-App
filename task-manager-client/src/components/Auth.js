import react,{useState} from 'react';
import {register,login} from '../utils/api';

const auth = ({setToken})=>{
    const [isRegister,setIsRegister] = useState(true);
    const [formData,setFormData] = useState({name:'',email:'',password:''});

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = isRegister ? await register(formData) : await login(formData);
        if(response.token)
        {
                setToken(response.token);
                localStorage.setItem('token', response.token);
        }else{
            console.error(response.msg);
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                {isRegister && (
                    <div>
                        <input
                            type='text'
                            name="name"
                            placeholder='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submmit'>{isRegister? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default auth;