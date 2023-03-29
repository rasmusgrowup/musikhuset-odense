import { Gothic_A1, Urbanist } from 'next/font/google'
import styles from '@/styles/layout.module.scss'

const gothicA1 = Gothic_A1({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const urbanist = Urbanist({
    subsets: ['latin']
})

export default function Layout({ children }) {
    return (
        <main className={`${urbanist.className} ${styles.main}`}>
            {children}
        </main>
    )
}