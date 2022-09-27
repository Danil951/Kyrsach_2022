import type { GetServerSideProps, NextPage } from 'next'
import Cards from '../components/Cards'
import React, { ReactElement, useEffect, useLayoutEffect } from 'react'
import Navbar from '../components/Navbar'
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import { CreateActionSetBeer } from '../redux/actions/actions'
import store from '../redux/store/store'

export default function Home({ beers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const dispatch = useDispatch()
  dispatch(CreateActionSetBeer(beers))

  useLayoutEffect(() => {
    window.addEventListener(
      'load',
      () => {
        router.push('/')
      },
      false
    )
  })

  return <Cards />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Provider store={store}>
      <Navbar />
      {page}
    </Provider>
  )
}

const fetchData = async (beersURL: string) =>
  await axios
    .get(beersURL)
    .then((res) => ({
      error: false,
      beers: res.data,
    }))
    .catch(() => ({
      error: true,
      beers: null,
    }))

export const getServerSideProps: GetServerSideProps = async ({ params, res }: any) => {
  const url = res.req.url.split('=')[1]
  const beersURL: string = url
    ? `${process.env.BEERS_URL}?food=${url}`
    : (process.env.BEERS_URL as string)
  const data = await fetchData(beersURL)

  return {
    props: data,
  }
}
