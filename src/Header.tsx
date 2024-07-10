import React from 'react';
import './Header.scss'; // Импорт стилей
import { iconSite, iconProfile, iconBasket, iconExit, iconOrders } from '@/assets/icons';

const Header: React.FC = () => {
    return (
        <header className="header_navigation">
            <div className="header_left">
                <a href="/">
                    <img src={iconSite} alt="Pizza Logo" className="header_icon" />
                </a>
            </div>
            <nav className="header_center">
                <a href="/profile" className="header">
                    <img src={iconProfile} alt="Profile" className="header_icon" />
                    Профиль
                </a>
                <a href="/orders" className="header">
                    <img src={iconOrders} alt="Orders" className="header_icon" />
                    Заказы
                </a>
            </nav>
            <div className="header_right">
                <a href="/cart" className="header">
                    <img src={iconBasket} alt="Cart" className="header_icon" />
                    Корзина
                </a>
                <a href="/logout" className="header">
                    <img src={iconExit} alt="Logout" className="header_icon" />
                    Выйти
                </a>
            </div>
        </header>
    );
}

export default Header;
