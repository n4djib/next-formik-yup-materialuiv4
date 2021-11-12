/* eslint-disable */

import React from 'react'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'


// const API_URL = 'http://localhost:1337/countries';
const API_URL = 'https://api.first.org/data/v1/countries';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const countries = ({countries}) => {
    // const { data, error } = useSWR(API_URL, fetcher);
  
    // if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;

    // if (data)
    //     countries = data

    // const {data} = countries
    // console.log(countries)

    const reshaped_countries = Object.entries(countries).map(country => (
        {"code": country[0], "name": country[1]['country']}
    ))

    
    return (
        <div>
            <h2>test</h2>
            {reshaped_countries.map(country => 
                (<div key={country.id}>{country.code} - {country.name}</div>)
            )}
            
        </div>
    )
}

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
    const countries = await fetcher(API_URL)

    const {data} = countries

    return {
        props: {
            countries: data
        }
    }
}

export default countries

