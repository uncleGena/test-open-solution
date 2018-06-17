import React from "react"
import Link from "next/link"

export default ({ pathname }) => (
  <header className="header" data-pathname={pathname}>
    <div className="header__conteainer">
      <Link href="/" prefetch>
        <a className={`header__link ${pathname === '/' ? 'is-active' : ''}`}>clock</a>
      </Link>
      <Link href="/about" prefetch>
        <a className={`header__link ${pathname === '/about' ? 'is-active' : ''}`}>github</a>
      </Link>
    </div>
    <style jsx>{`
      
      .header {
        flex: 0 0 50px;
        justify-content: center;
        align-items: center;
        display: flex;
      }

      .header__conteainer {
        
      }

      .header__link {
        margin: 0 20px;
      }

    `}</style>
  </header>
)
