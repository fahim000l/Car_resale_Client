import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useRole from '../../Hooks/UseRole';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [role] = useRole(user?.email);

    console.log(role);
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
                        {
                            role === 'admin' ?
                                <>
                                    <li><Link to={'/dashboard/allellers'}>All sellers</Link></li>
                                    <li><Link to={'/dashboard/addproducts'}>All Buyers</Link></li>
                                    <li><Link to={'/dashboard/addproducts'}>Reported Items</Link></li>
                                </>
                                :
                                (
                                    role === 'Seller' ?
                                        <>
                                            <li><Link to={'/dashboard/addproducts'}>Add Product</Link></li>
                                            <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                                            <li><Link to={'/dashboard/mybuyers'}>My Buyers</Link></li>
                                        </>
                                        :
                                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                                )
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;