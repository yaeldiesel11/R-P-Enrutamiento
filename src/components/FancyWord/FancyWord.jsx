import { useParams } from "react-router-dom";
const FancyWord = () => {
    const { word, color, background } = useParams();
    return (
        <h1 style={{ color: color, backgroundColor: background }}>
            La palabra es {word}
        </h1>
    );
}

export default FancyWord;