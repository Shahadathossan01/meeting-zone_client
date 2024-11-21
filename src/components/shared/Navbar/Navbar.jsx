'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import {useStoreActions, useStoreState } from 'easy-peasy'

const navigation = [
  { name: 'Home', route: '/' },
  { name: 'Booking List', route: '/bookingList' },
  { name: 'Register', route: '/register' }
 
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {user}=useStoreState(store=>store.user)
  const {logoutUser}=useStoreActions(action=>action.user)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/">
            <h1 className="-m-1.5 p-1.5">
              Meeting Zone
            </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                
              <Link key={item.name} to={item.route} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {
              user&&<h2 className="text-sm/6 font-semibold text-gray-900 me-20">
              Email: <span aria-hidden="true">{user?.email}</span>
            </h2>
            }
          
            {
              user?<Link onClick={()=>logoutUser()} to="/login" className="text-sm/6 font-semibold text-gray-900">
              Logout
            </Link>:
            <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            }

          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <Link to="/">
            <h1 className="-m-1.5 p-1.5">
              Meeting Zone
            </h1>
            </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.route} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </Link>
                  ))}
                </div>
                <div className="py-6">
                {
              user&&<h2 className="text-sm/6 font-semibold text-gray-900 me-20">
              Email: <span aria-hidden="true">{user?.email}</span>
            </h2>
            }
          
            {
              user?<Link onClick={()=>logoutUser()} to="/login" className="text-sm/6 font-semibold text-gray-900">
              Logout
            </Link>:
            <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            }

                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
