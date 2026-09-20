import { Trophy } from "lucide-react";


function TagComparator(text) {

    const testo = text.props;

    return (
        <div className="flex gap-2 bg-orange-100 px-2 py-1 rounded-full text-amber-700 text-[12px]">
            <Trophy size={15}/>
            <p>{testo}</p>
        </div>
    )
}

export default TagComparator