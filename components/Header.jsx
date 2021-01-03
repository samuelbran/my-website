const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="grid grid-cols-2 gap-4 bg-gray-50 p-8">
        <div>
          <h1 className="text-2xl font-bold">Samuel Bran</h1>
        </div>
        <nav className="text-right md:text-left">
          <ul>
            <li>
              <a
                className="underline hover:text-gray-500"
                href="https://www.linkedin.com/in/samuelbran/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-gray-500"
                href="https://github.com/samuelbran"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-gray-500"
                href="https://twitter.com/samuelbran"
                target="_blank"
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
