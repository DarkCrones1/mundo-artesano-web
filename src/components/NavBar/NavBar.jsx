import Link from "next/link"
import "@/css/Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <h1>Mundo Artesano</h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/catalog">Catalogo</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
}
