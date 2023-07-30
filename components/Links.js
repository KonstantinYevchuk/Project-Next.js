import Link from "next/link";
import style from "../styles/Links.module.css";

const Links = ({text, href}) => {
    return (
        <Link href={href} legacyBehavior>
            <a className={style.link}>{text}</a>
        </Link>
    )
};

export default Links