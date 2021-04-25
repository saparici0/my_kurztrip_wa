import styles from "../../styles/Packages.module.css"
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:8080/packages');
    const data = await res.json();

    return {
        props: {packages: data}
    }

}

const Packages = ({ packages }) => {
    return (
        <div>
            <h1>All Packages</h1>
            {packages.map(pack => (
              <div key={pack.id}>
                  <Link href={'/packages/'+ pack.id} key={pack.id}>
                      <a className={ styles.single}>
                          <h3>{"Package " + pack.id}</h3>
                      </a>
                  </Link>
              </div>
            ))}
        </div>
    )
}

export default Packages;