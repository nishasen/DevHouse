import styles from '../styles/components/Layout.module.css';
import { useSignOut, useUserData } from '@nhost/react';
import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import {
  HomeIcon,
  LogoutIcon,
  UserIcon,
} from '@heroicons/react/outline';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreateIcon from '@mui/icons-material/Create';
import Avatar from './Avatar';
import Header from './Header';
import Avatar1 from '../Assets/Avatars/avatar1.png';
import SideNavigation from './SideNavigation';
import UsersList from './UsersList';
import BottomNavigation from './BottomNavigation';

const Layout = () => {
  const user = useUserData();
  const { signOut } = useSignOut()
  const menuItems = [
    {
      label: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: UserIcon,
    },
    {
      label: 'Logout',
      onClick: signOut,
      icon: LogoutIcon,
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <Link to="/">
            <Header fontsize={'2.5rem'}/>
          </Link>

          <Menu as="div" className={styles.menu}>
            <div className={styles['header-buttons']}>
              <Button size="small" variant="contained">Schedule an event</Button>
              <Button size="small" variant="outlined">Create Room</Button>
            </div>
            <div className={styles['icon-buttons']}>
              <IconButton color="primary">
                <CalendarMonthIcon />
              </IconButton>
              <IconButton color="primary">
                <CreateIcon />
              </IconButton>
            </div>
            <Menu.Button className={styles['menu-button']}>
              <Avatar src={Avatar1} alt={user?.displayName} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter={styles['menu-transition-enter']}
              enterFrom={styles['menu-transition-enter-from']}
              enterTo={styles['menu-transition-enter-to']}
              leave={styles['menu-transition-leave']}
              leaveFrom={styles['menu-transition-leave-from']}
              leaveTo={styles['menu-transition-leave-to']}
            >
              <Menu.Items className={styles['menu-items-container']}>
                <div className={styles['menu-header']}>
                  <Avatar src={user?.avatarUrl} alt={user?.displayName} />
                  <div className={styles['user-details']}>
                    <span>{user?.displayName}</span>
                    <span className={styles['user-email']}>{user?.email}</span>
                  </div>
                </div>

                <div className={styles['menu-items']}>
                  {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                    <div key={label} className={styles['menu-item']}>
                      <Menu.Item>
                        {href ? (
                          <Link to={href}>
                            <Icon />
                            <span>{label}</span>
                          </Link>
                        ) : (
                          <button onClick={onClick}>
                            <Icon />
                            <span>{label}</span>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>

      <aside className={styles['left-aside']}>
          <SideNavigation />
          <BottomNavigation />
      </aside>
      <main className={styles.main}>
        <div className={styles['main-container']}>
          <Outlet context={{ user }} />
        </div>
      </main>
      <aside className={styles['right-aside']}>
          <UsersList />
      </aside>
    </div>
  );
};

export default Layout;
