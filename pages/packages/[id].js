export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8080/packages');
    const data = await res.json();

    const paths = data.map(pack => {
        return {
            params: {id: pack.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:8080/packages/' + id);
    const data = await res.json();

    return {
        props: { pack: data }
    }
}

const PackageDetails = ({ pack }) => {
    return (
        <div>
            <h1>Package Details</h1>
            <p>Address: { pack.address }</p>
            <p>Weight: { pack.weight }</p>
            <p>Volume: { pack.volume }</p>
        </div>
    )
}

export default PackageDetails;