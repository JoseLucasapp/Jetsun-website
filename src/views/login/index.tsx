import './style.css'

export default function Login() {
    return (
        <section className='login-main'>
            <div className='login-logo'>
                <div className='login-logo-canvas'>
                    <img src={require('../../public/logo.jpg')} alt="" />
                </div>
            </div>
            <div className='login-fields'>
                <div className='login-fields-form'>
                    <p>Welcome to Jetsun</p>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button>Log in or create an account</button>
                </div>
            </div>
        </section>
    )
}