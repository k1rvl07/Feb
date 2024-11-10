// Секции
import Header from "@sections/Header";
import MainContent from "@sections/MainContent";
import Collection from "@sections/Collection";
import Artifacts from "@sections/Artifacts";
import Help from "@sections/Help";

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
                <Collection />
                <Artifacts />
                <Help />
            </main>
        </>
    );
}