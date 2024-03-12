'use client'

import { Calendar } from 'lucide-react';
import SubHeader from './SubHeader';
import { useMenu } from '@/lib/hooks/useMenu.hook';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import style from '@/components/styles/Header.module.scss';
import clsx from 'clsx';

const {
  HeaderArea, 
  MainNav, 
  Logo, 
  Nav, 
  NavLinkActive,
  NavList,
  NavLink,
  ButtonLink,
  ButtonLinkIcon
} = style;

const Header = () => {

  const navItems = useMenu();
  const router = usePathname();


  return (
    <>
      <SubHeader/>

      <header className={HeaderArea}>
        <div className="container">
            <nav className={MainNav}>

              <Link href="/" >
                <h1 className={Logo}>Villa</h1>
              </Link>

              <ul className={Nav}>

                {navItems.map((item, index) => {

                  return (
                    <li className={NavList} key={index}>
                      <Link href={item.path} className={clsx(NavLink, (router == item.path ? `${NavLinkActive}` : ''))}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                

                <li className={NavList}><a className={ButtonLink} href="#"><i className={ButtonLinkIcon}><Calendar  size={20}/></i> Schedule a visit</a></li>
              </ul>   

            </nav>
        </div>
      </header>
    </>
  );
};
export default Header;