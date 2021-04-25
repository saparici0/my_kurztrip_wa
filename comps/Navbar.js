import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Kurztrip</h1>
            </div>
            <Link href="/home"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/packages"><a>Packages listing</a></Link>
        </nav>
    )
}

export default Navbar;