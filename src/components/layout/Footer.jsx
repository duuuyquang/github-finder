function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          xmlns="http://www.w3.org/2000/svg"
          fillRule='evenodd'
          clipRule='evenodd'
          className='inline-block fill-current'
        >
          <path d="M15.6,-20.3C20.8,-14.3,25.8,-9.9,24.6,-5.9C23.5,-1.9,16.2,1.6,12.7,7.1C9.3,12.5,9.6,19.8,7.6,20.2C5.6,20.7,1.4,14.2,-4,11.8C-9.4,9.5,-16,11.3,-15.9,9.9C-15.8,8.6,-9.1,4.1,-10.4,-4.2C-11.8,-12.5,-21.3,-24.6,-20.9,-31.4C-20.5,-38.2,-10.3,-39.8,-2.5,-36.8C5.3,-33.8,10.5,-26.3,15.6,-20.3Z"></path>
        </svg>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer