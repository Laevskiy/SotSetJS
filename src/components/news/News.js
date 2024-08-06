const News = (props) =>{


    let news = props.news.map((news)=>{

        return <div>{news.text}</div>
    })
    return(
        <div>

            {news}
            <textarea type="text"
                   placeholder="Ваша новость ... "
                   //onChange={(e)=>console.log(e.target.value)}
                   onChange={(e) => props.redoinfText(e.target.value)}
            />

            <button onClick={props.addNews}>Добавить новость</button>
        </div>
    )
}

export default News