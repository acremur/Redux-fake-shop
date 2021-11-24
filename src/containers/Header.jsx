import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ padding: '1rem 2rem' }} className='ui fixed menu my-2'>
            <div className="ui center">
                <Link to='/' className='link'>
                    <h1 style={{ cursor: 'pointer' }}>FakeShop</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header