import Data from "../Hooks/Data";

function GitHub(){

    const { loading , error, data } = Data('https://api.github.com/search/users?q=sohel');

    console.log(loading, error, data)
     
    return (
        <>
            { loading ?
                 error ?
                     console.log(error) 
                     : data ? 
                        data.map((el, i) => <p style={{
                            textAlign: 'center'
                        }} key={i}>{i+1}.{el.login}</p>) 
                            : <h1>No Data</h1> 
                                : 'Loading...' }
        </>
    )
}

export default GitHub;