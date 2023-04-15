import Head from 'next/head'
import Link from 'next/link'
import { Raleway, Montserrat } from 'next/font/google'
import { useState } from 'react'

import { getAuthorQuotes, getRandomQuote } from '@/lib/fetch'
import QuoteCard from '@/components/QuoteCard'
import AuthorCard from '@/components/AuthorCard'
import { ClipLoader } from 'react-spinners'
import InfiniteScroll from 'react-infinite-scroll-component'

const raleway = Raleway({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home({ quote }) {
  const [quotes, setQuotes] = useState(quote.data)
  const [authorVisible, setAuthorVisible] = useState(true)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(quote.pagination.currentPage)

  const getNewRandomQuote = async() => {
    setLoading(true)
    const quote = await getRandomQuote()
    setQuotes(quote.data)
    setAuthorVisible(true)
    setLoading(false)
  }

  const getListAuthorQuotes = async() => {
    setLoading(true)
    const authorQuotes = await getAuthorQuotes(quotes[0].quoteAuthor)
    setQuotes(authorQuotes.data)
    setAuthorVisible(false)
    setLoading(false)
  }

  const getNextAuthorQuotes = async(page) => {
    const nextQuotes = await getAuthorQuotes(quotes[0].quoteAuthor, page)
    setQuotes([...quotes, ...nextQuotes.data])
    if(!nextQuotes.pagination.nextPage){
      setHasMore(false)
    }
    setCurrentPage(nextQuotes.pagination.currentPage)
  }

  return(
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="Quote generator for devchallenges.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <main className={`container ${raleway.className}`}>
          <button className='random-btn' onClick={getNewRandomQuote}><p style={{fontWeight: 500}}>Random</p><span className='material-icons'>autorenew</span></button>
          {loading ? 
          <ClipLoader/> :
          <>
            {!authorVisible && <h1>Quotes by {quotes[0].quoteAuthor}</h1>}
            {authorVisible ?
            <div className='quotes-wrapper'>
              <QuoteCard content={quotes[0].quoteText}/>
            </div>
            :
            <InfiniteScroll
                className='quotes-wrapper'
                dataLength={quotes.length}
                next={() => getNextAuthorQuotes(currentPage + 1)}
                hasMore={hasMore}
                loader={<div style={{display: 'flex', justifyContent: 'center'}}><ClipLoader/></div>}
                style={{overflow: 'visible'}}
                scrollableTarget='quotes-wrapper'
              >
                  {quotes.map(quote => (
                    <QuoteCard content={quote.quoteText} key={quote._id}/>
                  ))}
            </InfiniteScroll>}
            {authorVisible && <AuthorCard author={quotes[0].quoteAuthor} genre={quotes[0].quoteGenre} handleClick={getListAuthorQuotes}/>}
          </>}
          <footer className={montserrat.className}>Created by <Link href={"https://github.com/ervin-sungkono"} target='_blank'><b>Ervin Cahyadinata Sungkono</b></Link> - devChallenges.io</footer>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const randomQuote = await getRandomQuote()

  return {
    props: {
      quote: randomQuote
    }
  }
}
