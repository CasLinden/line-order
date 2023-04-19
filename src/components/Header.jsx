import '/src/css/header.css';

export default function Header() {
    const defaultCity = 'Tokyo'
    const defaultLine = 'Yamanote'
  return (
    <header className="header">
        <div className='site-title'>
            <div>Line<span>Legend</span></div>
        </div>
        <div className="header-right">
            <div className="city">{defaultCity}</div>
            <div className="line">{defaultLine}</div>
        </div>
    </header>
  );
}
