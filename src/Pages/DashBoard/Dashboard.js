import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const Dashboard = () => {


    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div data-theme="dark" className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    {/* <label htmlFor="dashboardDrawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-violet-500">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My Orders</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;