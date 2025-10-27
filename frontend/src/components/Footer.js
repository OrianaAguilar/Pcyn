"use server";
import Link from 'next/link'

export default async function Footer() {
  return (
     <footer className="footer">
      <h4 className="copyright">&#169;This page was made by Joao Calado</h4>
         <Link href="https://github.com/moura-code">Github</Link>
        <i className="fa fa-github"></i>
    </footer>
  );
}