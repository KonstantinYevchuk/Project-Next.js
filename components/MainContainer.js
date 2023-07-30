import Links from "./Links";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
        <Head>
            <meta keywords={"my-project, next.js" + keywords}></meta>
            <title>Main Page</title>
        </Head>
            <div className="navbar">
                <Links href={"/"} text="Main" />
                <Links href={"/users"} text="Users"/>      
            </div>
            <div>{children}</div>
            <style jsx>
                {`
                    .navbar {
                        background: green;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
};

export default MainContainer