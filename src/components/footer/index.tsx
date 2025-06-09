import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pb-16 py-4 text-center">
            <p><Link href={'/'}>Blog app</Link> &copy; 2025 - Todos os direitos reservados.</p>
        </footer>
   
    );
}