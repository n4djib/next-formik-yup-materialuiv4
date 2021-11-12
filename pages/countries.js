/* eslint-disable */

import React from 'react'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'


const API_URL = 'http://localhost:1337/countries';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const countries = ({countries}) => {
    const { data, error } = useSWR(API_URL, fetcher);
  
    if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;

    if (data)
        countries = data

    return (
        <div>
            {countries.map(country => 
                (<div key={country.id}>{country.code} - {country.name}</div>)
            )}
        </div>
    )
}

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
    const countries = await fetcher(API_URL)

    return {
        props: {
            countries
        }
    }
}

export default countries

