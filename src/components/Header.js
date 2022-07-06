import './styles/Header.css';

const Header = () => {
  return (
    <header>
        <h1 className="title-red"> ST </h1>

        <nav>
            <ul>
                <li>
                    <a href="/">Github</a>
                </li>
                <li>
                    <a href="https://strangerthings.fandom.com/wiki/List_of_Deaths">Stranger things fandom</a>
                </li>
            </ul>
        </nav>
    </header>

  )
}

export default Header