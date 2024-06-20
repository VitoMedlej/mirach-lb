import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Conceptual | Redefining Fashion with Narrative Expression | Lebanon Based Brand',
    description: `Explore Conceptual, a Lebanon based brand, offering a unique collection where fashion transcends mere clothing. Discover garments that invite you to embrace the power of storytelling, allowing your style to become a canvas for self-expression. `,
    icons: {
        icon: `https://ucarecdn.com/818e1f50-5bc9-427c-b93c-63cc1389844c/mirach_logopng1.png`
    }
}

export default function Layout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500;700&family=Oxygen:wght@300;400&display=swap" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
