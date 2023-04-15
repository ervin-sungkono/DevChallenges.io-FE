export default function QuoteCard({content}){
    return (
        <div className="quote-card">
            <p>{`\"${content}\"`}</p> 
        </div>
    )
}