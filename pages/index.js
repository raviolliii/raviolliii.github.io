import Head from "next/head";
import Header from "../js/components/Header";
import InfoContainer from "../js/components/InfoContainer";
import Footer from "../js/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ravi Patel</title>
            </Head>
            <Header/>
            <InfoContainer/>
            <Footer/>
        </>
    );
}
