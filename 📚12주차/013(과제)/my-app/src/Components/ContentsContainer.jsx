import Detail from "./Detail";
import Question from "./Question";
import Review from "./Review";

const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />;
    } else if (listName === "qa") {
        return <Question />;
    } else if (listName === "review") {
        return <Review />;
    }
};

export default ContentsContainer;