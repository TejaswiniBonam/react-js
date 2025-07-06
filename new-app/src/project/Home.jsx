export default function Home(){
    const info = fetchData();
    return(
        <>
        <h1> Welcome Home </h1>
        {
            info.forEach(p=>{
                return <p>{p.user}</p>;
            })
        }
        </>
    );
}
async function fetchData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try{
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
    }catch(error){
        console.log(error);
    }
    
}
