import React from 'react'

function SmartPos() {
  return (
    <div className='mt-10'>
      <main className='w-60 h-70 max-w-sm bg-white-100 border-2 border-inherit pr-2 pl-3 rounded-md sm:max-w-md
       my-auto mx-auto'>
        <div className='flex justify-center p-4'>
          <div>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
            </i>
          </div>
          <div>
            <h6 className='pl-2'><strong>Smart<span style={{color: 'darkRed'}}>POS</span></strong></h6>
          </div>
        </div>
        <h4 className='pt-2'>Sign In</h4>
        <form className='mt-5'>
          <div className='relative flex items-center my-3'>
            <i className='absolute ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </i>
            <input className='border-2 border-inherit py-2 px-7 rounded-md text-sm' type='text' name='username' placeholder='Your email address' 
            />
              
          </div>
          <div className='relative flex items-center'>
            <i className='absolute ml-2 mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </i>
            <input className='border-2 border-inherit py-2 px-7 rounded-md text-sm' type='text' name='password' placeholder='Your password' />
          </div>
          <button className='bg-fuchsia-600 rounded-md text-sm px-20 py-2 text-white
          mt-3'>Sign In</button>
          <div>
            <p className='text-sm text-gray-400 mt-2 mb-5'>Forgot your password?</p>
            <p>Don't have an account?</p>
          </div>
          <div>
            <button className='bg-gray-200 text-sm rounded-md px-20 p-2.5 mt-3 mb-5'><strong>Sign Up</strong></button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SmartPos
