export default function AuthorCard({author, genre, handleClick}){
    return (
        <div className="author-card" onClick={handleClick}>
            <div className="content">
                <h2>{author}</h2>
                <p>{genre[0].toUpperCase(0) + genre.substring(1)}</p>
            </div>
            <div className="material-icons">arrow_right_alt</div>
        </div>
    )
}