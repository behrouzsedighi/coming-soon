import Head from 'next/head'
import CountDown from '@/components/Countdown/Timer'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>داده نگار فن آوران پارس</title>
        <meta name="description" content="داده نگار فن آوران پارس" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div className="App">
        <div className="container">
          <svg width="150" height="150" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 10V19.5H5.20343C8.52347 19.5 10.5645 19.4815 10.8422 19.4489C13.0671 19.1877 15.0903 18.2736 16.673 16.8145L16.9818 16.5297L18.6682 18.0149L20.3546 19.5L21.4678 19.4994L22.5809 19.4988L22.9738 18.9757C26.8781 13.7766 27.0163 6.81073 23.32 1.52225C23.0481 1.13324 22.7627 0.744077 22.6859 0.657505L22.5461 0.5H20.3653H18.1846L18.6111 0.860756C19.9178 1.96612 21.1342 3.63359 21.8602 5.3144C22.5526 6.91796 22.852 8.53111 22.7971 10.3643C22.7486 11.984 22.4606 13.2694 21.8163 14.7407C21.5485 15.3523 21.1713 16.0504 21.1185 16.0322C21.0738 16.0168 20.0389 15.1094 12.6963 8.64861L8.86283 5.27543L7.56526 5.27489L6.26769 5.27436L6.28079 9.9391L6.29389 14.6038L7.87379 14.6167L9.45368 14.6296V12.2864C9.45368 10.9976 9.47243 9.95045 9.49535 9.95942C9.51821 9.96833 10.6849 10.9841 12.0879 12.2167L14.6389 14.4577L14.288 14.7807C13.5255 15.4827 12.4624 16.0275 11.2803 16.322L10.7638 16.4507L6.97466 16.4674L3.18548 16.4842V10.0002V3.51637L6.94897 3.53352C10.3265 3.54896 10.752 3.55954 11.0978 3.63675C12.3827 3.9237 13.4954 4.49015 14.4034 5.31967C15.006 5.87018 15.456 6.44471 15.7987 7.10128C16.1429 7.76048 16.3085 8.23992 16.4262 8.91827L16.5168 9.43974L17.973 10.7245C18.7774 11.4343 19.4483 11.9903 19.472 11.9668C19.4955 11.9435 19.5509 11.7051 19.5951 11.4372C19.9712 9.15499 19.4314 6.77633 18.0971 4.8359C16.4525 2.44448 13.8432 0.903385 10.8422 0.551106C10.5645 0.518513 8.52347 0.5 5.20343 0.5H0V10Z" fill="#48E0A4"/>
          </svg>


          <Typography variant="h1" component="h2" sx={{fontFamily:"Kalameh",fontSize:{xs:"30px",md:"70px"}}}>
            داده نگار فن آوران پارس
          </Typography>
          <Typography variant="h1" component="h2" sx={{fontFamily:"Kalameh",fontSize:{xs:"25px",md:"50px"},mt:"30px",mb:"60px"}}>
            به زودی...
          </Typography>
            
           <CountDown />
           <Typography variant="h1" component="h2" sx={{fontFamily:"Kalameh",fontSize:"15px",mt:"30px",mb:"60px"}}>
            شرکت داده نگار فن آوران پارس دارای مجور رسمی بهره برداری نرم افزار از سازمان نظام صنفی رایانه ای کشور
          </Typography>
          <Typography variant="h1" component="h6" sx={{fontFamily:"Kalameh",fontSize:"15px",mt:"10px",mb:"60px"}}>
            شماره تماس : 05143329030
          </Typography>
        </div>
      </div>
    </>
  )
}
