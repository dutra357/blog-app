import Link from "next/link";

export function Footer() {
    return (
        <footer className="text-gray pb-16 py-4 text-center">
            <p><Link href={'/'}>Blog app</Link> &copy; 2025 - Todos os direitos reservados.</p>
        </footer>
   
    );
}