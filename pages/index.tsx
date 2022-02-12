import type { InferGetStaticPropsType } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export const getStaticProps = async () => {
  const products = [1, 2, 3]

  return {
    props: { products },
    revalidate: 4 * 60 * 60, // refresh props every 4 hours
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce Store with Next.js, TypeScript and Shopify</title>
        <meta name="description" content="Created by Shamar Morrison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{products}</div>
    </div>
  )
}

export default Home
