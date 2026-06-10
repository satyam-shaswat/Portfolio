import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Satyam Shaswat | Data Scientist & Software Engineer',
  description: 'Portfolio of Satyam Shaswat - Aspiring Data Scientist & Software Engineer nvested in extracting actionable insights from data and developing end-to-end machine learning pipelines to solve real-world problems',
  keywords: 'Satyam Shaswat,  Data Science, MERN Stack, Machine Learning, Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
