import styles from "@/styles/layout.module.scss";
import Link from "next/link";
import RightArrow from "@/components/Icons/RightArrow";

export default function Linker({ href, text, arrow }) {
    return (
        <div className={styles.link}>
            <Link href={href}>{text}</Link>
            { arrow && <RightArrow />}
        </div>
    )
}