import "react-notion-x/src/styles.css";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

const notion = new NotionAPI();

function Terms({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return (
        <>
            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
            />
            ;
        </>
    );
}

export default Terms;

export const getServerSideProps = async () => {
    console.log(1);
    const recordMap = await notion.getPage("60939f90361c491f81d0c055bb755d59");
    console.log(recordMap);
    return { props: { recordMap } };
};
