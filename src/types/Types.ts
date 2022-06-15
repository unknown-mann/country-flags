type currency = {
    code: string,
    name: string,
    symbol: string
}

type language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export type CountryType = {
    alpha3Code: string,
    borders: string[],
    capital: string,
    currencies: currency[],
    flag: string,
    independent: boolean,
    area: string,
    languages: language[],
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: string[]
}

export type CountriesType = {
    countries: CountryType[]
}