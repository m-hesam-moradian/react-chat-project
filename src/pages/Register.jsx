import { react } from 'fontawesome'


const Register = () => {
  return (
      <div className='form-container'>
          <div className="form-box">
              <h2 className="logo">
                  react chat 
              </h2>
              <p>made by M.Hesam.Moradian</p>
              <form action="">
                  <input type="text" placeholder='Name' />
                  <input type="email"  placeholder='Email'/>
                  <input type="password"  placeholder='Password'/>
                  <input type="file" id='avatar' />
                  <label htmlFor="avatar" className='register-avatar'><img src="/images/add image.png" alt="" /> add your profile image here</label>
                  <button type='submit'>sing up</button>
              </form>
              <p>you do have an acount? <span className='login-link'>login</span></p>
          </div>
          
    </div>
  )
}
export default Register