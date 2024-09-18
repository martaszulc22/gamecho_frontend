import Head from 'next/head';
import AllSearchResults from '../components/AllSearchResults';
import Header from '../components/Header';
import Footer from '../components/Footer';

function allSearchResultsPage() {
    return (
        <>
            <Header />
            <Head>
                <title>All search results / Gamecho</title>
            </Head>
            <AllSearchResults />
            <Footer />
        </>
    );
}

export default allSearchResultsPage;