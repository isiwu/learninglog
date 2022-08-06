//import type { NextPage } from 'next'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { CgChevronDoubleRight } from "react-icons/cg";

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Log</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="max-w-xl mx-auto bg-gray-200 mt-24 shadow-xl shadow-gray-100 py-9 mb-28 rounded-lg">
        <section className="pl-6">
          <h1 className="text-center font-extrabold text-4xl mb-2">Track Your Learning</h1>
          <p className="mb-5 text-left">Make log of a Topic, which you can decide to share with others. Whenever you have a new thing for a topic, you can make new entry for it and as well edit an existing entry.</p>
          <p>
            <button type="button" className="flex items-center space-x-3 group bg-green-600 text-white text-xl pl-5 py-2 rounded-lg pr-6"><span>Register</span> <span className="text-white pt-1 group-hover:translate-x-2 transition-all duration-1000"><CgChevronDoubleRight /></span></button>
          </p>
        </section>
      </div>
    </div>
  )
}

export default IndexPage
