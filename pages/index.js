import Head from "next/head";
import Header from "../components/Header";
import InfoContainer from "../components/InfoContainer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ravi Patel</title>
            </Head>
            <Header/>
            <InfoContainer/>
        </>
    );
}
